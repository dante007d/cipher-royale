// /server/middleware/EventQueue.js
// When a player sends events faster than the server can process them,
// queue events instead of processing synchronously — prevents stack overflow.
// Max queue depth per player: 8 events. Older events dropped if exceeded.

export class PlayerEventQueue {
  constructor() {
    // Map<playerId, { queue: Array, processing: bool }>
    this.queues  = new Map();
    this.MAX_Q   = 8;
  }

  // Enqueue an event for a player. Returns false if queue full (drop event).
  enqueue(playerId, eventFn) {
    if (!this.queues.has(playerId)) {
      this.queues.set(playerId, { queue: [], processing: false });
    }
    const entry = this.queues.get(playerId);

    if (entry.queue.length >= this.MAX_Q) {
      // Queue full — drop oldest unprocessed event (not the new one)
      entry.queue.shift();
      console.warn(`[EventQueue] Player ${playerId} queue overflow — dropping oldest event`);
    }

    entry.queue.push(eventFn);
    this._drain(playerId);
    return true;
  }

  async _drain(playerId) {
    const entry = this.queues.get(playerId);
    if (!entry || entry.processing) return;

    entry.processing = true;
    while (entry.queue.length > 0) {
      const fn = entry.queue.shift();
      try {
        await fn();
      } catch (err) {
        console.error(`[EventQueue] Error processing event for ${playerId}:`, err.message);
        // Continue draining — one error does not block the queue
      }
    }
    entry.processing = false;
  }

  remove(playerId) {
    this.queues.delete(playerId);
  }
}

export const eventQueue = new PlayerEventQueue();
