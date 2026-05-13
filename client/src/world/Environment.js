import * as THREE from 'three';

export function setupEnvironment(scene) {

  // ═══════════════════════════════════════════════════════════════
  // 1. SKY — Bright Blue Day Gradient
  // ═══════════════════════════════════════════════════════════════
  const skyCanvas = document.createElement('canvas');
  skyCanvas.width = 1;
  skyCanvas.height = 256;
  const skyCtx = skyCanvas.getContext('2d');
  
  const dayGradient = skyCtx.createLinearGradient(0, 0, 0, 256);
  dayGradient.addColorStop(0, '#2c3e50'); // Misty dark top
  dayGradient.addColorStop(1, '#8a9ba8'); // Misty horizon
  
  skyCtx.fillStyle = dayGradient;
  skyCtx.fillRect(0, 0, 1, 256);
  
  const skyTex = new THREE.CanvasTexture(skyCanvas);
  scene.background = skyTex;

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
  // 2. DENSE GRASS SYSTEM (Restored outside arena)
  // ═══════════════════════════════════════════════════════════════
  const GRASS_COUNT = 80000; // Reduced for performance
  const grassGeo = new THREE.PlaneGeometry(0.12, 0.7);
  grassGeo.translate(0, 0.35, 0);

  const grassMat = new THREE.MeshStandardMaterial({
    color: 0x4a554a,
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

  scene.fog = new THREE.FogExp2(0x8a9ba8, 0.012); 

  return { clouds, natureGroup, grassMesh };
}

export function updateEnvironment(env, delta) {
  if (!env || !env.clouds) return;
  env.clouds.children.forEach(cloud => {
    cloud.position.x += cloud.userData.speed * delta * 0.3;
    if (cloud.position.x > 150) cloud.position.x = -150;
  });
}
