import { io } from 'socket.io-client';

class SocketService {
  constructor() {
    this.socket = null;
    this.listeners = new Map();
  }

  connect(serverUrl) {
    if (this.socket && this.socket.connected) return this;
    this.socket = io(serverUrl || window.location.origin, {
      reconnection: false,
      transports: ['websocket', 'polling'],
    });
    return this;
  }

  emit(event, data) {
    if (this.socket) this.socket.emit(event, data);
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
