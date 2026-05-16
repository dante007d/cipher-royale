import { GAME_CONFIG } from '../shared_ref.js';
import { checkCollision, resolveCombat, resolveTroopTowerCombat, resolveBombExplosions, getBlockingTower } from './CombatEngine.js';
import { spawnTroopGroup, validateDeployment } from './TroopManager.js';
import roomRegistry from '../roomRegistry.js'; // Needed for safe cleanup

export function startGameLoop(room, io) {
  room.state = 'ACTIVE';
  room.timeRemaining = room.settings.durationSeconds * 1000;
  room.passiveTimer = 0;
  room.tickCount = 0;

  const TICK_MS = GAME_CONFIG.TICK_RATE_MS;

  room.tickInterval = setInterval(() => {
    try {
      if (room.state !== 'ACTIVE') return;
      safeTick(room, TICK_MS, io);
    } catch (err) {
      console.error(`[CRITICAL ERROR] GameLoop Room:${room.code}`, err);
    }
  }, TICK_MS);

  console.log(`[GameLoop] Started for room ${room.code} @ ${1000 / TICK_MS} TPS`);
}

export function stopGameLoop(room) {
  if (room.tickInterval) {
    clearInterval(room.tickInterval);
    room.tickInterval = null;
  }
}

function safeTick(room, deltaMs, io) {
  // ── PRE-TICK VALIDATION ────────────────────────────────────────
  if (!room || room.state !== 'ACTIVE') return;
  if (!room.players || room.players.length < 2) {
    console.warn(`[GameLoop] Room ${room.code} has < 2 players — ending game`);
    endGameSafe(room, null, 'player_missing', io);
    return;
  }

  const delta = deltaMs / 1000;

  try {
    room.tickCount++;

    // ── 0. BOT AI TICK ───────────────────────────
    try { botTick(room, deltaMs, io); } 
    catch (e) { console.error('[Tick/Bot]', e.message); }

    // ── 1. CLEAN CORRUPT TROOPS BEFORE PROCESSING ─────────────
    room.troopGroups = room.troopGroups.filter(g => {
      if (!g) return false;
      if (!g.owner || !['playerA', 'playerB'].includes(g.owner)) return false;
      if (!g.lane  || !['left', 'center', 'right'].includes(g.lane)) return false;
      if (typeof g.x !== 'number' || isNaN(g.x)) return false;
      if (typeof g.y !== 'number' || isNaN(g.y)) return false;
      if (!Array.isArray(g.units) || g.units.length === 0) return false;
      return true;
    });

    const combatEvents = [];

    // ── 2. PASSIVE TOKEN TRICKLE ──────────────────
    room.passiveTimer += deltaMs;
    if (room.passiveTimer >= GAME_CONFIG.PASSIVE_TOKEN_MS) {
      room.players.forEach(p => {
        if (p) p.tokens = Math.min((p.tokens || 0) + GAME_CONFIG.PASSIVE_TOKEN_AMOUNT, GAME_CONFIG.TOKEN_CAP);
      });
      room.passiveTimer = 0;
    }

    // ── 3. DEPLOY COOLDOWNS ───────────────────────
    room.players.forEach(p => {
      if (p && p.deployCooldown > 0) p.deployCooldown -= deltaMs;
    });

    // ── 4. MOVE ALL TROOPS ───────────────────────
    for (const group of room.troopGroups) {
      try {
        if (!group.alive || group.inCombat || group.attackingTowerId) continue;
        const direction = group.owner === 'playerA' ? -1 : 1;
        group.y += (group.speed || 1) * direction * delta;
        // group.x is properly set in TroopManager and preserved here
        group.units.forEach(u => { 
          u.y = group.y + (u.offsetY || 0); 
          u.x = group.x + (u.offsetX || 0); 
        });
      } catch (e) { console.error('[Tick/Move]', e.message); }
    }

    // ── 5. DETECT COLLISIONS & RESOLVE COMBAT ────
    try {
      const alive = room.troopGroups.filter(g => g.alive);
      const lanes = { left: [], center: [], right: [] };
      alive.forEach(g => {
        if (lanes[g.lane]) lanes[g.lane].push(g);
      });

      for (const laneName in lanes) {
        const laneUnits = lanes[laneName];
        for (let i = 0; i < laneUnits.length; i++) {
          for (let j = i + 1; j < laneUnits.length; j++) {
            const a = laneUnits[i];
            const b = laneUnits[j];
            if (checkCollision(a, b)) {
              const hasEngine = a.type === 'warEngine' || b.type === 'warEngine';
              if (!hasEngine) {
                a.inCombat = true;
                b.inCombat = true;
              }
              resolveCombat(a, b, delta);
              combatEvents.push({
                type: 'clash',
                x: (a.x + b.x) / 2,
                y: (a.y + b.y) / 2,
                data: {},
              });
            }
          }
        }
      }
    } catch (e) { console.error('[Tick/Combat]', e.message); }

    // ── 6. RESOLVE BOMB EXPLOSIONS ────────────────
    try { resolveBombExplosions(room.troopGroups, combatEvents); }
    catch (e) { console.error('[Tick/Bombs]', e.message); }

    // ── 7. TOWER GATE CHECKS & DAMAGE ─────────────
    try {
      for (const group of room.troopGroups.filter(g => g.alive && !g.inCombat)) {
        const enemyTowers = room.getEnemyTowers(group.owner);
        const blocker = getBlockingTower(group, enemyTowers);

        if (blocker) {
          group.attackingTowerId = blocker.id;
          const standoff = 0.7; 
          const range = (group.atkRange || 0.5) + standoff;
          const dist = Math.abs(group.y - blocker.y);

          if (dist <= range + 0.5) { 
            resolveTroopTowerCombat(group, blocker, delta);
            
            if (!blocker.alive) {
              if (room.stats && room.stats[group.owner]) {
                room.stats[group.owner].towersDestroyed++;
              }
              combatEvents.push({ type: 'tower_fall', x: blocker.x, y: blocker.y, data: { towerId: blocker.id } });
              group.attackingTowerId = null;
            } else {
              combatEvents.push({ type: 'tower_hit', x: blocker.x, y: blocker.y, data: {} });
            }
          }
        } else {
          group.attackingTowerId = null;
          const enemyRole = room.getOpponentRole(group.owner);
          const main = room.getMainTower(enemyRole);
          if (main && main.alive) {
            const distToMain = Math.abs(group.y - main.y);
            if (distToMain < 2.0) {
              resolveTroopTowerCombat(group, main, delta);
            }
          }
        }
      }
    } catch (e) { console.error('[Tick/TowerDmg]', e.message); }

    // ── 8. CLEAR COMBAT FLAGS for surviving groups ─
    try {
      for (const group of room.troopGroups.filter(g => g.alive)) {
        if (group.inCombat) {
          const opponent = room.troopGroups.find(g =>
            g.alive && g.owner !== group.owner && g.lane === group.lane &&
            Math.abs(g.y - group.y) <= GAME_CONFIG.COLLISION_RANGE
          );
          if (!opponent) group.inCombat = false;
        }
      }
    } catch (e) { console.error('[Tick/ClearFlags]', e.message); }

    // ── 9. CLEAN DEAD TROOPS ─────────────────────
    room.troopGroups = room.troopGroups.filter(g => g.alive);

    // ── 10. WIN CONDITIONS ─────────────────────────
    for (const player of room.players) {
      const enemyRole = room.getOpponentRole(player.role);
      const enemyMain = room.getMainTower(enemyRole);
      if (!enemyMain.alive) {
        endGameSafe(room, player.role, 'main_tower_destroyed', io);
        return;
      }
    }

    // ── 11. TIMER CHECK ───────────────────────────
    room.timeRemaining -= deltaMs;
    if (room.timeRemaining <= 0) {
      room.timeRemaining = 0;
      const winner = determineTowerCountWinner(room);
      endGameSafe(room, winner, 'time_expired', io);
      return;
    }

    // ── 12. BROADCAST STATE ───────────────────────
    try {
      const state = buildStateSafe(room);
      io.to(room.code).emit('game_state', state);

      if (combatEvents.length > 0) {
        for (const evt of combatEvents) {
          io.to(room.code).emit('combat_event', evt);
        }
      }
    } catch (e) { console.error('[Tick/Broadcast]', e.message); }

  } catch (fatalErr) {
    // Absolutely last resort — tick threw outside all inner guards
    console.error(`[GameLoop] FATAL tick error in room ${room.code}:`, fatalErr);
    // Do NOT crash the process — end the game gracefully
    endGameSafe(room, null, 'server_error', io);
  }
}

