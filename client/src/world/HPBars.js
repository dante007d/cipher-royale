import { CSS2DObject } from 'three/addons/renderers/CSS2DRenderer.js';

export function createTowerHPBar(towerGroup) {
  // Create DOM element
  const wrapper = document.createElement('div');
  wrapper.style.cssText = `
    width: 80px; height: 10px;
    background: rgba(0, 0, 0, 0.6);
    border: 2px solid rgba(255, 255, 255, 0.15);
    border-radius: 4px;
    padding: 2px;
    box-shadow: 0 4px 10px rgba(0,0,0,0.5);
    overflow: hidden;
    pointer-events: none;
    backdrop-filter: blur(4px);
  `;
  const fill = document.createElement('div');
  fill.style.cssText = `
    width: 100%; height: 100%;
    background: linear-gradient(90deg, #2ECC71, #27AE60);
    border-radius: 1px;
    transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1), background 0.4s;
    box-shadow: 0 0 8px rgba(46, 204, 113, 0.4);
  `;
  wrapper.appendChild(fill);

  // Wrap in CSS2DObject
  const label = new CSS2DObject(wrapper);
  
  // Position based on tower type
  const type = towerGroup.userData.type;
  const yOffset = type === 'main' ? 4.2 : 2.5; 
  label.position.set(0, yOffset, 0);
  towerGroup.add(label);

  // Store refs
  towerGroup.userData.hpBarFill = fill;
  towerGroup.userData.hpBarLabel = label;

  return label;
}

export function updateHPBar(towerGroup, hp, maxHp) {
  const fill  = towerGroup.userData.hpBarFill;
  const label = towerGroup.userData.hpBarLabel;
  if (!fill || !label) return;

  const prevRatio = parseFloat(fill.style.width) / 100 || 1.0;
  const ratio = Math.max(0, hp / maxHp);
  fill.style.width = `${ratio * 100}%`;

  // Visual Feedback for Damage
  if (ratio < prevRatio) {
    label.element.style.animation = 'none';
    void label.element.offsetWidth; // trigger reflow
    label.element.style.animation = 'hpShake 0.3s cubic-bezier(.36,.07,.19,.97) both';
    fill.style.filter = 'brightness(2.5)';
    setTimeout(() => { fill.style.filter = 'none'; }, 100);
  }

  const green  = 'linear-gradient(90deg, #2ECC71, #27AE60)';
  const yellow = 'linear-gradient(90deg, #F1C40F, #D4AC0D)';
  const orange = 'linear-gradient(90deg, #E67E22, #D35400)';
  const red    = 'linear-gradient(90deg, #E74C3C, #C0392B)';

  if      (ratio > 0.6) fill.style.background = green;
  else if (ratio > 0.4) fill.style.background = yellow;
  else if (ratio > 0.2) fill.style.background = orange;
  else                  fill.style.background = red;
  
  if (ratio <= 0) {
    label.visible = false;
  }
}
