// /client/src/engine/ContextRecovery.js
// Handles WebGL context loss gracefully without crashing the app

export function attachContextLossHandlers(renderer, onLoss, onRestore) {
  const canvas = renderer.domElement;

  const handleLoss = (event) => {
    event.preventDefault(); // Prevents default browser action
    console.error('🚨 [WebGL] Context Lost! The GPU crashed or ran out of memory.');
    if (onLoss) onLoss();
  };

  const handleRestore = () => {
    console.log('✅ [WebGL] Context Restored! Rebuilding graphics...');
    if (onRestore) onRestore();
  };

  canvas.addEventListener('webglcontextlost', handleLoss, false);
  canvas.addEventListener('webglcontextrestored', handleRestore, false);

  return () => {
    canvas.removeEventListener('webglcontextlost', handleLoss);
    canvas.removeEventListener('webglcontextrestored', handleRestore);
  };
}
