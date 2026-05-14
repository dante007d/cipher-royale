import * as THREE from 'three';
const PARTICLE_COUNT = 400;

export function setupEnvironment(scene) {

  // ═══════════════════════════════════════════════════════════════
  // 1. SKY — Bright Blue Day Gradient
  // ═══════════════════════════════════════════════════════════════
  const skyCanvas = document.createElement('canvas');
  skyCanvas.width = 1;
  skyCanvas.height = 256;
  const skyCtx = skyCanvas.getContext('2d');
  
  const skyGradient = skyCtx.createLinearGradient(0, 0, 0, 256);
  skyGradient.addColorStop(0, '#000000'); // Pure Black
  skyGradient.addColorStop(1, '#330000'); // Cursed Crimson Horizon
  
  skyCtx.fillStyle = skyGradient;
  skyCtx.fillRect(0, 0, 1, 256);
  
  const skyTex = new THREE.CanvasTexture(skyCanvas);
  scene.background = skyTex;

  const createGlowTexture = (colorStr) => {
    const canvas = document.createElement('canvas');
    canvas.width = 64; canvas.height = 64;
    const ctx = canvas.getContext('2d');
    const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    grad.addColorStop(0, colorStr);
    grad.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 64, 64);
    return new THREE.CanvasTexture(canvas);
  };

  // 1b. BLOOD MOON
  const moonGeo = new THREE.SphereGeometry(15, 32, 32);
  const moonMat = new THREE.MeshBasicMaterial({ color: 0xff0000 });
  const moon = new THREE.Mesh(moonGeo, moonMat);
  moon.position.set(-60, 50, -80);
  scene.add(moon);
  
  // Moon Glow
  const moonGlow = new THREE.Sprite(new THREE.SpriteMaterial({
    map: createGlowTexture('#ff0000'),
    transparent: true,
    opacity: 0.5,
    blending: THREE.AdditiveBlending
  }));
  moonGlow.scale.set(60, 60, 1);
  moon.add(moonGlow);

  // Clouds (White and fluffy for day)
  const clouds = new THREE.Group();
  const cloudMat = new THREE.MeshStandardMaterial({
    color: 0x9fb5c4, transparent: true, opacity: 0.4,
    flatShading: true, roughness: 1.0
  });
  const cloudPartGeo = new THREE.IcosahedronGeometry(1.5, 0);

  for (let i = 0; i < 25; i++) {
    const cloud = new THREE.Group();
    const parts = 4 + Math.floor(Math.random() * 6);
    for (let j = 0; j < parts; j++) {
      const part = new THREE.Mesh(cloudPartGeo, cloudMat);
      part.position.set(j * 1.3, Math.random() * 0.8, Math.random() * 0.8);
      part.scale.setScalar(0.7 + Math.random() * 1.2);
      cloud.add(part);
    }
    const angle = Math.random() * Math.PI * 2;
    const dist  = 40 + Math.random() * 60;
    cloud.position.set(Math.cos(angle) * dist, 25 + Math.random() * 10, Math.sin(angle) * dist);
    cloud.userData.speed = 0.4 + Math.random();
    clouds.add(cloud);
  }
  scene.add(clouds);
 
  // ═══════════════════════════════════════════════════════════════
  // 2. GIANT SKELETAL RIBS (Background)
  const ribMat = new THREE.MeshStandardMaterial({ color: 0xddccbb, roughness: 0.9 });
  const ribGeo = new THREE.TorusGeometry(8, 0.5, 8, 24, Math.PI);
  for(let i=0; i<6; i++) {
    const rib = new THREE.Mesh(ribGeo, ribMat);
    rib.position.set(-30 + i*12, -2, -40);
    rib.rotation.y = Math.PI / 2;
    rib.rotation.x = Math.PI / 6;
    scene.add(rib);
  }

  // 3. DENSE ROT GRASS SYSTEM
  const GRASS_COUNT = 80000;
  const grassGeo = new THREE.PlaneGeometry(0.12, 0.7);
  grassGeo.translate(0, 0.35, 0);

  const grassMat = new THREE.MeshStandardMaterial({
    color: 0x661111, // Rot-red grass
    roughness: 0.8,
    side: THREE.DoubleSide
  });

  const grassMesh = new THREE.InstancedMesh(grassGeo, grassMat, GRASS_COUNT);
  grassMesh.receiveShadow = true;

  const dummy = new THREE.Object3D();
  const color = new THREE.Color();
  const palettes = [0x3a4a35, 0x4a554a, 0x2f3a2f, 0x4a5a4a, 0x5a6a5a]; 

  const ARENA_X_LIMIT = 9.0;
  const ARENA_Z_LIMIT = 20.0; // Exclude entire arena depth

  for (let i = 0; i < GRASS_COUNT; i++) {
    let x, z;
    do {
      x = (Math.random() - 0.5) * 120;
      z = (Math.random() - 0.5) * 120;
    } while (Math.abs(x) < ARENA_X_LIMIT && Math.abs(z) < ARENA_Z_LIMIT);

    dummy.position.set(x, 0, z);
    dummy.rotation.set((Math.random() - 0.5) * 0.2, Math.random() * Math.PI, (Math.random() - 0.5) * 0.2);
    const s = 0.6 + Math.random() * 1.2;
    dummy.scale.set(s, 0.4 + Math.random() * 1.0, s);
    dummy.updateMatrix();
    grassMesh.setMatrixAt(i, dummy.matrix);

    color.setHex(palettes[Math.floor(Math.random() * palettes.length)]);
    grassMesh.setColorAt(i, color);
  }
  scene.add(grassMesh);

  // ═══════════════════════════════════════════════════════════════
  // 3. NATURE & BATTLEFIELD PROPS
  // ═══════════════════════════════════════════════════════════════
  const natureGroup = new THREE.Group();
  const trunkMat = new THREE.MeshStandardMaterial({ color: 0x3a2f1b }); // Darker wood
  const pineMat  = new THREE.MeshStandardMaterial({ color: 0x2d3a2f }); // Desaturated needles
  const rockMat  = new THREE.MeshStandardMaterial({ color: 0x555555, roughness: 0.9 });
  const woodMat  = new THREE.MeshStandardMaterial({ color: 0x4a3c2c, roughness: 1.0 });

  const trunkGeo   = new THREE.CylinderGeometry(0.15, 0.2, 2.0, 8);
  const leavesGeo  = new THREE.ConeGeometry(1.2, 3.0, 8);
  const rockGeo    = new THREE.DodecahedronGeometry(1, 0);

  const ARENA_X = 9.0;

  for (let i = 0; i < 120; i++) {
    const angle = Math.random() * Math.PI * 2;
    const dist  = 18 + Math.random() * 50;
    const px = Math.cos(angle) * dist;
    const pz = Math.sin(angle) * dist;
    if (Math.abs(px) < ARENA_X && Math.abs(pz) < 20) continue; // Keep arena clear

    const rand = Math.random();
    if (rand < 0.35) {
      const tree = new THREE.Group();
      const trunk = new THREE.Mesh(trunkGeo, trunkMat); trunk.position.y = 1; tree.add(trunk);
      const leaves = new THREE.Mesh(leavesGeo, pineMat); leaves.position.y = 3; tree.add(leaves);
      tree.position.set(px, 0, pz);
      tree.scale.setScalar(0.7 + Math.random() * 1.5);
      natureGroup.add(tree);
    } else if (rand < 0.6) {
      const rock = new THREE.Mesh(rockGeo, rockMat);
      rock.position.set(px, 0.2, pz);
      rock.rotation.set(Math.random(), Math.random(), Math.random());
      rock.scale.set(1.2 + Math.random() * 1.5, 0.8 + Math.random() * 1.5, 1.2 + Math.random() * 1.5);
      natureGroup.add(rock);
    } else if (rand < 0.7) {
      // Abandoned Banner
      const banner = new THREE.Group();
      const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 3), woodMat);
      pole.position.y = 1.5;
      banner.add(pole);
      const cloth = new THREE.Mesh(new THREE.PlaneGeometry(0.5, 1.5), new THREE.MeshStandardMaterial({ 
        color: Math.random() > 0.5 ? 0xaa4444 : 0x4444aa, 
        side: THREE.DoubleSide 
      }));
      cloth.position.set(0, 2.0, 0.3);
      cloth.rotation.y = Math.PI / 2;
      banner.add(cloth);
      banner.position.set(px, 0, pz);
      banner.rotation.z = (Math.random() - 0.5) * 0.5; // Lean over
      natureGroup.add(banner);
    } else {
      // Wooden Structure (Box/Barricade)
      const box = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), woodMat);
      box.position.set(px, 0.5, pz);
      box.rotation.y = Math.random();
      natureGroup.add(box);
    }
  }
  scene.add(natureGroup);

  // ═══════════════════════════════════════════════════════════════
  // 5. IRON LAMPS (Procedural)
  // ═══════════════════════════════════════════════════════════════
  const lampMat = new THREE.MeshStandardMaterial({ color: 0x222222, metalness: 0.8, roughness: 0.2 });
  const lampGeo = new THREE.CylinderGeometry(0.05, 0.08, 3.5, 8);
  const headGeo = new THREE.BoxGeometry(0.4, 0.4, 0.4);
  const glassMat = new THREE.MeshBasicMaterial({ color: 0xffaa44 });

  const createLamp = (x, z) => {
    const lamp = new THREE.Group();
    const pole = new THREE.Mesh(lampGeo, lampMat);
    pole.position.y = 1.75;
    lamp.add(pole);

    const head = new THREE.Mesh(headGeo, lampMat);
    head.position.y = 3.5;
    lamp.add(head);

    const lightPart = new THREE.Mesh(new THREE.SphereGeometry(0.15, 8, 8), glassMat);
    lightPart.position.set(0, 3.4, 0.2);
    lamp.add(lightPart);

    const pLight = new THREE.PointLight(0xffaa44, 1.5, 8);
    pLight.position.set(0, 3.4, 0.3);
    lamp.add(pLight);

    lamp.position.set(x, 0, z);
    scene.add(lamp);
  };

  // Place lamps along the edges of the lanes
  [-7.5, 7.5].forEach(lx => {
    [-15, -5, 5, 15].forEach(lz => {
      createLamp(lx, lz);
    });
  });

  // ═══════════════════════════════════════════════════════════════
  // 6. CIPHER PARTICLES (Floating digital bits)
  // ═══════════════════════════════════════════════════════════════
  const particleGeo = new THREE.BufferGeometry();
  const positions = new Float32Array(PARTICLE_COUNT * 3);
  const speeds = new Float32Array(PARTICLE_COUNT);

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    positions[i * 3]     = (Math.random() - 0.5) * 60;
    positions[i * 3 + 1] = Math.random() * 15;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 80;
    speeds[i] = 0.1 + Math.random() * 0.5;
  }

  particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  
  const particleMat = new THREE.PointsMaterial({
    color: 0x00ffff,
    size: 0.08,
    transparent: true,
    opacity: 0.6,
    blending: THREE.AdditiveBlending
  });

  const cipherParticles = new THREE.Points(particleGeo, particleMat);
  scene.add(cipherParticles);

  scene.fog = new THREE.FogExp2(0x440022, 0.03); // Sickly Scarlet Haze

  // 7. ROT SPORES (Floating pink bits)
  const sporeGeo = new THREE.BufferGeometry();
  const sporePos = new Float32Array(500 * 3);
  const sporeSpeeds = new Float32Array(500);
  for(let i=0; i<500; i++) {
    sporePos[i*3] = (Math.random()-0.5)*100;
    sporePos[i*3+1] = Math.random()*20;
    sporePos[i*3+2] = (Math.random()-0.5)*100;
    sporeSpeeds[i] = 0.1 + Math.random()*0.3;
  }
  sporeGeo.setAttribute('position', new THREE.BufferAttribute(sporePos, 3));
  const sporeMat = new THREE.PointsMaterial({ 
    color: 0xff4477, size: 0.08, transparent: true, opacity: 0.6, blending: THREE.AdditiveBlending 
  });
  const spores = new THREE.Points(sporeGeo, sporeMat);
  scene.add(spores);

  // 8. SMOKE LAYER (Low hanging)
  const smokeParticles = new THREE.Group();
  const smokeGeo = new THREE.PlaneGeometry(10, 10);
  const smokeMat = new THREE.MeshBasicMaterial({ 
    color: 0x221111, transparent: true, opacity: 0.15, depthWrite: false 
  });
  for(let i=0; i<30; i++) {
    const s = new THREE.Mesh(smokeGeo, smokeMat);
    s.position.set((Math.random()-0.5)*40, 0.5+Math.random()*2, (Math.random()-0.5)*60);
    s.rotation.x = -Math.PI/2;
    s.scale.setScalar(1 + Math.random()*2);
    smokeParticles.add(s);
  }
  scene.add(smokeParticles);

  // 9. FIRE PITS & EMBERS
  const emberGeo = new THREE.BufferGeometry();
  const emberPos = new Float32Array(200 * 3);
  for(let i=0; i<200; i++) {
    emberPos[i*3] = (Math.random()-0.5)*30;
    emberPos[i*3+1] = Math.random()*10;
    emberPos[i*3+2] = (Math.random()-0.5)*50;
  }
  emberGeo.setAttribute('position', new THREE.BufferAttribute(emberPos, 3));
  const emberMat = new THREE.PointsMaterial({ color: 0xffaa44, size: 0.05, transparent: true, blending: THREE.AdditiveBlending });
  const embers = new THREE.Points(emberGeo, emberMat);
  scene.add(embers);

  return { clouds, natureGroup, grassMesh, cipherParticles, particleSpeeds: speeds, smokeParticles, embers, spores, sporeSpeeds };
}

