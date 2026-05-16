// /server/middleware/RateLimiter.js
// Per-player, per-event-type rate limiting.
// Applied to EVERY socket event handler before any game logic runs.

export class RateLimiter {
  constructor() {
    // Map<playerId, Map<eventType, { count, windowStart, blocked, blockUntil }>>
    this.records = new Map();

    // Config: max events per window per event type
    this.LIMITS = {
      deploy_troop:    { maxPerWindow: 4,   windowMs: 1500, blockMs: 3000  },
      submit_answer:   { maxPerWindow: 6,   windowMs: 2000, blockMs: 2000  },
      join_room:       { maxPerWindow: 3,   windowMs: 10000, blockMs: 30000 },
      create_room:     { maxPerWindow: 2,   windowMs: 30000, blockMs: 60000 },
      rejoin_room:     { maxPerWindow: 5,   windowMs: 10000, blockMs: 10000 },
      request_question:{ maxPerWindow: 10,  windowMs: 5000, blockMs: 5000  },
      admin_pause:     { maxPerWindow: 10,  windowMs: 5000, blockMs: 1000  },
      // Catch-all for any unlisted event
      DEFAULT:         { maxPerWindow: 20,  windowMs: 1000, blockMs: 2000  }
    };

    // Clean stale records every 60 seconds
    setInterval(() => this._cleanup(), 60000);
  }

  // Returns { allowed: bool, retryAfterMs: number }
  check(playerId, eventType) {
    const config = this.LIMITS[eventType] || this.LIMITS.DEFAULT;
    const now    = Date.now();

    if (!this.records.has(playerId)) {
      this.records.set(playerId, new Map());
    }
    const playerRecords = this.records.get(playerId);

    if (!playerRecords.has(eventType)) {
      playerRecords.set(eventType, {
        count:       0,
        windowStart: now,
        blocked:     false,
        blockUntil:  0
      });
    }

    const rec = playerRecords.get(eventType);

    // ── BLOCK CHECK ────────────────────────────────────────────
    if (rec.blocked) {
      if (now < rec.blockUntil) {
        return { allowed: false, retryAfterMs: rec.blockUntil - now };
      }
      // Block expired — reset
      rec.blocked     = false;
      rec.count       = 0;
      rec.windowStart = now;
    }

    // ── WINDOW RESET ──────────────────────────────────────────
    if (now - rec.windowStart > config.windowMs) {
      rec.count       = 0;
      rec.windowStart = now;
    }

    // ── COUNT CHECK ───────────────────────────────────────────
    rec.count++;
    if (rec.count > config.maxPerWindow) {
      rec.blocked    = true;
      rec.blockUntil = now + config.blockMs;
      console.warn(`[RateLimit] Player ${playerId} blocked on ${eventType}`);
      return { allowed: false, retryAfterMs: config.blockMs };
    }

    return { allowed: true, retryAfterMs: 0 };
  }

  // Remove player from rate limiter on disconnect
  remove(playerId) {
    this.records.delete(playerId);
  }

  _cleanup() {
    const now = Date.now();
    for (const [pid, events] of this.records) {
      let hasActive = false;
      for (const [, rec] of events) {
        if (now - rec.windowStart < 120000) { hasActive = true; break; }
      }
      if (!hasActive) this.records.delete(pid);
    }
  }
}

// Singleton
export const rateLimiter = new RateLimiter();
