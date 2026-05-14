import { GAME_CONFIG } from '../shared_ref.js';
import { checkCollision, resolveCombat, resolveTroopTowerCombat, resolveBombExplosions, getBlockingTower } from './CombatEngine.js';
import { spawnTroopGroup, validateDeployment } from './TroopManager.js';

export function startGameLoop(room, io) {
  room.state = 'ACTIVE';
  room.timeRemaining = room.settings.durationSeconds * 1000;
  room.passiveTimer = 0;
  room.tickCount = 0;

  const TICK_MS = GAME_CONFIG.TICK_RATE_MS;

  room.tickInterval = setInterval(() => {
    if (room.state !== 'ACTIVE') return;
    tick(room, TICK_MS, io);
  }, TICK_MS);

  console.log(`[GameLoop] Started for room ${room.code} @ ${1000 / TICK_MS} TPS`);
}

export function stopGameLoop(room) {
  if (room.tickInterval) {
    clearInterval(room.tickInterval);
    room.tickInterval = null;
  }
}

function tick(room, deltaMs, io) {
  const delta = deltaMs / 1000;
  room.tickCount++;

  // ── 0. BOT AI TICK ───────────────────────────
  botTick(room, deltaMs, io);

  const combatEvents = [];

  // ── 1. PASSIVE TOKEN TRICKLE ──────────────────
  room.passiveTimer += deltaMs;
  if (room.passiveTimer >= GAME_CONFIG.PASSIVE_TOKEN_MS) {
    room.players.forEach(p => {
      p.tokens = Math.min(p.tokens + GAME_CONFIG.PASSIVE_TOKEN_AMOUNT, GAME_CONFIG.TOKEN_CAP);
    });
    room.passiveTimer = 0;
  }

  // ── 2. DEPLOY COOLDOWNS ───────────────────────
  room.players.forEach(p => {
    if (p.deployCooldown > 0) p.deployCooldown -= deltaMs;
  });

  // ── 3. MOVE ALL TROOPS ───────────────────────
  for (const group of room.troopGroups) {
    if (!group.alive || group.inCombat || group.attackingTowerId) continue;
    const direction = group.owner === 'playerA' ? -1 : 1;
    group.y += group.speed * direction * delta;
    group.x = group.laneX;
    group.units.forEach(u => { 
      u.y = group.y + (u.offsetY || 0); 
      u.x = group.x + (u.offsetX || 0); 
    });
  }

  // ── 4. DETECT COLLISIONS & RESOLVE COMBAT ────
  const alive = room.troopGroups.filter(g => g.alive);
  for (let i = 0; i < alive.length; i++) {
    for (let j = i + 1; j < alive.length; j++) {
      if (checkCollision(alive[i], alive[j])) {
        // WAR ENGINE EXCEPTION: Engines do not stop for troops
        const hasEngine = alive[i].type === 'warEngine' || alive[j].type === 'warEngine';
        
        if (!hasEngine) {
          alive[i].inCombat = true;
          alive[j].inCombat = true;
        }

        resolveCombat(alive[i], alive[j], delta);
        combatEvents.push({
          type: 'clash',
          x: (alive[i].x + alive[j].x) / 2,
          y: (alive[i].y + alive[j].y) / 2,
          data: {},
        });
      }
    }
  }

  // ── 5. RESOLVE BOMB EXPLOSIONS ────────────────
  resolveBombExplosions(room.troopGroups, combatEvents);

  // ── 6. TOWER GATE CHECKS ─────────────────────
  for (const group of room.troopGroups.filter(g => g.alive && !g.inCombat)) {
    const enemyTowers = room.getEnemyTowers(group.owner);
    const blocker = getBlockingTower(group, enemyTowers);

    if (blocker) {
      group.attackingTowerId = blocker.id;

      // Stopping distance — reduced so they actually "reach" the tower
      const standoff = 0.7; 
      const range = (group.atkRange || 0.5) + standoff;
      const dist = Math.abs(group.y - blocker.y);

      if (dist <= range) {
        resolveTroopTowerCombat(group, blocker, delta);
        if (!blocker.alive) {
          const enemyRole = room.getOpponentRole(group.owner);
          room.stats[group.owner].towersDestroyed++;
          combatEvents.push({ type: 'tower_fall', x: blocker.x, y: blocker.y, data: { towerId: blocker.id } });
          group.attackingTowerId = null;
          group.alive = false; // Troops vanish upon destroying a tower
        } else {
          combatEvents.push({ type: 'tower_hit', x: blocker.x, y: blocker.y, data: {} });
        }
      }
    } else {
      group.attackingTowerId = null;
    }
  }

  // ── 7. CLEAR COMBAT FLAGS for surviving groups ─
  for (const group of room.troopGroups.filter(g => g.alive)) {
    if (group.inCombat) {
      // Check if opponent is still alive
      const opponent = room.troopGroups.find(g =>
        g.alive && g.owner !== group.owner && g.lane === group.lane &&
        Math.abs(g.y - group.y) <= GAME_CONFIG.COLLISION_RANGE
      );
      if (!opponent) group.inCombat = false;
    }
  }

  // ── 8. CLEAN DEAD TROOPS ─────────────────────
  room.troopGroups = room.troopGroups.filter(g => g.alive);

  // ── 9. WIN CONDITIONS ─────────────────────────
  for (const player of room.players) {
    const enemyRole = room.getOpponentRole(player.role);
    const enemyMain = room.getMainTower(enemyRole);
    if (!enemyMain.alive) {
      endGame(room, player.role, 'main_tower_destroyed', io);
      return;
    }
  }

  // ── 10. TIMER CHECK ───────────────────────────
  room.timeRemaining -= deltaMs;
  if (room.timeRemaining <= 0) {
    room.timeRemaining = 0;
    const winner = determineTowerCountWinner(room);
    endGame(room, winner, 'time_expired', io);
    return;
  }

  // ── 11. BROADCAST STATE ───────────────────────
  const state = room.buildStateSnapshot();
  io.to(room.code).emit('game_state', state);

  // Send combat events
  if (combatEvents.length > 0) {
    for (const evt of combatEvents) {
      io.to(room.code).emit('combat_event', evt);
    }
  }
}

