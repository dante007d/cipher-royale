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
  controls.zoomSpeed  = 0.8;
  controls.minZoom    = 0.85;  // More zoomed in, hides map edges
  controls.maxZoom    = 2.2;   // Don't zoom too far into models

  // Disable panning (keep the arena centered)
  controls.enablePan = false;

  // CLAMP: Prevent camera from going underground or too flat
  // Polar angle = 0 is straight up, PI/2 is horizon
  controls.minPolarAngle = 0.4;           // ~23° — stay more top-down
  controls.maxPolarAngle = 1.05;          // ~60° — strictly prevent ground clipping/horizon gaps

  // Optional: limit azimuth to prevent full 360° spin (disabled by default)
  // controls.minAzimuthAngle = -Math.PI / 2;
  // controls.maxAzimuthAngle =  Math.PI / 2;

  controls.update();

  return controls;
}
