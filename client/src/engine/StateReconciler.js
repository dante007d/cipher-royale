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

  _reconcileTroops(serverGroups) {
    const activeUnitIds = new Set();
    
    serverGroups.forEach(group => {
      // Robustness: If server didn't send individual units, treat the group center as a single unit
      const unitsToRender = (group.units && group.units.length > 0) 
        ? group.units 
        : [{ id: group.id, x: group.x, y: group.y, hp: 100 }];

      unitsToRender.forEach(st => {
        activeUnitIds.add(st.id);
        
        let sx = st.x;
        let sy = st.y;
        // Coordinate normalization
        if (Math.abs(sx) > 50 || Math.abs(sy) > 50) { sx /= 100; sy /= 100; }

        let sprite = this.troopPool.getById(st.id);
        if (!sprite) {
          sprite = this.troopPool.spawn({ ...st, type: group.type, owner: group.owner, x: sx, y: sy });
          // Deployment Effect
          const deployPos = new THREE.Vector3(sx, 0, sy);
          const color = group.owner === 'playerA' ? 0x00ffff : 0xff00ff;
          this.particles.emitDeployment(deployPos, color);
        } else {
          sprite.targetX = sx;
          sprite.targetZ = sy;

          // Visual Clash Animation
          if (group.inCombat || group.attackingTowerId) {
            sprite.setAnimation('attack');
            if (Math.random() > 0.95) {
              const clashPos = sprite.group.position.clone().add(new THREE.Vector3(0, 0.5, 0));
              this.particles.emitClash(clashPos);
            }
          } else {
            sprite.setAnimation('walk');
          }
        }
      });
    });

    // Handle deaths
    this.troopPool.pool.forEach(sprite => {
      if (sprite.alive && !activeUnitIds.has(sprite.serverId)) {
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

        // DEBUG: Log tower HP to console once per second
        if (Math.random() > 0.98) {
          console.log(`[Reconciler] Tower ${player}_${towerKey} HP: ${serverTower.hp} / ${serverTower.maxHp}`);
        }

        updateHPBar(mesh, serverTower.hp, serverTower.maxHp);

        const wasAlive = this.prevTowerStates[key] !== false;
        const isCurrentlyAlive = serverTower.alive && serverTower.hp > 0;
        
        if (!isCurrentlyAlive && wasAlive) {
          const pos = mesh.position.clone().add(new THREE.Vector3(0, 1, 0));
          this.particles.emitTowerDestruction(pos);
        }

        mesh.visible = isCurrentlyAlive;

        updateTowerDamageVisuals(mesh, serverTower.hp, serverTower.maxHp);
        this.prevTowerStates[key] = isCurrentlyAlive;
      });
    });
  }
}