// ── SAFE GAME END — never throws ──────────────────────────────────────────
export function endGameSafe(room, winner, reason, io) {
  try {
    if (!room || room.state === 'ENDED') return;
    room.state = 'ENDED';
    room.winner = winner;

    if (room.tickInterval) {
      clearInterval(room.tickInterval);
      room.tickInterval = null;
    }

    const payload = {
      winner:     winner ?? 'draw',
      reason:     reason ?? 'unknown',
      finalState: buildStateSafe(room),
      stats:      room.stats || {}
    };

    try {
      if (io) io.to(room.code).emit('game_over', payload);
    } catch (e) {
      console.error('[endGameSafe] emit failed:', e.message);
    }

    console.log(`[GameLoop] Game over in ${room.code}: ${winner || 'draw'} wins (${reason})`);

  } catch (e) {
    console.error('[endGameSafe] unexpected error:', e.message);
  }
}

// ── SAFE STATE BUILDER — returns empty object instead of throwing ─────────
function buildStateSafe(room) {
  try {
    if (typeof room.buildStateSnapshot === 'function') {
      return room.buildStateSnapshot();
    }
    // Fallback if method is missing/broken
    return {
      troops: (room.troopGroups || []).map(g => ({
        id:        g.id        || 'unknown',
        owner:     g.owner     || 'unknown',
        type:      g.type      || 'unknown',
        lane:      g.lane      || 'center',
        x:         isNaN(g.x) ? 0 : g.x,
        y:         isNaN(g.y) ? 0 : g.y,
        unitCount: Array.isArray(g.units) ? g.units.length : 0,
        inCombat:  !!g.inCombat
      })),
      towers: {},
      tokens: {
        playerA: room.players?.[0]?.tokens ?? 0,
        playerB: room.players?.[1]?.tokens ?? 0
      }
    };
  } catch (e) {
    console.error('[buildStateSafe] error:', e.message);
    return { troops: [], towers: {}, tokens: {} };
  }
}

