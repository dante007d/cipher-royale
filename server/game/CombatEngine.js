import { GAME_CONFIG } from '../shared_ref.js';

const COLLISION_RANGE = GAME_CONFIG.COLLISION_RANGE;

// ═══════════════════════════════════════════
// COLLISION DETECTION
// ═══════════════════════════════════════════

export function checkCollision(groupA, groupB) {
  return (
    groupA.lane === groupB.lane &&
    groupA.owner !== groupB.owner &&
    Math.abs(groupA.y - groupB.y) <= COLLISION_RANGE
  );
}

// ═══════════════════════════════════════════
// COMBAT RESOLUTION
// ═══════════════════════════════════════════

export function resolveCombat(attackerGroup, defenderGroup, deltaSeconds) {
  const TIER_RANK = { LOW: 1, MID: 2, HIGH: 3 };
  const atkTier = TIER_RANK[attackerGroup.tier] || 1;
  const defTier = TIER_RANK[defenderGroup.tier] || 1;

  // ── 1. CHAMPION IMMUNITY: LOW vs Champion ────────────
  // Champion is untouched by LOW tier troops (WIPES THEM)
  if (attackerGroup.tier === 'LOW' && defenderGroup.type === 'champion') {
    attackerGroup.units = [];
    attackerGroup.alive = false;
    return;
  }
  if (defenderGroup.tier === 'LOW' && attackerGroup.type === 'champion') {
    defenderGroup.units = [];
    defenderGroup.alive = false;
    return;
  }

  // ── 2. WAR ENGINE: Walks through enemy troops ─────────
  if (attackerGroup.type === 'warEngine' || defenderGroup.type === 'warEngine') {
    return; // Pass through (No collision combat)
  }

  // ── 3. Compute effective damage ──────────────────
  let atkDmg = attackerGroup.damagePerUnit;
  let defDmg = defenderGroup.damagePerUnit;

  // TIER ADVANTAGE: HIGH takes much less damage from LOWER tiers
  if (atkTier < defTier) {
    // Attacker is lower tier than defender
    const diff = defTier - atkTier;
    atkDmg *= (diff === 2) ? 0.15 : 0.4; // HIGH vs LOW = 0.15x, HIGH vs MID = 0.4x
  }
  if (defTier < atkTier) {
    // Defender is lower tier than attacker
    const diff = atkTier - defTier;
    defDmg *= (diff === 2) ? 0.15 : 0.4;
  }

  // Shield Wall damage reduction (Stacks with tier)
  if (defenderGroup.type === 'shieldWall' && attackerGroup.tier === 'LOW') atkDmg *= 0.6;
  if (attackerGroup.type === 'shieldWall' && defenderGroup.tier === 'LOW') defDmg *= 0.6;

  // Cavalry charge
  if (attackerGroup.type === 'cavalryRush' && !attackerGroup.hasCharged) {
    atkDmg *= 2.5; // Massive initial hit
    attackerGroup.hasCharged = true;
  }
  if (defenderGroup.type === 'cavalryRush' && !defenderGroup.hasCharged) {
    defDmg *= 2.5;
    defenderGroup.hasCharged = true;
  }

  // ── 4. Apply DPS over delta ──────────────────────
  const atkTotalDPS = atkDmg * attackerGroup.units.length * deltaSeconds;
  const defTotalDPS = defDmg * defenderGroup.units.length * deltaSeconds;

  applyDamageToGroup(defenderGroup, atkTotalDPS);
  applyDamageToGroup(attackerGroup, defTotalDPS);

  // ── 5. LOW vs LOW: Cancellation logic ────────────
  if (atkTier === 1 && defTier === 1) {
    // If they are both low and one is wiped, wipe the other if they are near equal
    if (attackerGroup.units.length === 0 && defenderGroup.units.length < 2) defenderGroup.alive = false;
    if (defenderGroup.units.length === 0 && attackerGroup.units.length < 2) attackerGroup.alive = false;
  }

  if (attackerGroup.units.length === 0) attackerGroup.alive = false;
  if (defenderGroup.units.length === 0) defenderGroup.alive = false;
}

