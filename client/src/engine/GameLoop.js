import { updateTorchFlicker } from './Lighting.js';
import { updateEnvironment } from '../world/Environment.js';
import SoundService from '../services/SoundService.js';

export class GameLoop {
  constructor(renderer, css2dRenderer, composer, scene, camera, systems) {
    this.renderer     = renderer;
    this.css2d        = css2dRenderer;
    this.composer     = composer;
    this.scene        = scene;
    this.camera       = camera;
    this.systems      = systems; // { troopPool, particles, lighting, ground, towers, vignettePass }

    this.lastTime     = 0;
    this.cameraShake  = { active: false, intensity: 0, remaining: 0 };
    this.dangerPulse  = 0; // 0–1, set when Main Tower HP < 30%
    this.running      = false;
  }

  start() {
    this.running = true;
    requestAnimationFrame(t => this._tick(t));

    // Start atmospheric ambience (Rain, Wind, Piano)
    SoundService.startAmbience();

    // Camera shake listener
    window.addEventListener('camera_shake', ({ detail }) => {
      this.cameraShake = {
        active:    true,
        intensity: detail.intensity,
        remaining: detail.duration
      };
    });
  }

  stop() {
    this.running = false;
  }

  _tick(time) {
    if (!this.running) return;
    const delta = (time - this.lastTime) / 1000;
    this.lastTime = time;

    // 0. Update environment animations (clouds + cipher particles)
    if (this.systems.environment) updateEnvironment(this.systems.environment, delta, time / 1000);

    // 1. Update troop animations
    if (this.systems.troopPool) this.systems.troopPool.updateAll(delta);

    // 1.5. Update particle systems (rain, ripples, splashes)
    if (this.systems.particles) this.systems.particles.update(delta);

    // --- RANDOM AMBIENT LIGHTNING ---
    if (Math.random() > 0.995) { // Reduced frequency for performance
      this.systems.particles.emitAmbientLightning();
    }

    // 2. Flicker torch lights & lightning
    if (this.systems.lighting) updateTorchFlicker(this.systems.lighting, time / 1000);

    // 3. Animate ground center line pulse
    if (this.systems.ground) {
      if (this.systems.ground.centerLineMat) this.systems.ground.centerLineMat.uniforms.time.value = time / 1000;
      if (this.systems.ground.groundMaterial) this.systems.ground.groundMaterial.uniforms.time.value = time / 1000;
    }

    // 4. Flag wave animation
    if (this.systems.towers) {
      this.systems.towers.forEach(t => {
        const flag = t.userData.flag;
        if (flag) flag.position.x = 0.25 + Math.sin(time * 0.003) * 0.05;
      });
    }

    // 5. Cinematic Camera: Handheld & Impact Shake
    let shakeX = 0, shakeY = 0;
    if (this.cameraShake.active) {
      this.cameraShake.remaining -= delta * 1000;
      shakeX = (Math.random() - 0.5) * this.cameraShake.intensity;
      shakeY = (Math.random() - 0.5) * this.cameraShake.intensity * 0.5;
      if (this.cameraShake.remaining <= 0) this.cameraShake.active = false;
    }

    // Subtle constant handheld breathing (Perlin-like)
    const breatheX = Math.sin(time * 0.0012) * 0.05;
    const breatheY = Math.cos(time * 0.0008) * 0.03;
    
    // Handled in the render section below to prevent drift

    // 6. Danger pulse (vignette shader uniform)
    if (this.systems.vignettePass) {
      this.systems.vignettePass.uniforms.dangerPulse.value =
        this.dangerPulse * (0.5 + Math.sin(time * 0.005) * 0.5);
    }

    // 6.5. Update camera controls (damping)
    if (this.systems.cameraControls) this.systems.cameraControls.update();

    // 6.6. Update Lane Input (tactical pulse)
    if (this.systems.laneInput) this.systems.laneInput.update(time / 1000);

    // Apply offsets
    const totalShakeX = (shakeX + breatheX);
    const totalShakeY = (shakeY + breatheY);
    this.camera.position.x += totalShakeX;
    this.camera.position.y += totalShakeY;

    // 7. Render via EffectComposer (includes bloom + vignette)
    if (this.composer) this.composer.render(delta);

    // 8. Render CSS2D HP bars on top
    if (this.css2d) this.css2d.render(this.scene, this.camera);

    // 9. Revert offsets to prevent drift
    this.camera.position.x -= totalShakeX;
    this.camera.position.y -= totalShakeY;

    requestAnimationFrame(t => this._tick(t));
  }

  setDangerMode(active) {
    this.dangerPulse = active ? 1.0 : 0.0;
  }
}