function determineTowerCountWinner(room) {
  try {
    const countA = room.getTowerCount('playerA');
    const countB = room.getTowerCount('playerB');
    if (countA > countB) return 'playerA';
    if (countB > countA) return 'playerB';
    const mainA = room.getMainTower('playerA').hp;
    const mainB = room.getMainTower('playerB').hp;
    return mainA >= mainB ? 'playerA' : 'playerB';
  } catch (e) {
    return 'draw';
  }
}

function botTick(room, deltaMs, io) {
  if (!room || !room.players) return;
  room.players.forEach(p => {
    if (!p || !p.isBot) return;

    p.botAnswerTimer = (p.botAnswerTimer || 0) + deltaMs;
    if (p.botAnswerTimer >= 4000) {
      p.tokens = Math.min((p.tokens || 0) + 2, GAME_CONFIG.TOKEN_CAP);
      p.botAnswerTimer = 0;
    }

    if ((p.deployCooldown || 0) <= 0 && p.tokens >= 4) {
      const cardTypes = ['low', 'mid', 'high'];
      const cardType = cardTypes[Math.floor(Math.random() * cardTypes.length)];
      const lanes = ['left', 'center', 'right'];
      const lane = lanes[Math.floor(Math.random() * lanes.length)];

      const validation = validateDeployment(p, cardType);
      if (validation.valid) {
        p.tokens -= validation.cost;
        p.deployCooldown = GAME_CONFIG.DEPLOY_COOLDOWN_MS;
        const group = spawnTroopGroup(room, p.role, cardType, lane);
        if (group) {
          if (!room.troopGroups) room.troopGroups = [];
          room.troopGroups.push(group);
          if (room.stats && room.stats[p.role]) room.stats[p.role].troopsDeployed++;
        }
      }
    }
  });
}
