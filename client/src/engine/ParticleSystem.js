import * as THREE from 'three';

export class ParticleSystem {
  constructor(scene) {
    this.scene = scene;
    this.motes = [];
    this.explosions = [];
    this.clashes = [];

    // Mote geometry (Death particles)
    this.moteGeo = new THREE.SphereGeometry(0.1, 4, 4);

    // RIPPLES
    this.ripples = [];
    this.rippleGeo = new THREE.RingGeometry(0.1, 0.12, 24);
    this.rippleGeo.rotateX(-Math.PI / 2);

    // SPLASHES
    this.splashGeo = new THREE.SphereGeometry(0.04, 4, 4);
  }

  emitDeathMotes(pos, color = 0xffffff) {
    for (let i = 0; i < 8; i++) {
      const mat = new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 1 });
      const mote = new THREE.Mesh(this.moteGeo, mat);
      mote.position.copy(pos);
      mote.userData = {
        vel: new THREE.Vector3(
          (Math.random() - 0.5) * 2,
          Math.random() * 3,
          (Math.random() - 0.5) * 2
        ),
        life: 1.0
      };
      this.scene.add(mote);
      this.motes.push(mote);
    }
  }

  emitClash(pos) {
    // 1. Central Spark Flash
    const sparkMat = new THREE.SpriteMaterial({ 
      map: this.createGlowTexture('#ffffff'),
      transparent: true,
      blending: THREE.AdditiveBlending
    });
    const spark = new THREE.Sprite(sparkMat);
    spark.position.copy(pos);
    spark.scale.setScalar(1.5);
    spark.userData = { life: 0.3 };
    this.scene.add(spark);
    this.clashes.push(spark);

    // 2. Flying Bits
    for (let i = 0; i < 5; i++) {
      const bit = new THREE.Mesh(
        new THREE.BoxGeometry(0.05, 0.05, 0.05),
        new THREE.MeshBasicMaterial({ color: 0xffaa00 })
      );
      bit.position.copy(pos);
      bit.userData = {
        vel: new THREE.Vector3((Math.random()-0.5)*5, Math.random()*5, (Math.random()-0.5)*5),
        life: 0.5
      };
      this.scene.add(bit);
      this.motes.push(bit);
    }
  }

  emitDeployment(pos, color = 0xff0000) {
    // 1. Ground Shockwave
    const mat = new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.8, side: THREE.DoubleSide });
    const ripple = new THREE.Mesh(this.rippleGeo, mat);
    ripple.position.copy(pos).setY(0.05);
    ripple.userData = { life: 1.0, scaleSpeed: 15 };
    this.scene.add(ripple);
    this.ripples.push(ripple);

    // 2. JAGGERY LIGHTNING BOLT
    const boltPoints = [];
    let cur = new THREE.Vector3(pos.x, 20, pos.z);
    for(let i=0; i<10; i++) {
      boltPoints.push(cur.clone());
      cur.y -= 2;
      cur.x += (Math.random()-0.5)*2;
      cur.z += (Math.random()-0.5)*2;
    }
    boltPoints.push(pos.clone());
    const boltGeo = new THREE.BufferGeometry().setFromPoints(boltPoints);
    const boltMat = new THREE.LineBasicMaterial({ color: 0xffffff, linewidth: 2, transparent: true, blending: THREE.AdditiveBlending });
    const bolt = new THREE.Line(boltGeo, boltMat);
    bolt.userData = { life: 0.2 };
    this.scene.add(bolt);
    this.clashes.push(bolt); // Clean up via clashes array

    // 3. Screen Shake trigger
    window.dispatchEvent(new CustomEvent('camera_shake', { detail: { intensity: 1.5, duration: 400 } }));
  }

  emitAmbientLightning() {
    // Pick position ANYWHERE (including arena)
    const x = (Math.random() - 0.5) * 60;
    const z = (Math.random() - 0.5) * 80;
    
    const pos = new THREE.Vector3(x, 0, z);

    // 1. BOLT
    const boltPoints = [];
    let cur = new THREE.Vector3(pos.x, 30, pos.z);
    for(let i=0; i<15; i++) {
      boltPoints.push(cur.clone());
      cur.y -= 2;
      cur.x += (Math.random()-0.5)*3;
      cur.z += (Math.random()-0.5)*3;
    }
    boltPoints.push(pos.clone());
    const boltGeo = new THREE.BufferGeometry().setFromPoints(boltPoints);
    const boltMat = new THREE.LineBasicMaterial({ color: 0xffffff, linewidth: 3, transparent: true, blending: THREE.AdditiveBlending });
    const bolt = new THREE.Line(boltGeo, boltMat);
    bolt.userData = { life: 0.15 }; // Quick flash
    this.scene.add(bolt);
    this.clashes.push(bolt);

    // 2. Ground Impact Sprite
    const impactMat = new THREE.SpriteMaterial({ 
      map: this.createGlowTexture('#ffffff'), 
      transparent: true, 
      blending: THREE.AdditiveBlending 
    });
    const impact = new THREE.Sprite(impactMat);
    impact.position.copy(pos).setY(0.5);
    impact.scale.setScalar(12); // Increased from 8
    impact.userData = { life: 0.25 };
    this.scene.add(impact);
    this.clashes.push(impact);

    // 3. GLOBAL EFFECTS
    window.dispatchEvent(new CustomEvent('lightning_strike', { detail: { intensity: 4.0 } }));
    window.dispatchEvent(new CustomEvent('camera_shake', { detail: { intensity: 2.5, duration: 300 } }));
  }

  createGlowTexture(colorStr) {
    const canvas = document.createElement('canvas');
    canvas.width = 64; canvas.height = 64;
    const ctx = canvas.getContext('2d');
    const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    grad.addColorStop(0, colorStr);
    grad.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 64, 64);
    return new THREE.CanvasTexture(canvas);
  }

  emitTowerDestruction(pos) {
    // 1. Large Core Flash
    this.emitExplosion(pos, 4.5, 0xffffff); 
    this.emitExplosion(pos, 6.0, 0xffaa00);

    // 2. Heavy Debris
    for (let i = 0; i < 30; i++) {
      const size = 0.2 + Math.random() * 0.5;
      const mote = new THREE.Mesh(
        new THREE.BoxGeometry(size, size, size),
        new THREE.MeshStandardMaterial({ color: 0x333333, roughness: 1.0 })
      );
      mote.position.copy(pos).add(new THREE.Vector3(
        (Math.random()-0.5)*2,
        Math.random()*2,
        (Math.random()-0.5)*2
      ));
      mote.userData = {
        vel: new THREE.Vector3((Math.random()-0.5)*12, 5+Math.random()*15, (Math.random()-0.5)*12),
        life: 2.0 + Math.random()
      };
      this.scene.add(mote);
      this.motes.push(mote);
    }

    // 3. Smoke Clouds
    for (let i = 0; i < 15; i++) {
      const smoke = new THREE.Mesh(
        new THREE.SphereGeometry(1.2, 6, 6),
        new THREE.MeshBasicMaterial({ color: 0x222222, transparent: true, opacity: 0.5 })
      );
      smoke.position.copy(pos);
      smoke.userData = {
        vel: new THREE.Vector3((Math.random()-0.5)*3, 2+Math.random()*4, (Math.random()-0.5)*3),
        life: 1.5 + Math.random()
      };
      this.scene.add(smoke);
      this.motes.push(smoke);
    }
  }

  emitExplosion(pos, scale = 1.5, color = 0xff5500) {
    const geo = new THREE.SphereGeometry(1, 16, 16);
    const mat = new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.9, blending: THREE.AdditiveBlending });
    const sphere = new THREE.Mesh(geo, mat);
    sphere.position.copy(pos);
    sphere.scale.setScalar(0.1);
    sphere.userData = { life: 0.6, maxLife: 0.6, targetScale: scale };
    this.scene.add(sphere);
    this.explosions.push(sphere);
  }

  emitRipple(pos) {
    const mat = new THREE.MeshBasicMaterial({ color: 0x88ccff, transparent: true, opacity: 0.4, side: THREE.DoubleSide });
    const ripple = new THREE.Mesh(this.rippleGeo, mat);
    ripple.position.copy(pos);
    ripple.position.y = 0.05;
    ripple.userData = { life: 1.0 };
    this.scene.add(ripple);
    this.ripples.push(ripple);
  }

  emitSplash(pos) {
    for (let i = 0; i < 3; i++) {
      const mat = new THREE.MeshBasicMaterial({ color: 0x99aabb, transparent: true, opacity: 0.6 });
      const p = new THREE.Mesh(this.splashGeo, mat);
      p.position.copy(pos);
      p.userData = {
        vel: new THREE.Vector3((Math.random() - 0.5) * 1.5, Math.random() * 2, (Math.random() - 0.5) * 1.5),
        life: 0.5
      };
      this.scene.add(p);
      this.motes.push(p);
    }
  }

  update(delta) {
    // Update Motes (incl splashes)
    for (let i = this.motes.length - 1; i >= 0; i--) {
      const p = this.motes[i];
      p.position.add(p.userData.vel.clone().multiplyScalar(delta));
      p.userData.vel.y -= 9.8 * delta;
      p.userData.life -= delta;
      p.material.opacity = p.userData.life;
      if (p.userData.life <= 0) { this.scene.remove(p); this.motes.splice(i, 1); }
    }

    // Update Clashes
    for (let i = this.clashes.length - 1; i >= 0; i--) {
      const s = this.clashes[i];
      s.userData.life -= delta;
      s.scale.setScalar(0.8 + (0.4 - s.userData.life) * 2);
      s.material.opacity = s.userData.life / 0.4;
      if (s.userData.life <= 0) { this.scene.remove(s); this.clashes.splice(i, 1); }
    }

    // Update Explosions
    for (let i = this.explosions.length - 1; i >= 0; i--) {
      const e = this.explosions[i];
      e.userData.life -= delta;
      const progress = 1 - (e.userData.life / e.userData.maxLife);
      e.scale.setScalar(0.1 + progress * e.userData.targetScale);
      e.material.opacity = 1 - progress;
      if (e.userData.life <= 0) { this.scene.remove(e); this.explosions.splice(i, 1); }
    }

    // Update Ripples
    for (let i = this.ripples.length - 1; i >= 0; i--) {
      const r = this.ripples[i];
      r.userData.life -= delta * 1.5;
      const s = r.userData.scaleSpeed || 4;
      r.scale.setScalar(1 + (1 - r.userData.life) * s);
      r.material.opacity = r.userData.life;
      if (r.userData.life <= 0) { this.scene.remove(r); this.ripples.splice(i, 1); }
    }
  }
}
