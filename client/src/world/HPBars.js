import { CSS2DObject } from 'three/addons/renderers/CSS2DRenderer.js';

export function createTowerHPBar(towerGroup) {
  // Create DOM element
  const wrapper = document.createElement('div');
  wrapper.style.cssText = `
    width: 72px; height: 8px;
    background: #111;
    border: 1px solid rgba(255,255,255,0.2);
    border-radius: 2px;
    overflow: hidden;
    pointer-events: none;
  `;
  const fill = document.createElement('div');
  fill.style.cssText = `
    width: 100%; height: 100%;
    background: #2ECC71;
    transition: width 0.15s, background 0.3s;
  `;
  wrapper.appendChild(fill);

  // Wrap in CSS2DObject — it tracks 3D position automatically
  const label = new CSS2DObject(wrapper);
  label.position.set(0, 4.0, 0); // offset above tower top
  towerGroup.add(label);

  // Store refs
  towerGroup.userData.hpBarFill = fill;
  towerGroup.userData.hpBarLabel = label;

  return label;
}

export function updateHPBar(towerGroup, hp, maxHp) {
  const fill  = towerGroup.userData.hpBarFill;
  if (!fill) return;
  const ratio = Math.max(0, hp / maxHp);
  fill.style.width = `${ratio * 100}%`;

  if      (ratio > 0.6) fill.style.background = '#2ECC71';
  else if (ratio > 0.4) fill.style.background = '#F1C40F';
  else if (ratio > 0.2) fill.style.background = '#E67E22';
  else                  fill.style.background = '#E74C3C';
  
  if (ratio <= 0) {
    towerGroup.userData.hpBarLabel.visible = false;
  }
}
