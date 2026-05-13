import { v4 as uuidv4 } from 'uuid';
import { TROOPS, GAME_CONFIG, TOWER_POSITIONS } from '../shared_ref.js';

export function spawnTroopGroup(room, owner, cardType, lane) {
  const config = TROOPS[cardType];
  if (!config || !room) return null;

  const laneX = GAME_CONFIG.FIELD.LANE_X[lane];
  
  // Find player's tower for this lane to spawn from
  let spawnY = owner === 'playerA' ? 18.5 : -18.5; 
  const towers = room.towers[owner];
  if (towers) {
    const laneTower = Object.values(towers).find(t => t.lane === lane && t.alive);
    if (laneTower) {
      spawnY = laneTower.y;
    } else {
      const main = room.getMainTower(owner);
      if (main) spawnY = main.y;
    }
  }

  const units = [];
  for (let i = 0; i < config.count; i++) {
    units.push({
      id: uuidv4(),
      hp: config.hp,
      x: laneX + (i - Math.floor(config.count / 2)) * 0.4,
      y: spawnY,
    });
  }

  return {
    id: uuidv4(),
    owner,
    type: cardType,
    tier: config.tier,
    lane,
    laneX,
    x: laneX,
    y: spawnY,
    speed: config.speed,
    damagePerUnit: config.damage,
    towerDPS: config.towerDPS,
    atkRange: config.atkRange,
    units,
    alive: true,
    inCombat: false,
    attackingTowerId: null,
    hasCharged: false,
    scratchMode: false,
    config,
  };
}

export function validateDeployment(player, cardType) {
  const config = TROOPS[cardType];
  if (!config) return { valid: false, reason: 'unknown_card' };
  if (player.tokens < config.cost) return { valid: false, reason: 'insufficient_tokens' };
  if (player.deployCooldown > 0) return { valid: false, reason: 'on_cooldown' };
  return { valid: true, cost: config.cost };
}
