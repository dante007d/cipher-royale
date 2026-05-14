import * as THREE from 'three';

/**
 * TroopSprite — renders troops as visible 3D mesh groups with unique models per type.
 */
export class TroopSprite {
  constructor(troopType, owner, scene) {
    this.troopType = troopType;
    this.owner     = owner;
    this.alive     = false;
    this.serverId  = null;
    this.scene     = scene;
    this.particles = null; // Injected via TroopPool

    const isA = owner === 'playerA';
    const bodyColor   = isA ? 0xff4757 : 0x2e86de;
    const helmetColor = isA ? 0xc0392b : 0x0984e3;

    this.group = new THREE.Group();

    // ── Build Unique Model ──────────────────────────
    this._buildModel(troopType, bodyColor, helmetColor, isA);

    // Drop shadow on ground
    const shadowGeo = new THREE.CircleGeometry(0.35, 8);
    const shadowMat = new THREE.MeshBasicMaterial({
      color: 0x000000, transparent: true, opacity: 0.35, depthWrite: false
    });
    this.shadow = new THREE.Mesh(shadowGeo, shadowMat);
    this.shadow.rotation.x = -Math.PI / 2;
    this.shadow.position.y = 0.02;
    this.group.add(this.shadow);

    // Initial scale
    this.group.visible = false;
    scene.add(this.group);

    // Animation
    this.animState    = 'walk';
    this.animTimer    = 0;
    this.targetX      = 0;
    this.targetZ      = 0;
  }

  _buildModel(type, bodyColor, helmetColor, isA) {
    // Basic Body with glowing core
    const bodyGeo = new THREE.BoxGeometry(0.5, 0.7, 0.35);
    const bodyMat = new THREE.MeshStandardMaterial({
      color: bodyColor, roughness: 0.4, metalness: 0.5,
      emissive: bodyColor, emissiveIntensity: 0.2
    });
    this.body = new THREE.Mesh(bodyGeo, bodyMat);
    this.body.position.y = 0.55;
    this.body.castShadow = true;
    this.group.add(this.body);

    // Glowing Core
    const coreGeo = new THREE.SphereGeometry(0.12, 8, 8);
    const coreMat = new THREE.MeshBasicMaterial({ color: isA ? 0xff0000 : 0x00ffff });
    this.core = new THREE.Mesh(coreGeo, coreMat);
    this.core.position.set(0, 0.6, 0.18);
    this.group.add(this.core);

    // Head
    const headGeo = new THREE.BoxGeometry(0.28, 0.28, 0.28);
    const headMat = new THREE.MeshStandardMaterial({ color: 0x222222 });
    this.head = new THREE.Mesh(headGeo, headMat);
    this.head.position.y = 1.05;
    this.head.castShadow = true;
    this.group.add(this.head);

    // Glowing Eyes
    const eyeGeo = new THREE.BoxGeometry(0.08, 0.04, 0.05);
    const eyeMat = new THREE.MeshBasicMaterial({ color: isA ? 0xff4400 : 0x00ccff });
    this.eyeL = new THREE.Mesh(eyeGeo, eyeMat);
    this.eyeL.position.set(-0.07, 1.08, 0.15);
    this.eyeR = new THREE.Mesh(eyeGeo, eyeMat);
    this.eyeR.position.set(0.07, 1.08, 0.15);
    this.group.add(this.eyeL, this.eyeR);

    // ── SHOULDER PLATES ──
    const shoulderGeo = new THREE.BoxGeometry(0.15, 0.15, 0.4);
    const shoulderMat = new THREE.MeshStandardMaterial({ color: 0x444444, metalness: 0.8 });
    this.shoulderL = new THREE.Mesh(shoulderGeo, shoulderMat);
    this.shoulderL.position.set(-0.3, 0.85, 0);
    this.shoulderR = new THREE.Mesh(shoulderGeo, shoulderMat);
    this.shoulderR.position.set(0.3, 0.85, 0);
    this.group.add(this.shoulderL, this.shoulderR);

    // ── UNIQUE WEAPONS/PROPS ──
    if (type === 'low') {
      this._addWeapon(0.04, 0.9, 0x95a5a6, 0.38, 0.7, 0); // Sword
      this._addWeapon(0.04, 0.9, 0x95a5a6, -0.38, 0.7, 0); // Dual wield
    } 
    else if (type === 'mid') {
      this.body.scale.set(1.3, 1.2, 1.4);
      this.shoulderL.scale.setScalar(1.5);
      this.shoulderR.scale.setScalar(1.5);
      this._addWeapon(0.035, 1.6, 0xbdc3c7, 0.5, 0.8, 0.1); // Halberd
      // Spikes on head
      const spike = new THREE.Mesh(new THREE.ConeGeometry(0.08, 0.3, 4), new THREE.MeshStandardMaterial({color: 0x555555}));
      spike.position.set(0, 1.25, 0);
      this.group.add(spike);
    }
    else if (type === 'high') {
      // THE APOCALYPTIC TITAN (ULTIMATE)
      const spikeMat = new THREE.MeshStandardMaterial({ color: 0x111111, metalness: 1.0 });
      
      this.body.scale.set(3.5, 5.0, 3.5);
      this.body.position.y = 2.5;
      
      this.head.scale.setScalar(4.0);
      this.head.position.y = 5.5;
      
      this.core.visible = false; // REMOVE GLOWING CORE PER USER REQUEST
      
      // Massive Horns
      const hornGeo = new THREE.ConeGeometry(0.3, 2.5, 4);
      const hornL = new THREE.Mesh(hornGeo, spikeMat);
      hornL.position.set(-1.0, 1.2, 0);
      hornL.rotation.z = 0.8;
      const hornR = new THREE.Mesh(hornGeo, spikeMat);
      hornR.position.set(1.0, 1.2, 0);
      hornR.rotation.z = -0.8;
      this.head.add(hornL, hornR);

      // Jagged Back Spikes
      const spikeGeo = new THREE.ConeGeometry(0.4, 4.0, 4);
      for (let i = 0; i < 6; i++) {
        const spike = new THREE.Mesh(spikeGeo, spikeMat);
        spike.position.set((i % 2 === 0 ? 1 : -1) * (1.2 + i*0.2), 3.0 + i*0.5, -1.8);
        spike.rotation.x = -Math.PI / 3;
        spike.rotation.z = (i % 2 === 0 ? 0.6 : -0.6);
        this.group.add(spike);
      }

      // THE WARHAMMER OF RUIN
      const hammerHandle = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.2, 10, 8), new THREE.MeshStandardMaterial({color:0x1a1a1a, metalness: 0.9}));
      
