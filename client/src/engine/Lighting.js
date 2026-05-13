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
    { pos: [0, 2.5, 8.5],    color: 0xFF5500 },
    { pos: [-5.5, 1.8, 7.0], color: 0xFF5500 },
    { pos: [5.5, 1.8, 7.0],  color: 0xFF5500 },
    { pos: [0, 1.5, 6.0],    color: 0xFF5500 },
    { pos: [0, 2.5, -8.5],   color: 0x0088FF },
    { pos: [-5.5, 1.8, -7.0], color: 0x0088FF },
    { pos: [5.5, 1.8, -7.0],  color: 0x0088FF },
    { pos: [0, 1.5, -6.0],    color: 0x0088FF },
  ];

  torchPositions.forEach(({ pos, color }) => {
    const light = new THREE.PointLight(color, 2.0, 8.0, 2.0); // More diffused
    light.position.set(...pos);
    light.userData.baseIntensity = 2.0;
    light.userData.flickerOffset = Math.random() * Math.PI * 2;
    scene.add(light);
    torchLights.push(light);
  });

  return { ambient, hemi, sun, fill, rim, torchLights };
}

export function updateTorchFlicker(lighting, time) {
  const { torchLights } = lighting;
  torchLights.forEach(light => {
    const flicker = Math.sin(time * 8 + light.userData.flickerOffset) * 0.3
                  + Math.sin(time * 13 + light.userData.flickerOffset) * 0.15;
    light.intensity = light.userData.baseIntensity + flicker;
  });

  // Distant Lightning logic (Visual only)
  if (Math.random() > 0.9992) {
    const flash = lighting.sun;
    const base = flash.intensity;
    flash.intensity = base * 4.0;
    setTimeout(() => { flash.intensity = base; }, 50 + Math.random() * 100);
  }
}
