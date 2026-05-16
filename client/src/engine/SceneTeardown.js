// /client/src/engine/SceneTeardown.js
// Safe, recursive cleanup for an entire Three.js scene

export function tearDownScene(scene) {
  if (!scene) return;

  // 1. Remove all children recursively
  while (scene.children.length > 0) {
    const child = scene.children[0];
    scene.remove(child);
  }

  // 2. Dispose of background texture/color if applicable
  if (scene.background && scene.background.isTexture) {
    scene.background.dispose();
  }
  if (scene.environment && scene.environment.isTexture) {
    scene.environment.dispose();
  }
  
  // 3. Clear properties
  scene.background = null;
  scene.environment = null;
}
