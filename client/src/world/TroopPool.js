import { TroopSprite } from './TroopSprite.js';

export class TroopPool {
  constructor(scene, particles) {
    this.pool = [];
    this.scene = scene;
    this.particles = particles;
    this.TROOP_TYPES = ['low', 'mid', 'high'];

    // Pre-allocate: 10 per type per player = 180 total
    this.TROOP_TYPES.forEach(type => {
      for (let i = 0; i < 10; i++) {
        const sA = new TroopSprite(type, 'playerA', scene);
        sA.particles = particles;
        this.pool.push(sA);
        
        const sB = new TroopSprite(type, 'playerB', scene);
        sB.particles = particles;
        this.pool.push(sB);
      }
    });

    console.log(`[TroopPool] Initialized with ${this.pool.length} troop meshes`);
  }

  spawn(serverTroop) {
    console.log(`[TroopPool] Spawning: type=${serverTroop.type}, owner=${serverTroop.owner}, x=${serverTroop.x}, y=${serverTroop.y}`);

    // First try exact match
    let sprite = this.pool.find(s =>
      !s.alive &&
      s.troopType === serverTroop.type &&
      s.owner     === serverTroop.owner
    );

    // Fallback: any inactive sprite of same owner
    if (!sprite) {
      console.warn(`[TroopPool] No exact match for ${serverTroop.type}/${serverTroop.owner}, trying fallback`);
      sprite = this.pool.find(s => !s.alive && s.owner === serverTroop.owner);
    }

    // Last resort: create a new one
    if (!sprite) {
      console.warn(`[TroopPool] Pool exhausted, creating new troop mesh`);
      sprite = new TroopSprite(serverTroop.type || 'skirmisher', serverTroop.owner, this.scene);
      sprite.particles = this.particles;
      this.pool.push(sprite);
    }

    return sprite.spawn(serverTroop);
  }

  getById(id) {
    return this.pool.find(s => s.serverId === id);
  }

  updateAll(delta) {
    this.pool.forEach(s => s.update(delta));
  }
}