function applyDamageToGroup(group, totalDmg) {
  let remaining = totalDmg;
  while (remaining > 0 && group.units.length > 0) {
    const front = group.units[0];
    if (front.hp <= remaining) {
      remaining -= front.hp;
      group.units.shift();
      // BOMB SQUAD: Trigger explosion on death
      if (group.type === 'bombSquad') {
        group._pendingExplosions = group._pendingExplosions || [];
        group._pendingExplosions.push({ x: group.x, y: group.y });
      }
    } else {
      front.hp -= remaining;
      remaining = 0;
    }
  }
}

// ═══════════════════════════════════════════
// TOWER COMBAT
// ═══════════════════════════════════════════

export function resolveTroopTowerCombat(troopGroup, tower, deltaSeconds) {
  let dps = troopGroup.towerDPS * troopGroup.units.length;

  if (troopGroup.config?.towerBonusDmg) {
    dps *= troopGroup.config.towerBonusDmg;
  }

  tower.hp -= dps * deltaSeconds;

  // Tower fires back
  if (troopGroup.units.length > 0) {
    const target = troopGroup.units[0];
    target.hp -= tower.attackDPS * deltaSeconds;
    if (target.hp <= 0) {
      troopGroup.units.shift();
      // BOMB SQUAD: Even on tower death
      if (troopGroup.type === 'bombSquad') {
        troopGroup._pendingExplosions = troopGroup._pendingExplosions || [];
        troopGroup._pendingExplosions.push({ x: troopGroup.x, y: troopGroup.y });
      }
    }
  }

  if (troopGroup.units.length === 0) troopGroup.alive = false;
  if (tower.hp <= 0) {
    tower.hp = 0;
    tower.alive = false;
  }
}

// ═══════════════════════════════════════════
// BOMB SQUAD EXPLOSION
// ═══════════════════════════════════════════

export function resolveBombExplosions(allGroups, combatEvents) {
  for (const group of allGroups) {
    if (!group._pendingExplosions || group._pendingExplosions.length === 0) continue;
    for (const exp of group._pendingExplosions) {
      combatEvents.push({ type: 'explosion', x: exp.x, y: exp.y, data: {} });
      for (const g of allGroups) {
        for (const unit of g.units) {
          const dist = Math.hypot(unit.x - exp.x, unit.y - exp.y);
          if (dist <= 1.5) { // Radius 1.5
            unit.hp -= 80;   // 80 flat damage
          }
        }
        g.units = g.units.filter(u => u.hp > 0);
        if (g.units.length === 0) g.alive = false;
      }
    }
    group._pendingExplosions = [];
  }
}

// ═══════════════════════════════════════════
// BLOCKING TOWER LOOKUP
// ═══════════════════════════════════════════

export function getBlockingTower(group, enemyTowers) {
  const standoff = 0.4;
  const range = (group.atkRange || 0.5) + standoff;

  // 1. Check Sub-Towers in this lane
  for (const tower of enemyTowers) {
    if (!tower.alive || tower.type === 'main') continue;
    if (tower.lane === group.lane) {
      const dist = Math.abs(group.y - tower.y);
      if (dist <= range) return tower;
      // If we haven't reached it but it's in front of us, it blocks our path to main
      if (group.owner === 'playerA' && group.y > tower.y) return null; // Path blocked but not in range
      if (group.owner === 'playerB' && group.y < tower.y) return null;
    }
  }

  // 2. Check Main Tower
  const mainTower = enemyTowers.find(t => t.type === 'main');
  if (mainTower && mainTower.alive) {
    // Only blocked if the SPECIFIC lane tower is still alive
    const laneSubAlive = enemyTowers.some(t => t.alive && t.type !== 'main' && t.lane === group.lane);
    
    if (!laneSubAlive) {
      const dist = Math.abs(group.y - mainTower.y);
      const mainRange = range + 0.5; // Slightly larger range for main
      if (dist <= mainRange) return mainTower;
    }
  }

  return null;
}