export function updateEnvironment(env, delta, time) {
  if (!env) return;
  
  // Update Clouds
  if (env.clouds) {
    env.clouds.children.forEach(cloud => {
      cloud.position.x += cloud.userData.speed * delta * 0.3;
      if (cloud.position.x > 150) cloud.position.x = -150;
    });
  }

  // Update Cipher Particles
  if (env.cipherParticles) {
    const pos = env.cipherParticles.geometry.attributes.position.array;
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      pos[i * 3 + 1] += env.particleSpeeds[i] * delta * 0.5;
      pos[i * 3]     += Math.sin(time + i) * 0.01;
      if (pos[i * 3 + 1] > 15) pos[i * 3 + 1] = 0;
    }
    env.cipherParticles.geometry.attributes.position.needsUpdate = true;
  }

  // Update Embers (Float up)
  if (env.embers) {
    const pos = env.embers.geometry.attributes.position.array;
    for (let i = 0; i < 200; i++) {
      pos[i * 3 + 1] += delta * 1.5;
      pos[i * 3] += Math.sin(time + i) * 0.02;
      if (pos[i * 3 + 1] > 10) pos[i * 3 + 1] = 0;
    }
    env.embers.geometry.attributes.position.needsUpdate = true;
  }

  // Update Smoke (Subtle rotation)
  if (env.smokeParticles) {
    env.smokeParticles.children.forEach((s, i) => {
      s.rotation.z += delta * 0.1 * (i % 2 === 0 ? 1 : -1);
      s.position.x += Math.sin(time * 0.2 + i) * 0.005;
    });
  }

  // Update Rot Spores (Drift down/sway)
  if (env.spores) {
    const pos = env.spores.geometry.attributes.position.array;
    for (let i = 0; i < 500; i++) {
      pos[i * 3 + 1] -= env.sporeSpeeds[i] * delta * 5.0; // Faster drift
      pos[i * 3] += Math.sin(time * 0.5 + i) * 0.01;
      if (pos[i * 3 + 1] < 0) pos[i * 3 + 1] = 20;
    }
    env.spores.geometry.attributes.position.needsUpdate = true;
  }
}
