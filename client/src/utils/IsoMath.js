/**
 * Top-down Math Utility for Cipher Clash
 * Maps world (pixel) coordinates to screen (canvas) coordinates 1:1.
 */

const ORIGIN_X = 0; 
const ORIGIN_Y = 0; 

/**
 * Convert world (pixel) coordinates to screen (canvas) coordinates.
 */
export function worldToScreen(pixelX, pixelY) {
  return { x: pixelX, y: pixelY };
}

/**
 * Convert screen coordinates back to world (pixel) coordinates.
 */
export function screenToWorld(screenX, screenY) {
  return { x: screenX, y: screenY };
}

/**
 * Depth sort value for a given world pixel position.
 * Higher Y = "Closer" to camera = higher depth.
 */
export function isoDepth(pixelX, pixelY) {
  return pixelY;
}