      const hammerHeadGroup = new THREE.Group();
      const hammerHeadMain = new THREE.Mesh(new THREE.BoxGeometry(2.5, 3.8, 2.5), new THREE.MeshStandardMaterial({color:0x0a0a0a, metalness:1.0, roughness: 0.1}));
      hammerHeadGroup.add(hammerHeadMain);

      // Glowing Runes on Hammer
      const runeMat = new THREE.MeshStandardMaterial({ 
        color: isA ? 0xff4400 : 0x00ccff, 
        emissive: isA ? 0xff4400 : 0x00ccff, 
        emissiveIntensity: 2,
        transparent: true,
        opacity: 0.9
      });
      const runePlane = new THREE.Mesh(new THREE.PlaneGeometry(1.2, 2.5), runeMat);
      runePlane.position.z = 1.26;
      hammerHeadGroup.add(runePlane);
      const runePlaneBack = runePlane.clone();
      runePlaneBack.position.z = -1.26;
      runePlaneBack.rotation.y = Math.PI;
      hammerHeadGroup.add(runePlaneBack);
      this.hammerRunes = [runeMat]; // Store material for pulsing

      // Hammer Spikes (More aggressive)
      const hSpikeGeo = new THREE.ConeGeometry(0.35, 1.5, 4);
      const hSpikeMat = new THREE.MeshStandardMaterial({color:0x222222, metalness: 1.0});
      for(let i=0; i<4; i++) {
        const hSpike = new THREE.Mesh(hSpikeGeo, hSpikeMat);
        const angle = (i / 4) * Math.PI * 2;
        hSpike.position.set(Math.cos(angle) * 1.25, 1.9, Math.sin(angle) * 1.25);
        hSpike.lookAt(new THREE.Vector3(hSpike.position.x * 2, 1.9 + 1, hSpike.position.z * 2));
        hammerHeadGroup.add(hSpike);
      }
      
      hammerHeadGroup.position.y = 4.0;
      this.weapon = new THREE.Group();
      this.weapon.add(hammerHandle, hammerHeadGroup);
      this.weapon.position.set(3.0, 3.5, 0);
      this.weapon.rotation.z = -0.4;
      this.group.add(this.weapon);
      
