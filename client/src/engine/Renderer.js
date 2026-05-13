import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass }     from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { ShaderPass }     from 'three/addons/postprocessing/ShaderPass.js';
import { CSS2DRenderer }  from 'three/addons/renderers/CSS2DRenderer.js';

export function createRenderer(canvas) {
  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias:  true,
    powerPreference: 'high-performance'
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.shadowMap.enabled  = true;
  renderer.shadowMap.type     = THREE.PCFShadowMap; // Fixed deprecated warning
  renderer.toneMapping        = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.5;
  renderer.outputColorSpace   = THREE.SRGBColorSpace;
  return renderer;
}

export function createCSS2DRenderer() {
  const css2d = new CSS2DRenderer();
  css2d.setSize(window.innerWidth, window.innerHeight);
  css2d.domElement.style.position = 'absolute';
  css2d.domElement.style.top      = '0';
  css2d.domElement.style.pointerEvents = 'none'; // click-through
  document.body.appendChild(css2d.domElement);
  return css2d;
}

export function createComposer(renderer, scene, camera) {
  const composer = new EffectComposer(renderer);

  // Base render pass
  composer.addPass(new RenderPass(scene, camera));

  // Bloom — glowing HP bars, magic, explosions
  const bloom = new UnrealBloomPass(
    new THREE.Vector2(window.innerWidth, window.innerHeight),
    0.4,   // strength (slightly reduced)
    0.4,   // radius
    0.85   // threshold
  );
  composer.addPass(bloom);

  // REMOVED VIGNETTE PASS to eliminate "optical transparent sphere" visual
  // and improve general clarity across the whole arena.
  const vignettePass = { uniforms: { dangerPulse: { value: 0 } } }; 

  return { composer, vignettePass };
}
