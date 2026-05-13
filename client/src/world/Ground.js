import * as THREE from 'three';

export function createGround(scene) {

  // ── MAIN GRASS GROUND (Playing Arena) ─────────────────────────────────────────
  const groundMaterial = new THREE.ShaderMaterial({
    uniforms: {
      time:         { value: 0 },
      colorA:       { value: new THREE.Color(0x3e7a36) }, // Bright grass
      colorB:       { value: new THREE.Color(0x4a9141) }, // Brighter grass
      tileSize:     { value: 1.0 },
      gridStrength: { value: 0.15 }
    },
    vertexShader: `
      varying vec2 vUv;
      varying vec3 vWorldPos;
      void main() {
        vUv = uv;
        vWorldPos = (modelMatrix * vec4(position, 1.0)).xyz;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform float time;
      uniform vec3 colorA;
      uniform vec3 colorB;
      uniform float tileSize;
      uniform float gridStrength;
      varying vec2 vUv;
      varying vec3 vWorldPos;

      float hash(vec2 p) {
        return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
      }

      void main() {
        vec2 tileCoord = floor(vWorldPos.xz / tileSize);
        float tileNoise = hash(tileCoord);
        vec3 col = mix(colorA, colorB, tileNoise * 0.5 + 0.25);

        vec2 frac = fract(vWorldPos.xz / tileSize);
        float edge = min(frac.x, min(1.0 - frac.x, min(frac.y, 1.0 - frac.y)));
        float grid = smoothstep(0.0, 0.04, edge);
        col = mix(col * 0.85, col, grid);

        gl_FragColor = vec4(col, 1.0);
      }
    `
  });

  const ground = new THREE.Mesh(new THREE.PlaneGeometry(16, 40, 1, 1), groundMaterial); // Match new depth
  ground.rotation.x = -Math.PI / 2;
  ground.receiveShadow = true;
  ground.position.y = -0.01;
  scene.add(ground);

  // ── LIVELY ENVIRONMENT FLOOR (Dirt/Sand) ───────────────────────────────────────
  const dirtMaterial = new THREE.MeshStandardMaterial({
    color: 0x2c251d, // Muddy dark brown
    roughness: 0.9, 
    metalness: 0.05
  });

  const dirt = new THREE.Mesh(new THREE.PlaneGeometry(250, 250), dirtMaterial);
  dirt.rotation.x = -Math.PI / 2;
  dirt.position.y = -0.15;
  dirt.receiveShadow = true;
  scene.add(dirt);

  // ── THREE LANE STRIPS (Stone path) ────────────────────────────
  const laneMaterial = new THREE.MeshStandardMaterial({
    color:     0x3d3021, // Wet muddy stone
    roughness: 0.8, 
    metalness: 0.1
  });

  const lanePositions = [-5.5, 0, 5.5];
  const lanes = lanePositions.map(x => {
    const lane = new THREE.Mesh(new THREE.PlaneGeometry(1.8, 40, 1, 1), laneMaterial);
    lane.rotation.x = -Math.PI / 2;
    lane.position.set(x, 0, 0);
    lane.receiveShadow = true;
    scene.add(lane);
    return lane;
  });

  // ── CENTER LINE GLOW ──────────────────────────────────────────
  const centerLineMat = new THREE.ShaderMaterial({
    transparent: true,
    uniforms: { time: { value: 0 } },
    vertexShader: `
      varying vec2 vUv;
      void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }
    `,
    fragmentShader: `
      uniform float time;
      varying vec2 vUv;
      void main() {
        float pulse = sin(time * 3.0) * 0.4 + 0.6;
        float fade  = 1.0 - abs(vUv.y - 0.5) * 2.0;
        gl_FragColor = vec4(1.0, 1.0, 0.6, fade * pulse * 0.7);
      }
    `
  });

  const centerLine = new THREE.Mesh(new THREE.PlaneGeometry(40, 0.25), centerLineMat);
  centerLine.rotation.x = -Math.PI / 2;
  centerLine.position.set(0, 0.03, 0);
  scene.add(centerLine);

  // ── LANE CLICK ZONES (Both Sides) ────────────
  const clickZoneGeo = new THREE.PlaneGeometry(2.2, 18);
  const clickZoneMat = new THREE.MeshBasicMaterial({ color: 0xe0f7fa, transparent: true, opacity: 0, visible: false });
  const clickZones = [];

  ['playerA', 'playerB'].forEach(side => {
    const sideZ = side === 'playerA' ? 10.0 : -10.0;
    lanePositions.forEach((x, i) => {
      const zone = new THREE.Mesh(clickZoneGeo, clickZoneMat.clone());
      zone.rotation.x = -Math.PI / 2;
      zone.position.set(x, 0.1, sideZ); 
      zone.userData.lane = ['left', 'center', 'right'][i];
      zone.userData.side = side;
      zone.userData.isLaneZone = true;
      scene.add(zone);
      clickZones.push(zone);
    });
  });

  return { ground, lanes, centerLine, clickZones, groundMaterial, centerLineMat };
}
