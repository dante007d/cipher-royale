// /client/src/engine/DisposalRegistry.js
// Tracks all Three.js objects for reliable memory cleanup

export class DisposalRegistry {
  constructor() {
    this.materials = new Set();
    this.geometries = new Set();
    this.textures = new Set();
    this.groups = new Set(); // Need to traverse and remove from scene
  }

  track(object) {
    if (!object) return;

    if (object.isGeometry || object.isBufferGeometry) {
      this.geometries.add(object);
    } else if (object.isMaterial) {
      this.materials.add(object);
      // Track maps inside material
      for (const key of Object.keys(object)) {
        const val = object[key];
        if (val && val.isTexture) this.textures.add(val);
      }
    } else if (object.isTexture) {
      this.textures.add(object);
    } else if (object.isObject3D) {
      this.groups.add(object);
      if (object.geometry) this.track(object.geometry);
      if (object.material) {
        if (Array.isArray(object.material)) {
          object.material.forEach(m => this.track(m));
        } else {
          this.track(object.material);
        }
      }
    }
  }

  // Traverses an object tree and tracks everything
  trackTree(root) {
    if (!root || !root.isObject3D) return;
    this.track(root);
    root.traverse(child => this.track(child));
  }

  disposeAll() {
    let mats = 0, geos = 0, texs = 0, objs = 0;

    // 1. Remove objects from parents
    this.groups.forEach(obj => {
      if (obj.parent) obj.parent.remove(obj);
      objs++;
    });
    this.groups.clear();

    // 2. Dispose geometries
    this.geometries.forEach(geo => {
      geo.dispose();
      geos++;
    });
    this.geometries.clear();

    // 3. Dispose materials
    this.materials.forEach(mat => {
      mat.dispose();
      mats++;
    });
    this.materials.clear();

    // 4. Dispose textures
    this.textures.forEach(tex => {
      tex.dispose();
      texs++;
    });
    this.textures.clear();

    console.log(`[DisposalRegistry] Cleared: ${objs} objs, ${geos} geos, ${mats} mats, ${texs} texs`);
  }
}
