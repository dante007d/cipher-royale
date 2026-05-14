import * as THREE from 'three';
import useGameStore from '../store/gameStore.js';

export class LaneInput {
  constructor(camera, clickZones) {
    this.camera     = camera;
    this.clickZones = clickZones;
    this.raycaster  = new THREE.Raycaster();
    this.pointer    = new THREE.Vector2();
    this.enabled    = false; 
    this.selectedCard = null;

    window.addEventListener('pointermove', e => {
      this.pointer.x =  (e.clientX / window.innerWidth)  * 2 - 1;
      this.pointer.y = -(e.clientY / window.innerHeight) * 2 + 1;
    });

    window.addEventListener('pointerdown', () => this._onPointerDown());

    // Listen for card selection from React HUD
    window.addEventListener('card_selected', ({ detail }) => {
      this.selectedCard = detail.cardType;
      this.enabled      = true;
      this._highlightLanes(true);
    });

    window.addEventListener('card_deselected', () => {
      this.enabled      = false;
      this.selectedCard = null;
      this._highlightLanes(false);
    });
  }

  _onPointerDown() {
    if (!this.enabled) return;

    console.log('[LaneInput] Pointer down at:', this.pointer);
    this.raycaster.setFromCamera(this.pointer, this.camera);
    const hits = this.raycaster.intersectObjects(this.clickZones);

    console.log('[LaneInput] Raycaster hits:', hits.length);

    if (hits.length > 0) {
      const lane = hits[0].object.userData.lane;
      console.log('[LaneInput] Clicked lane:', lane);
      // Dispatch lane click back to React
      window.dispatchEvent(new CustomEvent('lane_clicked', {
        detail: { lane, cardType: this.selectedCard }
      }));
      this.enabled      = false;
      this.selectedCard = null;
      this._highlightLanes(false);
    }
  }
  _highlightLanes(active) {
    // Try all possible ways to get the player role
    const storeRole = useGameStore.getState().playerRole;
    let role = storeRole || window.__cipherClash?.playerRole;
    
    if (!role) {
      const stored = localStorage.getItem('cipherClash_room');
      if (stored) role = JSON.parse(stored).playerRole;
    }
    role = role || 'playerA';

    console.log(`[LaneInput] Highlighting for ${role}, Active: ${active}`);

    this.clickZones.forEach(zone => {
      // Only show zones for the player's side
      const isMySide = zone.userData.side === role;
      zone.visible = active && isMySide;
      if (zone.material) {
        zone.material.visible  = active && isMySide;
        zone.material.color.setHex(0xe0f7fa);
        zone.material.opacity  = (active && isMySide) ? 0.35 : 0;
      }
    });
  }

  update(time) {
    if (!this.enabled) return;
    // Premium gentle pulse
    const pulse = 0.25 + Math.sin(time * 3) * 0.1;
    this.clickZones.forEach(zone => {
      if (zone.visible && zone.material) {
        zone.material.opacity = pulse;
      }
    });
  }

  updateHover() {
    if (!this.enabled) return;
    this.raycaster.setFromCamera(this.pointer, this.camera);
    const hits = this.raycaster.intersectObjects(this.clickZones);
    this.clickZones.forEach(z => { if(z.material) z.material.opacity = 0.08; });
    if (hits.length > 0) hits[0].object.material.opacity = 0.25;
  }
}
