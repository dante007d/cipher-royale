import { v4 as uuidv4 } from 'uuid';
import { TOWERS, TOWER_POSITIONS } from '../shared_ref.js';
import { GAME_CONFIG } from '../shared_ref.js';

export default class GameRoom {
  constructor(code, settings = {}) {
    this.code = code;
    this.state = 'WAITING';
    this.players = [];
    this.settings = {
      durationSeconds: settings.durationSeconds || 300,
      questionBankId: settings.questionBankId || 'questions_default.json',
    };

    this.troopGroups = [];
    this.timeRemaining = (settings.durationSeconds || 300) * 1000;
    this.passiveTimer = 0;
    this.tickCount = 0;
    this.tickInterval = null;
    this.reconnectTimer = null;
    this.createdAt = Date.now();

    // Build towers for both players
    this.towers = {
      playerA: this.buildTowers('playerA'),
      playerB: this.buildTowers('playerB'),
    };

    // Stats tracking
    this.stats = {
      playerA: { troopsDeployed: 0, questionsCorrect: 0, towersDestroyed: 0 },
      playerB: { troopsDeployed: 0, questionsCorrect: 0, towersDestroyed: 0 },
    };
    this.winner = null;
  }

  buildTowers(owner) {
    const result = {};
    for (const [key, pos] of Object.entries(TOWER_POSITIONS[owner])) {
      const config = TOWERS[pos.type];
      result[key] = {
        id: pos.id,
        type: pos.type,
        x: pos.x,
        y: pos.y,
        hp: config.maxHp,
        maxHp: config.maxHp,
        alive: true,
        attackRadius: config.attackRadius,
        attackDPS: config.attackDPS,
        lane: pos.lane || null,
        gateY: pos.gateY || null,
      };
    }
    return result;
  }

  getPlayer(role) {
    return this.players.find(p => p.role === role);
  }

  getOpponentRole(role) {
    return role === 'playerA' ? 'playerB' : 'playerA';
  }

  getAllTowers() {
    return [
      ...Object.values(this.towers.playerA),
      ...Object.values(this.towers.playerB),
    ];
  }

  getEnemyTowers(ownerRole) {
    const enemyRole = this.getOpponentRole(ownerRole);
    return Object.values(this.towers[enemyRole]);
  }

  getMainTower(role) {
    return this.towers[role].main;
  }

  getTowerCount(role) {
    return Object.values(this.towers[role]).filter(t => t.alive).length;
  }

  buildStateSnapshot() {
    // PRE-FILTERED LISTS (Faster than multiple filters)
    const activeTroops = [];
    const len = this.troopGroups.length;
    for (let i = 0; i < len; i++) {
      const g = this.troopGroups[i];
      if (g.alive) {
        activeTroops.push({
          id: g.id,
          owner: g.owner,
          type: g.type,
          tier: g.tier,
          lane: g.lane,
          x: g.x,
          y: g.y,
          inCombat: g.inCombat,
          attackingTowerId: g.attackingTowerId,
          // Only send unit positions if absolutely necessary (or just send minimal units)
          units: g.units.map(u => ({ id: u.id, x: u.x, y: u.y, hp: u.hp })),
        });
      }
    }

    return {
      tick: this.tickCount,
      timeRemaining: this.timeRemaining,
      troops: activeTroops,
      towers: this.towers, // Send direct reference if possible (Socket.io will clone it)
      tokens: {
        playerA: this.players[0]?.tokens || 0,
        playerB: this.players[1]?.tokens || 0,
      },
    };
  }
}
