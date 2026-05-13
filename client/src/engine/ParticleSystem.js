import * as THREE from 'three';

export class ParticleSystem {
  constructor(scene) {
    this.scene = scene;
    this.motes = [];
    this.explosions = [];
    this.clashes = [];

    // Mote geometry (Death particles)
    this.moteGeo = new THREE.SphereGeometry(0.1, 4, 4);

    // ── IMPROVED RAIN SYSTEM ──────────────────────────────────────
    this.rainCount = 3500; // Increased count
    this.rainPositions = new Float32Array(this.rainCount * 2 * 3);
    const rainGeo = new THREE.BufferGeometry();
    
    // Wind tilt vector
    this.wind = new THREE.Vector3(0.5, 0, 0.2); 
    
    for (let i = 0; i < this.rainCount; i++) {
      const x = (Math.random() - 0.5) * 120;
      const z = (Math.random() - 0.5) * 120;
      const y = Math.random() * 40;
      const len = 0.6 + Math.random() * 1.2;
      
      this.rainPositions[i*6]   = x;
      this.rainPositions[i*6+1] = y;
      this.rainPositions[i*6+2] = z;
      
      // End point with tilt
      this.rainPositions[i*6+3] = x - this.wind.x * len * 0.2;
      this.rainPositions[i*6+4] = y - len;
      this.rainPositions[i*6+5] = z - this.wind.z * len * 0.2;
    }
    
    rainGeo.setAttribute('position', new THREE.BufferAttribute(this.rainPositions, 3));
    const rainMat = new THREE.LineBasicMaterial({ 
      color: 0x99aabb, 
      transparent: true, 
      opacity: 0.25,
      blending: THREE.AdditiveBlending 
    });
    this.rainLines = new THREE.LineSegments(rainGeo, rainMat);
    this.scene.add(this.rainLines);

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
    const canvas = document.createElement('canvas');
    canvas.width = 64; canvas.height = 64;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.arc(32, 32, 20, 0, Math.PI * 2);
    ctx.fill();
    
    const mat = new THREE.SpriteMaterial({ 
      map: new THREE.CanvasTexture(canvas),
      transparent: true,
      blending: THREE.AdditiveBlending
    });
    const spark = new THREE.Sprite(mat);
    spark.position.copy(pos);
    spark.scale.setScalar(0.8);
    spark.userData = { life: 0.4 };
    this.scene.add(spark);
    this.clashes.push(spark);
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
      r.scale.setScalar(1 + (1 - r.userData.life) * 4);
      r.material.opacity = r.userData.life;
      if (r.userData.life <= 0) { this.scene.remove(r); this.ripples.splice(i, 1); }
    }

    // ── IMPROVED RAIN UPDATE ──
    const pos = this.rainLines.geometry.attributes.position.array;
    for (let i = 0; i < this.rainCount; i++) {
      // Dynamic speed based on index for variation
      const speed = 25 + (i % 10) * 2 + Math.random() * 5;
      
      const dx = this.wind.x * speed * delta;
      const dy = speed * delta;
      const dz = this.wind.z * speed * delta;

      pos[i*6]   -= dx;
      pos[i*6+1] -= dy;
      pos[i*6+2] -= dz;
      pos[i*6+3] -= dx;
      pos[i*6+4] -= dy;
      pos[i*6+5] -= dz;
      
      if (pos[i*6+1] < 0) {
        const x = (Math.random() - 0.5) * 120;
        const z = (Math.random() - 0.5) * 120;
        const y = 30 + Math.random() * 10;
        const len = 0.6 + Math.random() * 1.2;
        
        pos[i*6]   = x; pos[i*6+1] = y; pos[i*6+2] = z;
        pos[i*6+3] = x - this.wind.x * len * 0.2; 
        pos[i*6+4] = y - len; 
        pos[i*6+5] = z - this.wind.z * len * 0.2;

        if (Math.random() > 0.98 && Math.abs(x) < 10 && Math.abs(z) < 20) {
          this.emitRipple(new THREE.Vector3(x, 0, z));
        }
      }
    }
    this.rainLines.geometry.attributes.position.needsUpdate = true;
  }
}
