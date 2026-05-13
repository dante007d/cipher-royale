import * as THREE from 'three';
import { TOWERS } from '@shared/towerConfig.js';

export function buildTowerMesh(type, playerSide, scene) {
  const group    = new THREE.Group();
  const isPlayerA = playerSide === 'playerA';
  const stoneColor    = 0xa08560; 
  const stoneDark     = 0x7a6140; 
  const playerAccent  = isPlayerA ? 0xd63031 : 0x0984e3;
  const playerBright  = isPlayerA ? 0xff7675 : 0x74b9ff;

  const sizes = {
    main: { baseW: 1.8, baseD: 1.8, bodyH: 3.0, battH: 0.5, battW: 0.35 },
    sub:  { baseW: 1.2, baseD: 1.2, bodyH: 1.8, battH: 0.4, battW: 0.25 }
  };
  const s = type === 'main' ? sizes.main : sizes.sub;

  const stoneMat = new THREE.MeshStandardMaterial({
    color: stoneColor, roughness: 0.85, metalness: 0.05
  });
  const stoneDarkMat = new THREE.MeshStandardMaterial({
    color: stoneDark, roughness: 0.9, metalness: 0.0
  });
  const accentMat = new THREE.MeshStandardMaterial({
    color: playerAccent, roughness: 0.6, metalness: 0.2,
    emissive: playerAccent, emissiveIntensity: 0.1
  });

  // Base
  const base = new THREE.Mesh(new THREE.BoxGeometry(s.baseW + 0.3, 0.25, s.baseD + 0.3), stoneDarkMat);
  base.position.y = 0.125;
  base.castShadow = base.receiveShadow = true;
  group.add(base);

  // Body
  const body = new THREE.Mesh(new THREE.BoxGeometry(s.baseW, s.bodyH, s.baseD), stoneMat);
  body.position.y = 0.25 + s.bodyH / 2;
  body.castShadow = body.receiveShadow = true;
  group.add(body);

  // Band
  const band = new THREE.Mesh(new THREE.BoxGeometry(s.baseW + 0.02, 0.18, s.baseD + 0.02), accentMat);
  band.position.y = 0.25 + s.bodyH - 0.35;
  group.add(band);

  // Battlements
  const battPositions = [[-s.baseW/2, s.baseD/2], [s.baseW/2, s.baseD/2], [-s.baseW/2, -s.baseD/2], [s.baseW/2, -s.baseD/2]];
  battPositions.forEach(([bx, bz]) => {
    const batt = new THREE.Mesh(new THREE.BoxGeometry(s.battW, s.battH, s.battW), stoneMat);
    batt.position.set(bx, 0.25 + s.bodyH + s.battH/2, bz);
    group.add(batt);
  });

  // Flag
  const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 1.2, 6), stoneDarkMat);
  pole.position.y = 0.25 + s.bodyH + 0.6;
  group.add(pole);
  const flagMat = new THREE.MeshStandardMaterial({ color: playerBright, emissive: playerBright, emissiveIntensity: 0.4, side: THREE.DoubleSide });
  const flag = new THREE.Mesh(new THREE.PlaneGeometry(0.5, 0.3), flagMat);
  flag.position.set(0.25, 0.25 + s.bodyH + 1.1, 0);
  group.add(flag);

  // Rubble group (hidden by default)
  const rubble = new THREE.Group();
  for (let i = 0; i < 6; i++) {
    const r = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.2, 0.4), stoneDarkMat);
    r.position.set((Math.random() - 0.5) * s.baseW, 0.1, (Math.random() - 0.5) * s.baseD);
    r.rotation.set(Math.random(), Math.random(), Math.random());
    rubble.add(r);
  }
  rubble.visible = false;
  group.add(rubble);

  const towerType = type === 'main' ? 'main' : type;
  group.userData = {
    type: towerType, playerSide, hp: TOWERS[towerType].maxHp, maxHp: TOWERS[towerType].maxHp,
    alive: true, damageState: 0, body, flag, rubble, battPositions: group.children.filter(c => c.geometry && c.geometry.type === 'BoxGeometry' && c.position.y > 1.5)
  };

  scene.add(group);
  return group;
}

export function updateTowerDamageVisuals(towerGroup, hp, maxHp) {
  const ratio = hp / maxHp;
  const prevState = towerGroup.userData.damageState;
  let newState;
  if (ratio > 0.66) newState = 0;
  else if (ratio > 0.33) newState = 1;
  else if (ratio > 0)    newState = 2;
  else                   newState = 3;

  if (newState === prevState) return;
  towerGroup.userData.damageState = newState;

  const { body, flag, rubble } = towerGroup.userData;

  if (newState === 1) {
    body.material.color.setHex(0x6B5A3E);
  } else if (newState === 2) {
    body.material.color.setHex(0x5C3A1E);
  } else if (newState === 3) {
    // DESTROYED: Hide everything but the base and rubble
    towerGroup.children.forEach(c => {
      if (c !== rubble && c.position.y > 0.25) c.visible = false;
    });
    rubble.visible = true;
    towerGroup.userData.alive = false;
  }
}
