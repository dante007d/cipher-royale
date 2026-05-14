class SoundService {
  constructor() {
    this.ctx = null;
    this.masterVolume = 0.3;
    this.ambienceStarted = false;
  }

  init() {
    if (this.ctx) return;
    this.ctx = new (window.AudioContext || window.webkitAudioContext)();
  }

  playDeploy() {
    this.init();
    const now = this.ctx.currentTime;
    
    // 1. Tactical Hum
    const osc1 = this.ctx.createOscillator();
    const g1 = this.ctx.createGain();
    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(110, now);
    osc1.frequency.exponentialRampToValueAtTime(55, now + 0.4);
    g1.gain.setValueAtTime(0, now);
    g1.gain.linearRampToValueAtTime(this.masterVolume, now + 0.05);
    g1.gain.exponentialRampToValueAtTime(0.001, now + 0.5);
    osc1.connect(g1);
    g1.connect(this.ctx.destination);
    osc1.start();
    osc1.stop(now + 0.5);

    // 2. Crystalline Sparkle
    const osc2 = this.ctx.createOscillator();
    const g2 = this.ctx.createGain();
    osc2.type = 'triangle';
    osc2.frequency.setValueAtTime(880, now);
    osc2.frequency.exponentialRampToValueAtTime(1760, now + 0.1);
    g2.gain.setValueAtTime(0, now);
    g2.gain.linearRampToValueAtTime(this.masterVolume * 0.3, now + 0.02);
    g2.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
    osc2.connect(g2);
    g2.connect(this.ctx.destination);
    osc2.start();
    osc2.stop(now + 0.3);
  }

  playDeath() {
    this.init();
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(220, this.ctx.currentTime);
    osc.frequency.linearRampToValueAtTime(50, this.ctx.currentTime + 0.2);

    gain.gain.setValueAtTime(this.masterVolume * 0.5, this.ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.01, this.ctx.currentTime + 0.2);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start();
    osc.stop(this.ctx.currentTime + 0.2);
  }

  playTowerHit() {
    this.init();
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(110, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(40, this.ctx.currentTime + 0.3);

    gain.gain.setValueAtTime(this.masterVolume, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.3);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start();
    osc.stop(this.ctx.currentTime + 0.3);
  }

  playCorrect() {
    this.init();
    const now = this.ctx.currentTime;
    [523.25, 659.25, 783.99].forEach((freq, i) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + i * 0.05);
      gain.gain.setValueAtTime(this.masterVolume * 0.5, now + i * 0.05);
      gain.gain.exponentialRampToValueAtTime(0.01, now + i * 0.05 + 0.2);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now + i * 0.05);
      osc.stop(now + i * 0.05 + 0.2);
    });
  }

  playWrong() {
    this.init();
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'square';
    osc.frequency.setValueAtTime(150, this.ctx.currentTime);
    osc.frequency.linearRampToValueAtTime(100, this.ctx.currentTime + 0.4);
    gain.gain.setValueAtTime(this.masterVolume * 0.3, this.ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.01, this.ctx.currentTime + 0.4);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.4);
  }

  playNewQuestion() {
    this.init();
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const g = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(440, now);
    osc.frequency.exponentialRampToValueAtTime(880, now + 0.1);
    g.gain.setValueAtTime(0, now);
    g.gain.linearRampToValueAtTime(this.masterVolume * 0.2, now + 0.05);
    g.gain.exponentialRampToValueAtTime(0.001, now + 0.2);
    osc.connect(g);
    g.connect(this.ctx.destination);
    osc.start();
    osc.stop(now + 0.2);
  }

  startAmbience() {
    if (this.ambienceStarted) return;
    this.init();
    this.ambienceStarted = true;

    // 1. RAIN NOISE (REMOVED)
    const noiseBuffer = this.ctx.createBuffer(1, 2 * this.ctx.sampleRate, this.ctx.sampleRate);
    
    // 2. WIND (Lower Frequency Noise modulation)
    const windFilter = this.ctx.createBiquadFilter();
    windFilter.type = 'lowpass';
    windFilter.frequency.value = 200;

    const windGain = this.ctx.createGain();
    windGain.gain.value = 0.02;

    const windSource = this.ctx.createBufferSource();
    windSource.buffer = noiseBuffer;
    windSource.loop = true;

    windSource.connect(windFilter);
    windFilter.connect(windGain);
    windGain.connect(this.ctx.destination);
    windSource.start();

    // 3. DISTANT WAR HORNS (Deep brassy blasts)
    const playHorn = () => {
      if (!this.ambienceStarted) return;
      const osc = this.ctx.createOscillator();
      const g = this.ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(80, this.ctx.currentTime);
      osc.frequency.linearRampToValueAtTime(70, this.ctx.currentTime + 2.0);
      
      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.value = 400;
      
      g.gain.setValueAtTime(0, this.ctx.currentTime);
      g.gain.linearRampToValueAtTime(0.08, this.ctx.currentTime + 0.5);
      g.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 3.0);
      
      osc.connect(filter);
      filter.connect(g);
      g.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 3.0);
      
      setTimeout(playHorn, 15000 + Math.random() * 20000);
    };
    playHorn();

    // 4. SCREAMING WINDS & CORRUPTION
    const playCaelidAmbience = () => {
      if (!this.ambienceStarted) return;
      
      // 4a. Hostile Wind Gust
      const osc = this.ctx.createOscillator();
      const g = this.ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(100 + Math.random() * 50, this.ctx.currentTime);
      
      const filter = this.ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.value = 1000 + Math.sin(this.ctx.currentTime) * 500;
      
      g.gain.setValueAtTime(0, this.ctx.currentTime);
      g.gain.linearRampToValueAtTime(0.015, this.ctx.currentTime + 1.0);
      g.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 4.0);
      
      osc.connect(filter);
      filter.connect(g);
      g.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 4.0);
      
      setTimeout(playCaelidAmbience, 6000 + Math.random() * 10000);
    };
    playCaelidAmbience();

    // 5. LIGHTNING STRIKE EVENT LISTENER
    window.addEventListener('lightning_strike', () => {
      if (!this.ambienceStarted) return;
      
      const osc = this.ctx.createOscillator();
      const g = this.ctx.createGain();
      osc.type = 'square';
      osc.frequency.setValueAtTime(40 + Math.random()*20, this.ctx.currentTime);
      
      g.gain.setValueAtTime(1.2, this.ctx.currentTime); // Increased from 0.6
      g.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 4.0); // Longer decay
      
      const lowPass = this.ctx.createBiquadFilter();
      lowPass.type = 'lowpass';
      lowPass.frequency.value = 500;

      osc.connect(lowPass);
      lowPass.connect(g);
      g.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 3.0);
    });
  }
}

export default new SoundService();
