import * as THREE from 'three';

export function setupLighting(scene) {

  // 1. AMBIENT — soft cool morning fill
  const ambient = new THREE.AmbientLight(0x778899, 0.6);
  scene.add(ambient);

  // 2. HEMISPHERE — overcast sky/ground bounce
  const hemi = new THREE.HemisphereLight(0x8a9ba8, 0x223322, 1.2); 
  scene.add(hemi);

  // 3. SUN — soft cool light (overcast dawn)
  const sun = new THREE.DirectionalLight(0xb0c4de, 1.5); // Brighter
  sun.position.set(-10, 25, -10);
  sun.castShadow = true;
  sun.shadow.mapSize.width  = 2048;
  sun.shadow.mapSize.height = 2048;
  sun.shadow.camera.near  = 0.5;
  sun.shadow.camera.far   = 100;
  sun.shadow.camera.left  = -25;
  sun.shadow.camera.right =  25;
  sun.shadow.camera.top   =  25;
  sun.shadow.camera.bottom = -25;
  sun.shadow.bias = -0.0005;
  scene.add(sun);
  scene.add(sun.target);

  // 4. RIM LIGHT — backlighting for silhouettes
  const rim = new THREE.DirectionalLight(0xffffff, 0.4);
  rim.position.set(20, 10, 20);
  scene.add(rim);

  // 5. FILL LIGHT
  const fill = new THREE.DirectionalLight(0x99aabb, 0.3);
  fill.position.set(15, 10, 15);
  scene.add(fill);

  // 5. TOWER TORCHES
  const torchLights = [];
  const torchPositions = [
    { pos: [0, 2.5, 8.5],    color: 0x00ffff }, // Cyan for Player A
    { pos: [-5.5, 1.8, 7.0], color: 0x00ffff },
    { pos: [5.5, 1.8, 7.0],  color: 0x00ffff },
    { pos: [0, 2.5, -8.5],   color: 0xff00ff }, // Magenta for Player B
    { pos: [-5.5, 1.8, -7.0], color: 0xff00ff },
    { pos: [5.5, 1.8, -7.0],  color: 0xff00ff },
  ];

  torchPositions.forEach(({ pos, color }) => {
    const light = new THREE.PointLight(color, 2.5, 10.0, 2.0);
    light.position.set(...pos);
    light.userData.baseIntensity = 2.5;
    light.userData.flickerOffset = Math.random() * Math.PI * 2;
    scene.add(light);
    torchLights.push(light);
  });

  // ═══════════════════════════════════════════════════════════════
  // 6. LIGHTNING FLASH HANDLER
  // ═══════════════════════════════════════════════════════════════
  window.addEventListener('lightning_strike', (e) => {
    const detailIntensity = e.detail?.intensity || 2.0;
    const base = 1.5;
    sun.intensity = base * (8.0 + Math.random() * 6.0) * (detailIntensity / 2.0);
    sun.color.setHex(0xffffff);
    
    // Quick double-flash
    setTimeout(() => {
      sun.intensity = base * 3.0 * (detailIntensity / 2.0);
      setTimeout(() => {
        sun.intensity = base * 15.0 * (detailIntensity / 2.0); // Blinding peak
        setTimeout(() => {
          sun.intensity = base; 
          sun.color.setHex(0xb0c4de);
        }, 60);
      }, 40);
    }, 50);
  });

  return { ambient, hemi, sun, fill, rim, torchLights };
}

export function updateTorchFlicker(lighting, time) {
  const { torchLights, sun } = lighting;
  torchLights.forEach(light => {
    const flicker = Math.sin(time * 8 + light.userData.flickerOffset) * 0.4
                  + Math.sin(time * 15 + light.userData.flickerOffset) * 0.2;
    light.intensity = light.userData.baseIntensity + flicker;
  });

  // Distant Lightning logic (Visual only) - Now more intense
  if (Math.random() > 0.999) {
    const base = 1.5;
    sun.intensity = base * 6.0;
    sun.color.setHex(0xffffff);
    setTimeout(() => { 
      sun.intensity = base; 
      sun.color.setHex(0xb0c4de);
    }, 40 + Math.random() * 80);
  }
}
