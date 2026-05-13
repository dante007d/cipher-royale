const SAFE_CHARS = 'ABCDEFGHJKMNPQRSTUVWXYZ23456789';

class RoomRegistry {
  constructor() {
    this.rooms = new Map();
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
