import * as THREE from 'three';
import { updateHPBar } from '../world/HPBars.js';
import { updateTowerDamageVisuals } from '../world/TowerBuilder.js';

export class StateReconciler {
  constructor(systems) {
    this.troopPool      = systems.troopPool;
    this.towerMeshes    = systems.towerMeshes;
    this.particles      = systems.particles;
    this.prevTowerStates = {};
  }

  apply(state) {
    if (!state) return;
    this._reconcileTroops(state.troops || []);
    this._reconcileTowers(state.towers || {});
  }

  _reconcileTroops(serverTroops) {
    const serverIds = new Set(serverTroops.map(t => t.id));

    serverTroops.forEach(st => {
      // Coordinate normalization (Safety for server units)
      let sx = st.x;
      let sy = st.y;
      if (Math.abs(sx) > 50 || Math.abs(sy) > 50) { sx /= 100; sy /= 100; }

      let sprite = this.troopPool.getById(st.id);
      if (!sprite) {
        sprite = this.troopPool.spawn({ ...st, x: sx, y: sy });
        // Deployment Effect
        const deployPos = new THREE.Vector3(sx, 0, sy);
        const color = st.owner === 'playerA' ? 0x00ffff : 0xff00ff;
        this.particles.emitDeployment(deployPos, color);
      } else {
        sprite.targetX = sx;
        sprite.targetZ = sy;

        // Visual Clash Animation
        if (st.inCombat) {
          sprite.setAnimation('attack');
          // Emit sparks at contact point occasionally
          if (Math.random() > 0.92) {
            const clashPos = sprite.group.position.clone().add(new THREE.Vector3(0, 0.5, 0));
            this.particles.emitClash(clashPos);
          }
        } else if (st.attackingTowerId) {
          sprite.setAnimation('attack');
        } else {
          sprite.setAnimation('walk');
        }
      }
    });

    // Handle deaths
    this.troopPool.pool.forEach(sprite => {
      if (sprite.alive && !serverIds.has(sprite.serverId)) {
        const pos = sprite.group.position.clone().add(new THREE.Vector3(0, 0.5, 0));
        
        // Bomb Squad special death
        if (sprite.troopType === 'bombSquad') {
          this.particles.emitExplosion(pos, 2.5, 0xffaa00);
        } else {
          const color = sprite.owner === 'playerA' ? 0xff4444 : 0x4444ff;
          this.particles.emitDeathMotes(pos, color);
        }
        
        sprite.returnToPool();
      }
    });
  }

  _reconcileTowers(towers) {
    ['playerA', 'playerB'].forEach(player => {
      if (!towers[player]) return;
      Object.keys(towers[player]).forEach(towerKey => {
        const serverTower = towers[player][towerKey];
        const mesh        = this.towerMeshes[player][towerKey];
        const key         = `${player}_${towerKey}`;

        if (!mesh || !serverTower) return;

        updateHPBar(mesh, serverTower.hp, serverTower.maxHp);

        const wasAlive = this.prevTowerStates[key] !== false;
        if (!serverTower.alive && wasAlive) {
          const pos = mesh.position.clone().add(new THREE.Vector3(0, 1, 0));
          this.particles.emitTowerDestruction(pos);
        }

        updateTowerDamageVisuals(mesh, serverTower.hp, serverTower.maxHp);
        this.prevTowerStates[key] = serverTower.alive;
      });
    });
  }
}
