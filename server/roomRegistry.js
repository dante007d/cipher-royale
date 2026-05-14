const SAFE_CHARS = 'ABCDEFGHJKMNPQRSTUVWXYZ23456789';

class RoomRegistry {
  constructor() {
    this.rooms = new Map();
    
    // AUTOMATIC CLEANUP: Every 15 minutes, remove rooms older than 4 hours
    setInterval(() => {
      const now = Date.now();
      const expiry = 4 * 60 * 60 * 1000;
      for (const [code, room] of this.rooms) {
        if (now - room.createdAt > expiry || room.state === 'ENDED') {
          console.log(`[Registry] Cleaning up room: ${code}`);
          this.rooms.delete(code);
        }
      }
    }, 15 * 60 * 1000);
  }

  generateRoomCode() {
    let code = '';
    for (let i = 0; i < 6; i++) {
      code += SAFE_CHARS[Math.floor(Math.random() * SAFE_CHARS.length)];
    }
    if (this.rooms.has(code)) return this.generateRoomCode();
    return code;
  }

  create(settings = {}) {
    const code = this.generateRoomCode();
    const room = {
      code,
      state: 'WAITING', // WAITING | COUNTDOWN | ACTIVE | PAUSED | ENDED
      players: [],
      settings: {
        durationSeconds: settings.durationSeconds || 300,
        questionBankId: settings.questionBankId || 'questions_default.json',
        ...settings,
      },
      createdAt: Date.now(),
    };
    this.rooms.set(code, room);
    return room;
  }

  get(code) {
    return this.rooms.get(code);
  }

  has(code) {
    return this.rooms.has(code);
  }

  delete(code) {
    return this.rooms.delete(code);
  }

  getAll() {
    return Array.from(this.rooms.values());
  }

  getActive() {
    return this.getAll().filter(r => r.state === 'ACTIVE' || r.state === 'PAUSED');
  }
}

export default new RoomRegistry();
