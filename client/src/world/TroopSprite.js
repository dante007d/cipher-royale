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
    // Basic Body
    const bodyGeo = new THREE.BoxGeometry(0.5, 0.7, 0.35);
    const bodyMat = new THREE.MeshStandardMaterial({
      color: bodyColor, roughness: 0.5, metalness: 0.2,
      emissive: bodyColor, emissiveIntensity: 0.1
    });
    this.body = new THREE.Mesh(bodyGeo, bodyMat);
    this.body.position.y = 0.55;
    this.body.castShadow = true;
    this.group.add(this.body);

    // Head
    const headGeo = new THREE.SphereGeometry(0.2, 8, 8);
    const headMat = new THREE.MeshStandardMaterial({ color: 0xfad7a0 });
    this.head = new THREE.Mesh(headGeo, headMat);
    this.head.position.y = 1.1;
    this.head.castShadow = true;
    this.group.add(this.head);

    // Helmet
    const helmGeo = new THREE.ConeGeometry(0.22, 0.25, 6);
    const helmMat = new THREE.MeshStandardMaterial({
      color: helmetColor, metalness: 0.4
    });
    this.helmet = new THREE.Mesh(helmGeo, helmMat);
    this.helmet.position.y = 1.35;
    this.group.add(this.helmet);

    // ── UNIQUE WEAPONS/PROPS ──
    if (type === 'low') {
      this._addWeapon(0.04, 0.7, 0x95a5a6, 0.35, 0.7, 0); // Short sword
    } 
    else if (type === 'mid') {
      this._addWeapon(0.03, 1.2, 0xbdc3c7, 0.4, 0.7, 0); // Spear
      this._addShield(0.1, 0.6, 0.45, -0.4, 0.6, 0); // Large shield
    }
    else if (type === 'high') {
      // THE HIGH TITAN
      this.body.scale.set(2.5, 3.5, 2.0);
      this.head.scale.setScalar(2.5);
      this.head.position.y = 4.0;
      this.helmet.scale.setScalar(3.0);
      this.helmet.position.y = 5.0;
      this.body.position.y = 2.0;
      
      this._addWeapon(0.15, 4.0, 0x34495e, 1.5, 2.5, 0); // Giant hammer
      this.weapon.rotation.z = -0.5;
      
      this.group.scale.setScalar(1.6);
    }
  }

  _addWeapon(radius, height, color, px, py, pz) {
    const geo = new THREE.CylinderGeometry(radius, radius, height, 8);
    const mat = new THREE.MeshStandardMaterial({ color, metalness: 0.6 });
    this.weapon = new THREE.Mesh(geo, mat);
    this.weapon.position.set(px, py, pz);
    this.weapon.castShadow = true;
    this.group.add(this.weapon);
  }

  _addShield(w, h, d, px, py, pz) {
    const geo = new THREE.BoxGeometry(w, h, d);
    const mat = new THREE.MeshStandardMaterial({ color: 0x7f8c8d });
    const shield = new THREE.Mesh(geo, mat);
    shield.position.set(px, py, pz);
    shield.castShadow = true;
    this.group.add(shield);
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
        this.particles.emitSplash(this.group.position.clone());
        if (Math.random() > 0.5) this.particles.emitRipple(this.group.position.clone().setY(0.05));
      }

      if (this.weapon) this.weapon.rotation.x = Math.sin(this.animTimer * 6) * 0.2;
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
