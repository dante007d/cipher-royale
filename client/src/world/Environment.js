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
  // 2. [REMOVED BONE STRUCTURE PER USER REQUEST]

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
  // 3. CREEPY TREE GENERATOR
  // ═══════════════════════════════════════════════════════════════
  const creepyTrunkMat = new THREE.MeshStandardMaterial({ color: 0x1a110a, roughness: 1.0 });
  const corpseMat = new THREE.MeshStandardMaterial({ color: 0x777777, roughness: 1.0 });
  const ropeMat   = new THREE.MeshStandardMaterial({ color: 0x332211, roughness: 1.0 });

  const createHangingCorpse = () => {
    const corpse = new THREE.Group();
    const boneMat = new THREE.MeshStandardMaterial({ color: 0xcccccc, roughness: 1.0 });
    const decayedMat = new THREE.MeshStandardMaterial({ color: 0x3d3d3d, roughness: 1.0 });
    
    // Rope (Thicker and frayed)
    const ropeGeo = new THREE.CylinderGeometry(0.03, 0.03, 1.2);
    ropeGeo.translate(0, -0.6, 0);
    const rope = new THREE.Mesh(ropeGeo, ropeMat);
    corpse.add(rope);
    
    const body = new THREE.Group();
    body.position.y = -1.2;
    
    // Head (Skeletal / Sunken)
    const head = new THREE.Mesh(new THREE.IcosahedronGeometry(0.14, 0), boneMat);
    head.position.y = -0.05;
    head.rotation.x = 0.5;
    body.add(head);
    
    // Torso (Exposed Ribs)
    const torsoGroup = new THREE.Group();
    const spine = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.6), boneMat);
    torsoGroup.add(spine);
    
    // Ribs
    const ribGeo = new THREE.TorusGeometry(0.15, 0.02, 6, 12, Math.PI);
    for(let i=0; i<4; i++) {
      const rib = new THREE.Mesh(ribGeo, boneMat);
      rib.position.y = 0.15 - i*0.12;
      rib.rotation.x = Math.PI / 2;
      torsoGroup.add(rib);
    }
    torsoGroup.position.y = -0.4;
    body.add(torsoGroup);
    
    // Limbs (Elongated and gaunt)
    const limbMat = Math.random() > 0.5 ? boneMat : decayedMat;
    const armGeo = new THREE.CylinderGeometry(0.03, 0.02, 0.6);
    armGeo.translate(0, -0.3, 0);
    
    const lArm = new THREE.Mesh(armGeo, limbMat);
    lArm.position.set(-0.18, -0.2, 0);
    lArm.rotation.z = 0.2;
    body.add(lArm);
    
    const rArm = new THREE.Mesh(armGeo, limbMat);
    rArm.position.set(0.18, -0.2, 0);
    rArm.rotation.z = -0.2;
    body.add(rArm);
    
    const legGeo = new THREE.CylinderGeometry(0.04, 0.02, 0.7);
    legGeo.translate(0, -0.35, 0);
    
    const lLeg = new THREE.Mesh(legGeo, limbMat);
    lLeg.position.set(-0.1, -0.7, 0);
    lLeg.rotation.x = 0.2;
    body.add(lLeg);
    
    const rLeg = new THREE.Mesh(legGeo, limbMat);
    rLeg.position.set(0.1, -0.7, 0);
    rLeg.rotation.x = -0.2;
    body.add(rLeg);
    
    corpse.add(body);
    corpse.userData.isCorpse = true;
    corpse.userData.swaySpeed = 0.6 + Math.random() * 0.4;
    corpse.userData.swayOffset = Math.random() * Math.PI * 2;
    corpse.userData.twitchTimer = 0;
    
    return corpse;
  };

  const createCreepyTree = () => {
    const tree = new THREE.Group();
    const rotMat = new THREE.MeshStandardMaterial({ 
      color: 0x1a0505, 
      emissive: 0xff0000, 
      emissiveIntensity: 0.1,
      roughness: 1.0 
    });
    
    // Create gnarled trunk segments
    let lastPos = new THREE.Vector3(0, 0, 0);
    let lastRot = new THREE.Euler(0, 0, 0);
    const segments = 5 + Math.floor(Math.random() * 4);
    
    for (let i = 0; i < segments; i++) {
      const h = 1.2 + Math.random() * 1.5;
      const r = 0.5 * (1 - i/segments) + 0.15;
      const segGeo = new THREE.CylinderGeometry(r * 0.7, r, h, 5);
      segGeo.translate(0, h/2, 0);
      
      const segment = new THREE.Mesh(segGeo, rotMat);
      segment.position.copy(lastPos);
      segment.rotation.copy(lastRot);
      tree.add(segment);
      
      // Thorny spikes on trunk
      if (Math.random() > 0.4) {
        const spike = new THREE.Mesh(new THREE.ConeGeometry(0.1, 0.6, 3), creepyTrunkMat);
        spike.position.copy(lastPos).add(new THREE.Vector3(r, h/2, 0).applyEuler(lastRot));
        spike.rotation.z = Math.PI / 2;
        tree.add(spike);
      }
      
      const dir = new THREE.Vector3(0, 1, 0).applyEuler(lastRot);
      lastPos.add(dir.multiplyScalar(h));
      
      lastRot.x += (Math.random() - 0.5) * 0.8;
      lastRot.z += (Math.random() - 0.5) * 0.8;
      lastRot.y += (Math.random() - 0.5) * 1.5;

      if (i > 1 && Math.random() > 0.25) {
        const branchCount = 1 + Math.floor(Math.random() * 3);
        for (let b = 0; b < branchCount; b++) {
          const branch = new THREE.Group();
          let bPos = new THREE.Vector3(0, 0, 0);
          let bRot = new THREE.Euler(
            (Math.random() - 0.5) * 2.5,
            Math.random() * Math.PI * 2,
            (Math.random() - 0.5) * 2.5
          );
          
          const bSegments = 3 + Math.floor(Math.random() * 4);
          for (let k = 0; k < bSegments; k++) {
            const bh = 0.7 + Math.random() * 1.2;
            const br = r * 0.5 * (1 - k/bSegments);
            const bGeo = new THREE.CylinderGeometry(br * 0.6, br, bh, 3);
            bGeo.translate(0, bh/2, 0);
            const bSeg = new THREE.Mesh(bGeo, rotMat);
            bSeg.position.copy(bPos);
            bSeg.rotation.copy(bRot);
            branch.add(bSeg);
            
            // Thorns on branches
            if (Math.random() > 0.6) {
              const bSpike = new THREE.Mesh(new THREE.ConeGeometry(0.05, 0.4, 3), creepyTrunkMat);
              bSpike.position.copy(bPos).setY(bPos.y + bh/2);
              branch.add(bSpike);
            }

            const bDir = new THREE.Vector3(0, 1, 0).applyEuler(bRot);
            bPos.add(bDir.multiplyScalar(bh));
            bRot.x += (Math.random() - 0.5) * 1.0;
            bRot.z += (Math.random() - 0.5) * 1.0;
          }
          branch.position.copy(lastPos);
          tree.add(branch);

          if (Math.random() > 0.12) {
            const corpse = createHangingCorpse();
            corpse.position.copy(bPos);
            corpse.rotation.x = -bRot.x;
            corpse.rotation.z = -bRot.z;
            branch.add(corpse);
          }
        }
      }
    }
    
    return tree;
  };

  // ═══════════════════════════════════════════════════════════════
  // 4. NATURE & BATTLEFIELD PROPS
  // ═══════════════════════════════════════════════════════════════
  const natureGroup = new THREE.Group();
  const rockMat  = new THREE.MeshStandardMaterial({ color: 0x555555, roughness: 0.9 });
  const woodMat  = new THREE.MeshStandardMaterial({ color: 0x4a3c2c, roughness: 1.0 });

  const rockGeo    = new THREE.DodecahedronGeometry(1, 0);

  const ARENA_X = 9.0;

  for (let i = 0; i < 180; i++) {
    const angle = Math.random() * Math.PI * 2;
    const dist  = 18 + Math.random() * 65;
    const px = Math.cos(angle) * dist;
    const pz = Math.sin(angle) * dist;
    if (Math.abs(px) < ARENA_X && Math.abs(pz) < 20) continue; // Keep arena clear

    const rand = Math.random();
    if (rand < 0.10) { // 10% trees
      const tree = createCreepyTree();
      tree.position.set(px, 0, pz);
      tree.rotation.y = Math.random() * Math.PI * 2;
      tree.scale.setScalar(0.5 + Math.random() * 1.5);
      natureGroup.add(tree);
    } else if (rand < 0.35) { // Reduced rocks (25%)
      const rock = new THREE.Mesh(rockGeo, rockMat);
      rock.position.set(px, 0.2, pz);
      rock.rotation.set(Math.random(), Math.random(), Math.random());
      rock.scale.set(1.2 + Math.random() * 1.5, 0.8 + Math.random() * 1.5, 1.2 + Math.random() * 1.5);
      natureGroup.add(rock);
    } else if (rand < 0.75) {
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

  // Update Hanging Corpses (Sway)
  if (env.natureGroup) {
    env.natureGroup.children.forEach(tree => {
      tree.children.forEach(child => {
        if (child.isGroup) { // Could be a branch
          child.children.forEach(subChild => {
            if (subChild.userData && subChild.userData.isCorpse) {
              const s = subChild.userData;
              // Sway
              subChild.rotation.x = Math.sin(time * s.swaySpeed + s.swayOffset) * 0.1;
              subChild.rotation.z = Math.cos(time * s.swaySpeed * 0.8 + s.swayOffset) * 0.05;
              
              // NEW: Sickly Twitch
              s.twitchTimer += delta;
              if (s.twitchTimer > 2.0 + Math.random() * 3.0) {
                subChild.rotation.y = (Math.random() - 0.5) * 0.3;
                if (s.twitchTimer > 2.2) s.twitchTimer = 0;
              }
            }
          });
        }
      });
    });
  }
}
