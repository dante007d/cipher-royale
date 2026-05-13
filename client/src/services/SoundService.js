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

  startAmbience() {
    if (this.ambienceStarted) return;
    this.init();
    this.ambienceStarted = true;

    // 1. RAIN NOISE (White Noise + Filter)
    const bufferSize = 2 * this.ctx.sampleRate;
    const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      output[i] = Math.random() * 2 - 1;
    }

    const whiteNoise = this.ctx.createBufferSource();
    whiteNoise.buffer = noiseBuffer;
    whiteNoise.loop = true;

    const rainFilter = this.ctx.createBiquadFilter();
    rainFilter.type = 'lowpass';
    rainFilter.frequency.value = 1000;

    const rainGain = this.ctx.createGain();
    rainGain.gain.value = 0.05; // Soft rain

    whiteNoise.connect(rainFilter);
    rainFilter.connect(rainGain);
    rainGain.connect(this.ctx.destination);
    whiteNoise.start();

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

    // 3. SPARSE PIANO (Simple sine wave notes)
    const playNote = () => {
      if (!this.ambienceStarted) return;
      const notes = [261.63, 293.66, 329.63, 392.00, 440.00]; // Pentatonic C
      const freq = notes[Math.floor(Math.random() * notes.length)];
      
      const osc = this.ctx.createOscillator();
      const g = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      
      g.gain.setValueAtTime(0, this.ctx.currentTime);
      g.gain.linearRampToValueAtTime(0.05, this.ctx.currentTime + 1.0);
      g.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 4.0);
      
      osc.connect(g);
      g.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 4.0);
      
      setTimeout(playNote, 5000 + Math.random() * 10000);
    };
    playNote();

    // 4. BIRD CHIRPS
    const playChirp = () => {
      if (!this.ambienceStarted) return;
      const osc = this.ctx.createOscillator();
      const g = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(2000 + Math.random() * 1000, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(3000 + Math.random() * 500, this.ctx.currentTime + 0.1);
      
      g.gain.setValueAtTime(0.02, this.ctx.currentTime);
      g.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.1);
      
      osc.connect(g);
      g.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.1);
      
      setTimeout(playChirp, 10000 + Math.random() * 20000);
    };
    playChirp();
  }
}

export default new SoundService();
