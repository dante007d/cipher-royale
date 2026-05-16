import { io } from 'socket.io-client';

class SocketService {
  constructor() {
    this.socket = null;
    this.listeners = new Map();
    this.reconnectAttempts = 0;
    this.MAX_RECONNECTS = 5;
  }

  connect(serverUrl) {
    if (this.socket && this.socket.connected) return this;
    
    // Hardened config: Enable reconnections, but with backoff and jitter
    this.socket = io(serverUrl || window.location.origin, {
      reconnection: true,
      reconnectionAttempts: this.MAX_RECONNECTS,
      reconnectionDelay: 1000,
      reconnectionDelayMax: 5000,
      randomizationFactor: 0.5,
      transports: ['websocket', 'polling'], // Fallback available
    });

    this.socket.on('connect', () => {
      console.log('✅ [Socket] Connected:', this.socket.id);
      this.reconnectAttempts = 0;
      window.dispatchEvent(new Event('socket_connected'));
    });

    this.socket.on('disconnect', (reason) => {
      console.warn('⚠️ [Socket] Disconnected:', reason);
      window.dispatchEvent(new CustomEvent('socket_disconnected', { detail: { reason } }));
    });

    this.socket.on('connect_error', (err) => {
      console.error('🚨 [Socket] Connection Error:', err.message);
      this.reconnectAttempts++;
      if (this.reconnectAttempts >= this.MAX_RECONNECTS) {
        window.dispatchEvent(new Event('socket_failed_terminal'));
      }
    });

    // ── GLOBAL RATE LIMIT LISTENER ─────────────────────────────
    this.socket.on('rate_limited', (data) => {
      console.warn(`[RateLimit] Blocked on ${data.event}. Wait ${data.retryAfterMs}ms`);
      // Dispatch global event so components (like HUD or buttons) can react
      window.dispatchEvent(new CustomEvent('rate_limited', { detail: data }));
    });

    return this;
  }

  emit(event, data) {
    if (this.socket && this.socket.connected) {
      this.socket.emit(event, data);
    } else {
      console.warn(`[Socket] Cannot emit '${event}' — disconnected.`);
    }
  }

  on(event, handler) {
    if (!this.socket) return;
    this.socket.on(event, handler);
    if (!this.listeners.has(event)) this.listeners.set(event, []);
    this.listeners.get(event).push(handler);
  }

  off(event) {
    if (!this.socket) return;
    this.socket.off(event);
    this.listeners.delete(event);
  }

  cleanup() {
    if (!this.socket) return;
    this.listeners.forEach((_, event) => this.socket.off(event));
    this.listeners.clear();
  }

  disconnect() {
    this.cleanup();
    if (this.socket) {
      this.socket.disconnect();
      this.socket = null;
    }
  }

  get connected() {
    return this.socket && this.socket.connected;
  }

  get id() {
    return this.socket ? this.socket.id : null;
  }
}

export default new SocketService();