function determineTowerCountWinner(room) {
  const countA = room.getTowerCount('playerA');
  const countB = room.getTowerCount('playerB');
  if (countA > countB) return 'playerA';
  if (countB > countA) return 'playerB';
  const mainA = room.getMainTower('playerA').hp;
  const mainB = room.getMainTower('playerB').hp;
  return mainA >= mainB ? 'playerA' : 'playerB';
}

function endGame(room, winnerRole, reason, io) {
  stopGameLoop(room);
  room.state = 'ENDED';

  io.to(room.code).emit('game_over', {
    winner: winnerRole,
    reason,
    finalState: room.buildStateSnapshot(),
    stats: room.stats,
  });

  console.log(`[GameLoop] Game over in ${room.code}: ${winnerRole} wins (${reason})`);
}

function botTick(room, deltaMs, io) {
  room.players.forEach(p => {
    if (!p.isBot) return;

    // 1. Gain tokens (simulate answering questions)
    p.botAnswerTimer = (p.botAnswerTimer || 0) + deltaMs;
    if (p.botAnswerTimer >= 4000) { // Every 4 seconds
      p.tokens = Math.min(p.tokens + 2, GAME_CONFIG.TOKEN_CAP);
      p.botAnswerTimer = 0;
    }

    // 2. Deploy troops
    if (p.deployCooldown <= 0 && p.tokens >= 4) {
      const cardTypes = ['infantry', 'guardian', 'titan'];
      const cardType = cardTypes[Math.floor(Math.random() * cardTypes.length)];
      const lanes = ['left', 'center', 'right'];
      const lane = lanes[Math.floor(Math.random() * lanes.length)];

      const validation = validateDeployment(p, cardType);
      if (validation.valid) {
        p.tokens -= validation.cost;
        p.deployCooldown = GAME_CONFIG.DEPLOY_COOLDOWN_MS;
        const group = spawnTroopGroup(room, p.role, cardType, lane);
        if (group) {
          room.troopGroups.push(group);
          room.stats[p.role].troopsDeployed++;
          // console.log(`[Bot] Deployed ${cardType} @ ${lane}`);
        }
      }
    }
  });
}
