import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

export function createIsoCamera(width, height) {
  const FRUSTUM = 12;
  const aspect  = width / height;

  const camera = new THREE.OrthographicCamera(
    -FRUSTUM * aspect,
     FRUSTUM * aspect,
     FRUSTUM,
    -FRUSTUM,
    0.1,
    1000
  );

  // True isometric starting position
  camera.position.set(15, 15, 15);
  camera.lookAt(0, 0, 0);

  return camera;
}

export function resizeCamera(camera, width, height) {
  const FRUSTUM = 12;
  const aspect  = width / height;
  camera.left   = -FRUSTUM * aspect;
  camera.right  =  FRUSTUM * aspect;
  camera.top    =  FRUSTUM;
  camera.bottom = -FRUSTUM;
  camera.updateProjectionMatrix();
}

/**
 * Creates OrbitControls that let the player rotate the camera freely
 * but clamps the polar angle so the camera never goes below the ground.
 */
export function createCameraControls(camera, domElement) {
  const controls = new OrbitControls(camera, domElement);

  // Orbit target = center of the arena
  controls.target.set(0, 0, 0);

  // Smooth damping for premium feel
  controls.enableDamping = true;
  controls.dampingFactor = 0.08;

  // Allow rotation
  controls.enableRotate = true;
  controls.rotateSpeed  = 0.6;

  // Allow zoom (scroll wheel changes frustum for ortho camera)
  controls.enableZoom = true;
  controls.zoomSpeed  = 1.0;
  controls.minZoom    = 0.5;   // most zoomed out
  controls.maxZoom    = 2.5;   // most zoomed in

  // Disable panning (keep the arena centered)
  controls.enablePan = false;

  // CLAMP: Prevent camera from going underground
  // Polar angle = 0 is straight up, PI/2 is horizon, PI is straight down
  controls.minPolarAngle = 0.3;           // ~17° — don't go fully top-down
  controls.maxPolarAngle = Math.PI / 2.1; // ~85° — never cross the horizon / go underground

  // Optional: limit azimuth to prevent full 360° spin (disabled by default)
  // controls.minAzimuthAngle = -Math.PI / 2;
  // controls.maxAzimuthAngle =  Math.PI / 2;

  controls.update();

  return controls;
}
