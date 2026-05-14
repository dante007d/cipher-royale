import * as THREE from 'three';

export function createGround(scene) {

  // ── MAIN MUDDY BATTLEFIELD (Playing Arena) ──────────────────────────────────
  const groundMaterial = new THREE.ShaderMaterial({
    uniforms: {
      time:         { value: 0 },
      colorA:       { value: new THREE.Color(0x1a1a1a) }, // Deep mud
      colorB:       { value: new THREE.Color(0x3a2f26) }, // Wet dirt
      puddleColor:  { value: new THREE.Color(0x4a5a6a) }, // Sky reflection
      gridStrength: { value: 0.1 }
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
      uniform vec3 puddleColor;
      uniform float gridStrength;
      varying vec2 vUv;
      varying vec3 vWorldPos;

      float hash(vec2 p) {
        return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
      }

      float noise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        f = f * f * (3.0 - 2.0 * f);
        float a = hash(i);
        float b = hash(i + vec2(1.0, 0.0));
        float c = hash(i + vec2(0.0, 1.0));
        float d = hash(i + vec2(1.0, 1.0));
        return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
      }

      void main() {
        // Diseased, cracked earth
        float n = noise(vWorldPos.xz * 1.8);
        n += 0.4 * noise(vWorldPos.xz * 4.0);
        
        vec3 earth = mix(vec3(0.2, 0.05, 0.05), vec3(0.4, 0.15, 0.1), n);

        // Scarlet Rot Pools (Glowing)
        float rotNoise = noise(vWorldPos.xz * 0.7 + time * 0.03);
        float rotMask = smoothstep(0.55, 0.65, rotNoise);
        
        // Sickly pink-red glow
        vec3 rotCol = vec3(1.0, 0.1, 0.4) * (0.8 + 0.2 * sin(time * 2.0));
        vec3 col = mix(earth, rotCol * 0.3, rotMask);
        
        // Creeping Veins (Corruption)
        float vein = noise(vWorldPos.xz * 12.0);
        float veinMask = smoothstep(0.7, 0.8, vein) * (1.0 - rotMask);
        col = mix(col, vec3(0.1, 0.0, 0.0), veinMask);

        // Subtle tactical grid (Aged and broken)
        vec2 grid = abs(fract(vWorldPos.xz * 1.0 - 0.5) - 0.5);
        float line = smoothstep(0.01, 0.0, min(grid.x, grid.y));
        col += vec3(1.0, 0.4, 0.4) * line * gridStrength;

        // Edge decay (Heavy shadow)
        float dist = length(vUv - 0.5);
        col *= smoothstep(0.95, 0.2, dist);

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
  const clickZoneGeo = new THREE.PlaneGeometry(2.5, 20); // Increased width and height
  const clickZoneMat = new THREE.MeshBasicMaterial({ color: 0xe0f7fa, transparent: true, opacity: 0, visible: false });
  const clickZones = [];

  ['playerA', 'playerB'].forEach(side => {
    const sideZ = side === 'playerA' ? 10.0 : -10.0;
    lanePositions.forEach((x, i) => {
      const zone = new THREE.Mesh(clickZoneGeo, clickZoneMat.clone());
      zone.rotation.x = -Math.PI / 2;
      zone.position.set(x, 0.1, sideZ); 
      
      // Lane names should match world X positions consistently
      const lane = ['left', 'center', 'right'][i];
      
      zone.userData.lane = lane;
      zone.userData.side = side;
      zone.userData.isLaneZone = true;
      scene.add(zone);
      clickZones.push(zone);
    });
  });

  return { ground, lanes, centerLine, clickZones, groundMaterial, centerLineMat };
}
