import * as THREE from 'three';

export function buildTowerMesh(type, playerSide, scene) {
  const group = new THREE.Group();
  const isPlayerA = playerSide === 'playerA';
  
  // Refined Color Palette: Grungy and Corrupted
  const colors = {
    stone: 0x1a0d0d, // Dark, blood-soaked obsidian
    accent: isPlayerA ? 0xcc0000 : 0x0066aa, // Deep blood red vs Void blue
    glow: isPlayerA ? 0xff4422 : 0x00ccff, // Sickly orange-red vs Ether blue
    vein: isPlayerA ? 0x440000 : 0x001133
  };

  const stoneMat = new THREE.MeshStandardMaterial({
    color: colors.stone, roughness: 0.9, metalness: 0.1, flatShading: true
  });
  
  const emissiveMat = new THREE.MeshStandardMaterial({
    color: colors.accent,
    emissive: colors.glow,
    emissiveIntensity: 2.5,
    transparent: true,
    opacity: 0.9
  });

  const veinMat = new THREE.MeshStandardMaterial({
    color: colors.vein,
    emissive: colors.accent,
    emissiveIntensity: 0.5
  });

  if (type === 'main') {
    // ── THE CORRUPTED MONOLITH (Main Tower) ──────────────────────────
    
    // 1. GNARLED BASE (Twisted Earth)
    const baseGeo = new THREE.CylinderGeometry(2.5, 3.5, 1.2, 8);
    const base = new THREE.Mesh(baseGeo, stoneMat);
    base.position.y = 0.6;
    base.rotation.y = Math.random();
    group.add(base);

    // 2. THE TWISTED SPIRES (Thorn-like)
    for (let i = 0; i < 5; i++) {
      const spireGroup = new THREE.Group();
      const angle = (i / 5) * Math.PI * 2;
      const radius = 1.8;
      
      let lastPos = new THREE.Vector3(0, 0, 0);
      const segments = 4;
      for (let j = 0; j < segments; j++) {
        const h = 1.2;
        const r = 0.4 * (1 - j/segments) + 0.1;
        const seg = new THREE.Mesh(new THREE.CylinderGeometry(r*0.7, r, h, 5), stoneMat);
        seg.position.y = h/2;
        
        const wrapper = new THREE.Group();
        wrapper.position.copy(lastPos);
        wrapper.rotation.z = (Math.random() - 0.5) * 0.4;
        wrapper.rotation.x = (Math.random() - 0.5) * 0.4;
        wrapper.add(seg);
        spireGroup.add(wrapper);
        
        lastPos.add(new THREE.Vector3(0, h, 0).applyEuler(wrapper.rotation));
      }
      
      spireGroup.position.set(Math.cos(angle) * radius, 0.5, Math.sin(angle) * radius);
      spireGroup.rotation.y = -angle;
      group.add(spireGroup);
    }

    // 3. THE PULSING CORE (The "Eye")
    const eyeGeo = new THREE.SphereGeometry(1.0, 16, 16);
    eyeGeo.scale(1, 1.3, 0.8); // Slit-like eye shape
    const eye = new THREE.Mesh(eyeGeo, emissiveMat);
    eye.position.y = 3.5;
    group.add(eye);
    group.userData.core = eye;

    // 4. FLOATING THORN RINGS
    const ringGroup = new THREE.Group();
    const ringGeo = new THREE.TorusGeometry(2.2, 0.08, 6, 24);
    const ring = new THREE.Mesh(ringGeo, stoneMat);
    ring.rotation.x = Math.PI / 2;
    ringGroup.add(ring);
    
    // Add thorns to ring
    const thornGeo = new THREE.ConeGeometry(0.08, 0.4, 4);
    for (let i = 0; i < 8; i++) {
      const thorn = new THREE.Mesh(thornGeo, stoneMat);
      const a = (i/8) * Math.PI * 2;
      thorn.position.set(Math.cos(a) * 2.2, 0, Math.sin(a) * 2.2);
      thorn.rotation.z = Math.PI / 2;
      thorn.rotation.y = a;
      ring.add(thorn);
    }
    ringGroup.position.y = 3.5;
    group.add(ringGroup);
    group.userData.ring = ringGroup;

    // 5. CREEPING VEINS
    for (let i = 0; i < 12; i++) {
      const vein = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.06, 4), veinMat);
      const a = (i/12) * Math.PI * 2;
      vein.position.set(Math.cos(a) * 1.5, 2.0, Math.sin(a) * 1.5);
      vein.rotation.x = (Math.random() - 0.5) * 0.5;
      vein.rotation.z = (Math.random() - 0.5) * 0.5;
      group.add(vein);
    }

  } else {
    // ── THE SUB-TOWER (Flesh Spike) ──────────────────────────────────
    const bodyGeo = new THREE.CylinderGeometry(0.6, 1.0, 3.5, 6);
    const body = new THREE.Mesh(bodyGeo, stoneMat);
    body.position.y = 1.75;
    group.add(body);
    group.userData.body = body;

    // Glowing Ribs/Slots
    for (let i = 0; i < 3; i++) {
      const rib = new THREE.Mesh(new THREE.BoxGeometry(1.3, 0.15, 1.3), emissiveMat);
      rib.position.y = 1.0 + i * 1.0;
      group.add(rib);
    }

    // Top Spike cluster
    const headSpike = new THREE.Mesh(new THREE.ConeGeometry(0.4, 1.5, 4), stoneMat);
    headSpike.position.y = 4.25;
    group.add(headSpike);
  }

  // Common metadata
  group.userData.type = type;
  group.userData.playerSide = playerSide;
  group.userData.alive = true;
  group.userData.originalEmissive = colors.glow;

  scene.add(group);
  return group;
}

export function updateTowerDamageVisuals(towerGroup, hp, maxHp) {
  const ratio = hp / maxHp;
  const time = performance.now() * 0.001;
  const { core, ring, body } = towerGroup.userData;

  // Pulse effect
  const pulse = Math.sin(time * 3) * 0.5 + 1.5;

  if (towerGroup.userData.type === 'main') {
    if (core) {
      core.scale.setScalar(1.0 + Math.sin(time * 4) * 0.05);
      core.material.emissiveIntensity = pulse * (ratio * 2);
      core.rotation.y += 0.01;
    }
    if (ring) {
      ring.rotation.y += 0.005;
      ring.rotation.z = Math.sin(time * 0.5) * 0.1;
      ring.position.y = 3.5 + Math.sin(time * 1.5) * 0.2;
    }
  } else if (body) {
    // Sub-tower subtle pulse
    towerGroup.children.forEach(child => {
      if (child.material && child.material.emissive) {
        child.material.emissiveIntensity = pulse * ratio;
      }
    });
  }

  // Death State
  if (ratio <= 0 && towerGroup.userData.alive) {
    towerGroup.userData.alive = false;
    towerGroup.children.forEach(c => {
      if (c.position.y > 0.5) {
        c.visible = false;
      }
    });
  }
}
