import * as THREE from 'three';
import useGameStore from '../store/gameStore.js';

export class LaneInput {
  constructor(camera, clickZones, scene) {
    this.camera     = camera;
    this.clickZones = clickZones;
    this.scene      = scene;
    this.raycaster  = new THREE.Raycaster();
    this.pointer    = new THREE.Vector2();
    this.enabled    = false; 
    this.selectedCard = null;

    this._onPointerMove = (e) => {
      this.pointer.x =  (e.clientX / window.innerWidth)  * 2 - 1;
      this.pointer.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    
    this._onPointerDownHandler = (e) => this._onPointerDown(e);

    // Listen for card selection from React HUD
    this._onCardSelected = ({ detail }) => {
      this.selectedCard = detail.cardType;
      this.enabled      = true;
      this._highlightLanes(true);
    };

    this._onCardDeselected = () => {
      this.enabled      = false;
      this.selectedCard = null;
      this._highlightLanes(false);
    };

    window.addEventListener('pointermove', this._onPointerMove);
    window.addEventListener('pointerdown', this._onPointerDownHandler);
    window.addEventListener('card_selected', this._onCardSelected);
    window.addEventListener('card_deselected', this._onCardDeselected);
  }

  dispose() {
    window.removeEventListener('pointermove', this._onPointerMove);
    window.removeEventListener('pointerdown', this._onPointerDownHandler);
    window.removeEventListener('card_selected', this._onCardSelected);
    window.removeEventListener('card_deselected', this._onCardDeselected);
  }

  _onPointerDown(e) {
    if (!this.enabled) return;
    
    // ── 1. UI BLOCKER ───────────────────────────────────────────────
    // If the user clicked a button, the HUD, or anything other than 
    // the game canvas, ignore it to prevent accidental deployment.
    if (e.target.tagName !== 'CANVAS') return;

    this.raycaster.setFromCamera(this.pointer, this.camera);
    
    // ── 2. VISIBILITY FILTER ────────────────────────────────────────
    // Only intersect with zones that are actually visible (the player's side)
    const activeZones = this.clickZones.filter(z => z.visible);
    const hits = this.raycaster.intersectObjects(activeZones);
    if (hits.length > 0) {
      const hit = hits[0];
      const zone = hit.object;
      const lane = zone.userData.lane;
      const x = zone.position.x;
      
      console.log(`[LaneInput] CLICK: WorldX=${hit.point.x.toFixed(2)}, ZoneX=${x}, Lane=${lane}`);

      // Visual Click Marker (Vertical Beam)
      const beamGeo = new THREE.CylinderGeometry(0.5, 0.5, 40, 16);
      const beamMat = new THREE.MeshBasicMaterial({ color: 0xffff00, transparent: true, opacity: 0.3 });
      const marker = new THREE.Mesh(beamGeo, beamMat);
      marker.position.copy(hit.point);
      marker.position.y = 20; // Half height
      this.scene.add(marker);
      setTimeout(() => this.scene.remove(marker), 800);
      
      if (!lane) return;
      
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