      // Demonic Eyes
      const eyeGeo = new THREE.SphereGeometry(0.35, 8, 8);
      const eyeMat = new THREE.MeshStandardMaterial({ 
        color: 0xff0000, emissive: 0xff0000, emissiveIntensity: 10 
      });
      this.eyeL.visible = false; 
      this.eyeR.visible = false;
      const dEyeL = new THREE.Mesh(eyeGeo, eyeMat);
      dEyeL.position.set(-0.6, 0.2, 0.45);
      const dEyeR = new THREE.Mesh(eyeGeo, eyeMat);
      dEyeR.position.set(0.6, 0.2, 0.45);
      this.head.add(dEyeL, dEyeR);
      this.titanEyes = [dEyeL, dEyeR];

      this.group.scale.setScalar(1.5);
    }
  }

  _addWeapon(radius, height, color, px, py, pz) {
    const geo = new THREE.CylinderGeometry(radius, radius * 0.5, height, 8);
    const mat = new THREE.MeshStandardMaterial({ color, metalness: 0.8, roughness: 0.2 });
    const weapon = new THREE.Mesh(geo, mat);
    weapon.position.set(px, py, pz);
    weapon.castShadow = true;
    this.group.add(weapon);
    this.weapon = weapon; // Store last added
  }

  spawn(serverTroop) {
    this.serverId = serverTroop.id;
    this.alive    = true;
    this.group.position.set(serverTroop.x, 0, serverTroop.y);
    this.targetX  = serverTroop.x;
    this.targetZ  = serverTroop.y;
    this.group.visible = true;
    this.setAnimation('walk');

    // Face direction
    this.group.rotation.y = this.owner === 'playerA' ? 0 : Math.PI;

    if (this.particles) {
      this.particles.emitSplash(this.group.position.clone());
      this.particles.emitRipple(this.group.position.clone().setY(0.05));
    }
    return this;
  }

  setAnimation(state) {
    if (this.animState === state) return;
    this.animState = state;
    this.animTimer = 0;
  }

  update(delta) {
    if (!this.alive) return;

    this.animTimer += delta;

    // Walk bob & Splash
    if (this.animState === 'walk') {
      const prevBob = Math.sin((this.animTimer - delta) * 10);
      const curBob  = Math.sin(this.animTimer * 10);
      this.group.position.y = curBob * 0.05;
      
      // Emit splash at the bottom of the bob (footstep)
      if (prevBob > 0 && curBob <= 0 && this.particles) {
        if (this.troopType === 'high') {
          // Heavy Stomp for Titan
          this.particles.emitStomp(this.group.position.clone());
        } else {
          this.particles.emitSplash(this.group.position.clone());
          if (Math.random() > 0.5) this.particles.emitRipple(this.group.position.clone().setY(0.05));
        }
      }

      // Menacing Pulse for High Tier (Titan)
      if (this.troopType === 'high') {
        const pulse = 4.0 + Math.sin(this.animTimer * 2) * 2.0;
        if (this.core && this.core.visible) this.core.material.emissiveIntensity = pulse;
        if (this.titanEyes) {
          this.titanEyes.forEach(eye => eye.material.emissiveIntensity = pulse * 2.5);
        }
        if (this.hammerRunes) {
          this.hammerRunes.forEach(mat => mat.emissiveIntensity = 1.0 + Math.sin(this.animTimer * 4) * 1.5);
        }
      }

      if (this.weapon) this.weapon.rotation.x = Math.sin(this.animTimer * 6) * 0.2;
      if (this.blades) this.blades.rotation.y += delta * 8; // Spinning blades
    }
    // Attack swing
    else if (this.animState === 'attack') {
      if (this.weapon) this.weapon.rotation.z = -0.3 + Math.sin(this.animTimer * 15) * 0.8;
    }

    // Movement interpolation
    this.group.position.x = THREE.MathUtils.lerp(this.group.position.x, this.targetX, 0.15);
    this.group.position.z = THREE.MathUtils.lerp(this.group.position.z, this.targetZ, 0.15);
  }

  die() {
    this.setAnimation('death');
    // Simple fall over
    const start = Date.now();
    const fall = () => {
      const elapsed = (Date.now() - start) / 500;
      if (elapsed < 1) {
        this.group.rotation.x = elapsed * (Math.PI / 2);
        this.group.position.y = -elapsed * 0.2;
        requestAnimationFrame(fall);
      } else {
        this.returnToPool();
      }
    };
    fall();
  }

  returnToPool() {
    this.alive          = false;
    this.serverId       = null;
    this.group.visible  = false;
    this.group.rotation.set(0, this.owner === 'playerA' ? 0 : Math.PI, 0);
    this.group.position.y = 0;
  }
}
