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
    return {
      tick: this.tickCount,
      timeRemaining: this.timeRemaining,
      troops: this.troopGroups.filter(g => g.alive).map(g => ({
        id: g.id,
        owner: g.owner,
        type: g.type,
        tier: g.tier,
        lane: g.lane,
        x: g.x,
        y: g.y,
        unitCount: g.units.length,
        inCombat: g.inCombat,
        attackingTowerId: g.attackingTowerId,
      })),
      towers: {
        playerA: {
          main: { hp: this.towers.playerA.main.hp, maxHp: this.towers.playerA.main.maxHp, alive: this.towers.playerA.main.alive },
          sub1: { hp: this.towers.playerA.sub1.hp, maxHp: this.towers.playerA.sub1.maxHp, alive: this.towers.playerA.sub1.alive },
          sub2: { hp: this.towers.playerA.sub2.hp, maxHp: this.towers.playerA.sub2.maxHp, alive: this.towers.playerA.sub2.alive },
          sub3: { hp: this.towers.playerA.sub3.hp, maxHp: this.towers.playerA.sub3.maxHp, alive: this.towers.playerA.sub3.alive },
        },
        playerB: {
          main: { hp: this.towers.playerB.main.hp, maxHp: this.towers.playerB.main.maxHp, alive: this.towers.playerB.main.alive },
          sub1: { hp: this.towers.playerB.sub1.hp, maxHp: this.towers.playerB.sub1.maxHp, alive: this.towers.playerB.sub1.alive },
          sub2: { hp: this.towers.playerB.sub2.hp, maxHp: this.towers.playerB.sub2.maxHp, alive: this.towers.playerB.sub2.alive },
          sub3: { hp: this.towers.playerB.sub3.hp, maxHp: this.towers.playerB.sub3.maxHp, alive: this.towers.playerB.sub3.alive },
        },
      },
      tokens: {
        playerA: this.players[0] ? this.players[0].tokens : 0,
        playerB: this.players[1] ? this.players[1].tokens : 0,
      },
    };
  }
}
