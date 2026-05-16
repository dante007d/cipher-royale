const SAFE_CHARS = 'ABCDEFGHJKMNPQRSTUVWXYZ23456789';

class RoomRegistry {
  constructor() {
    this.rooms      = new Map();
    this.MAX_ROOMS  = 50;         // hard cap — prevents memory exhaustion
    this.ROOM_TTL   = 30 * 60000; // 30 minutes max lifetime per room

    // Scan for zombie rooms every 5 minutes
    setInterval(() => this._reapZombies(), 5 * 60000);
  }

  generateRoomCode() {
    let code = '';
    for (let i = 0; i < 6; i++) {
      code += SAFE_CHARS[Math.floor(Math.random() * SAFE_CHARS.length)];
    }
    if (this.rooms.has(code)) return this.generateRoomCode();
    return code;
  }

  create(code, room) {
    if (this.rooms.size >= this.MAX_ROOMS) {
      // Find and destroy the oldest ended room to make space
      const oldest = [...this.rooms.entries()]
        .filter(([, r]) => r.state === 'ENDED')
        .sort(([, a], [, b]) => a.createdAt - b.createdAt)[0];

      if (oldest) {
        this.delete(oldest[0]);
      } else {
        throw new Error('Server at room capacity. Try again later.');
      }
    }

    room.createdAt = Date.now();
    this.rooms.set(code, room);
    return room;
  }

  get(code) { return this.rooms.get(code) ?? null; }
  has(code) { return this.rooms.has(code); }

  delete(code) {
    const room = this.rooms.get(code);
    if (room) {
      // Cancel any running tick before deleting
      if (room.tickInterval) {
        clearInterval(room.tickInterval);
        room.tickInterval = null;
      }
    }
    this.rooms.delete(code);
  }

  // Remove zombie rooms: ended > 5min ago, or active > 30min (stuck)
  _reapZombies() {
    const now = Date.now();
    for (const [code, room] of this.rooms) {
      const age = now - room.createdAt;

      if (room.state === 'ENDED' && age > 5 * 60000) {
        console.log(`[Registry] Reaping ended room ${code}`);
        this.delete(code);
        continue;
      }

      if (age > this.ROOM_TTL) {
        console.warn(`[Registry] Reaping zombie room ${code} (age: ${Math.round(age/60000)}min)`);
        try {
          // If we had io access here we would emit, but we don't.
          // The clients will handle it when the room stops emitting state.
        } catch (e) { /* ignore */ }
        this.delete(code);
      }
    }
  }

  getAll() { return Array.from(this.rooms.values()); }
  getActive() { return this.getAll().filter(r => r.state === 'ACTIVE' || r.state === 'PAUSED'); }
  get count() { return this.rooms.size; }
}

export default new RoomRegistry();
