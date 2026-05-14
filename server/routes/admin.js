import { Router } from 'express';
import roomRegistry from '../roomRegistry.js';
import GameRoom from '../game/GameRoom.js';
import { stopGameLoop } from '../game/GameLoop.js';

const ADMIN_SECRET = process.env.ADMIN_SECRET || 'cipherclash2024';

export default function adminRoutes(io) {
  const router = Router();

  // Auth middleware
  function auth(req, res, next) {
    const secret = req.headers['x-admin-secret'] || req.body?.adminSecret;
    if (secret !== ADMIN_SECRET) return res.status(401).json({ error: 'Unauthorized' });
    next();
  }

  // List all rooms
  router.get('/rooms', auth, (req, res) => {
    console.log(`[Admin] Fetching all rooms...`);
    const rooms = roomRegistry.getAll().map(r => ({
      code: r.code,
      state: r.state,
      winner: r.winner,
      players: r.players?.map(p => p.name) || [],
      timeRemaining: r.timeRemaining,
      duration: r.settings.durationSeconds,
      createdAt: r.createdAt,
    }));
    console.log(`[Admin] Found ${rooms.length} rooms.`);
    res.json({ rooms });
  });

  // Create room
  router.post('/create-room', auth, (req, res) => {
    const { settings } = req.body;
    const code = roomRegistry.generateRoomCode();
    const room = new GameRoom(code, settings || {});
    roomRegistry.rooms.set(code, room);
    res.json({ roomCode: code });
  });

  // Pause room
  router.post('/pause-room', auth, (req, res) => {
    const { roomCode } = req.body;
    const room = roomRegistry.get(roomCode);
    if (!room) return res.status(404).json({ error: 'Room not found' });
    if (room.state !== 'ACTIVE') return res.status(400).json({ error: 'Room not active' });
    room.state = 'PAUSED';
    io.to(roomCode).emit('game_paused', { message: 'Game Paused by Admin' });
    res.json({ success: true });
  });

  // Resume room
  router.post('/resume-room', auth, (req, res) => {
    const { roomCode } = req.body;
    const room = roomRegistry.get(roomCode);
    if (!room) return res.status(404).json({ error: 'Room not found' });
    if (room.state !== 'PAUSED') return res.status(400).json({ error: 'Room not paused' });
    room.state = 'ACTIVE';
    io.to(roomCode).emit('game_resumed', { message: 'Game Resumed' });
    res.json({ success: true });
  });

  // End room
  router.post('/end-room', auth, (req, res) => {
    const { roomCode } = req.body;
    const room = roomRegistry.get(roomCode);
    if (!room) return res.status(404).json({ error: 'Room not found' });
    stopGameLoop(room);
    room.state = 'ENDED';
    io.to(roomCode).emit('game_over', {
      winner: 'draw',
      reason: 'admin_ended',
      finalState: room.buildStateSnapshot ? room.buildStateSnapshot() : {},
      stats: room.stats || {},
    });
    res.json({ success: true });
  });

  return router;
}
