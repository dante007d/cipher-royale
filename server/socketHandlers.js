import roomRegistry from './roomRegistry.js';
import GameRoom from './game/GameRoom.js';
import { startGameLoop, stopGameLoop } from './game/GameLoop.js';
import { spawnTroopGroup, validateDeployment } from './game/TroopManager.js';
import QuestionManager from './game/QuestionManager.js';
import { GAME_CONFIG } from './shared_ref.js';
import { rateLimiter } from './middleware/RateLimiter.js';
import { eventQueue } from './middleware/EventQueue.js';
import { InputValidator } from './validation/InputValidator.js';

const questionManager = new QuestionManager();

// ── RATE GUARD WRAPPER ──────────────────────────────────────────
function rateGuard(socket, eventType, handler) {
  return async (raw) => {
    // 1. Rate Limit Check
    const result = rateLimiter.check(socket.id, eventType);
    if (!result.allowed) {
      socket.emit('rate_limited', {
        event:        eventType,
        retryAfterMs: result.retryAfterMs,
        message:      `Slow down. Wait ${Math.ceil(result.retryAfterMs / 1000)}s.`
      });
      return; // DROP the event
    }

    // 2. Enqueue Event Processing
    eventQueue.enqueue(socket.id, async () => {
      try {
        await handler(raw);
      } catch (err) {
        console.error(`[SocketHandler] ${eventType} error for ${socket.id}:`, err.message);
        socket.emit('server_error', { event: eventType, message: 'Server error. Action ignored.' });
      }
    });
  };
}

export function registerSocketHandlers(io) {
  io.on('connection', (socket) => {
    console.log(`[Socket] Connected: ${socket.id}`);

    // ── CREATE ROOM ───────────────────────────────
    socket.on('create_room', rateGuard(socket, 'create_room', async (raw) => {
      console.log(`[Room] Create request from socket: ${socket.id}`);
      const settings = raw?.settings || {};
      const code = roomRegistry.generateRoomCode();
      const room = roomRegistry.create(code, new GameRoom(code, settings));
      console.log(`[Room] Created: ${code} (Duration: ${room.settings.durationSeconds}s)`);
      socket.emit('room_created', { roomCode: code });
    }));

    // ── START DEMO MODE ───────────────────────────
    socket.on('start_demo_mode', rateGuard(socket, 'join_room', async (raw) => {
      const playerName = String(raw?.playerName || 'Player').slice(0, 20);
      console.log(`[Demo] Start request from ${playerName} (${socket.id})`);
      
      const code = `DEMO-${Math.random().toString(36).substring(2, 5).toUpperCase()}`;
      const room = roomRegistry.create(code, new GameRoom(code, { durationSeconds: 600 }));

      // Add Human Player
      const player = {
        socketId: socket.id,
        name: playerName,
        index: 0,
        role: 'playerA',
        connected: true,
        tokens: 10,
        deployCooldown: 0,
        questionState: questionManager.createPlayerState(),
      };
      room.players.push(player);
      socket.join(code);

      // Add Bot Player
      const bot = {
        socketId: 'BOT_SOCKET',
        name: 'BOT',
        index: 1,
        role: 'playerB',
        connected: true,
        tokens: 5,
        deployCooldown: 0,
        isBot: true,
        botAnswerTimer: 0,
      };
      room.players.push(bot);

      socket.emit('join_result', { success: true, roomCode: code, playerIndex: 0 });
      
      setTimeout(() => {
        if (!roomRegistry.has(code)) return;
        room.state = 'COUNTDOWN';
        const readyData = { playerA: player.name, playerB: bot.name };
        io.to(code).emit('room_ready', readyData);
        
        setTimeout(() => {
          if (room.state === 'COUNTDOWN') {
            startGameLoop(room, io);
            const q = questionManager.getNextQuestion(player.questionState);
            if (q) socket.emit('new_question', q);
          }
        }, 3500);
      }, 500);
    }));

    // ── JOIN ROOM ─────────────────────────────────
    socket.on('join_room', rateGuard(socket, 'join_room', async (raw) => {
      const v = InputValidator.joinRoom(raw);
      if (!v.valid) return socket.emit('join_result', { success: false, error: v.error });
      const { roomCode, playerName } = v.data;

      let room = roomRegistry.get(roomCode);
      if (!room) {
        room = roomRegistry.create(roomCode, new GameRoom(roomCode, {}));
      }

      if (room.state !== 'WAITING' && room.state !== 'COUNTDOWN') {
        return socket.emit('join_result', { success: false, error: 'Game already in progress' });
      }
      if (room.players.length >= 2) {
        return socket.emit('join_result', { success: false, error: 'Room is full' });
      }
      if (room.players.some(p => p.name === playerName)) {
        return socket.emit('join_result', { success: false, error: 'Name already taken' });
      }

      const playerIndex = room.players.length;
      const player = {
        socketId: socket.id,
        name: playerName,
        index: playerIndex,
        role: playerIndex === 0 ? 'playerA' : 'playerB',
        connected: true,
        tokens: 5,
        deployCooldown: 0,
        questionState: questionManager.createPlayerState(),
      };

      room.players.push(player);
      socket.join(roomCode);

      socket.emit('join_result', { success: true, roomCode, playerIndex });
      console.log(`[Room ${roomCode}] ${playerName} joined as Player ${playerIndex === 0 ? 'A' : 'B'}`);

      if (room.players.length === 2) {
        room.state = 'COUNTDOWN';
        io.to(roomCode).emit('room_ready', {
          playerA: room.players[0].name,
          playerB: room.players[1].name,
        });

        setTimeout(() => {
          if (room.state === 'COUNTDOWN') {
            startGameLoop(room, io);
            room.players.forEach(p => {
              const q = questionManager.getNextQuestion(p.questionState);
              if (q) {
                const playerSocket = io.sockets.sockets.get(p.socketId);
                if (playerSocket) playerSocket.emit('new_question', q);
              }
            });
          }
        }, 3500);
      }
    }));

    // ── DEPLOY TROOP ──────────────────────────────
    socket.on('deploy_troop', rateGuard(socket, 'deploy_troop', async (raw) => {
      const v = InputValidator.deployTroop(raw);
      if (!v.valid) return; // Drop invalid
      const { roomCode, cardType, lane } = v.data;

      const room = roomRegistry.get(roomCode);
      if (!room || room.state !== 'ACTIVE') return;

      const player = room.players.find(p => p.socketId === socket.id);
      if (!player) return;

      const validation = validateDeployment(player, cardType);
      if (!validation.valid) return;

      player.tokens -= validation.cost;
      player.deployCooldown = GAME_CONFIG.DEPLOY_COOLDOWN_MS;

      const group = spawnTroopGroup(room, player.role, cardType, lane);
      if (group) {
        room.troopGroups.push(group);
        room.stats[player.role].troopsDeployed++;
      }
    }));

    // ── SUBMIT ANSWER ─────────────────────────────
    socket.on('submit_answer', rateGuard(socket, 'submit_answer', async (raw) => {
      const v = InputValidator.submitAnswer(raw);
      if (!v.valid) return;
      const { roomCode, questionId, answer } = v.data;

      const room = roomRegistry.get(roomCode);
      if (!room || room.state !== 'ACTIVE') return;

      const player = room.players.find(p => p.socketId === socket.id);
      if (!player || player.questionState.state !== 'QUESTION') return;

      const result = questionManager.validateAnswer(questionId, answer);
      if (result.correct) {
        player.tokens = Math.min(player.tokens + result.tokens, GAME_CONFIG.TOKEN_CAP);
        room.stats[player.role].questionsCorrect++;
      }

      player.questionState.state = result.correct ? 'ANSWERED' : 'COOLDOWN';
      socket.emit('answer_result', {
        correct: result.correct,
        tokensAwarded: result.tokens,
        newTotal: player.tokens,
      });

      setTimeout(() => {
        if (room.state !== 'ACTIVE') return;
        const q = questionManager.getNextQuestion(player.questionState);
        if (q) socket.emit('new_question', q);
      }, result.correct ? 1500 : 4000);
    }));

    // ── REJOIN ROOM ────────────────────────────
    socket.on('rejoin_room', rateGuard(socket, 'rejoin_room', async (raw) => {
      const v = InputValidator.joinRoom(raw);
      if (!v.valid) return socket.emit('rejoin_failed', { error: v.error });
      const { roomCode, playerName } = v.data;

      const room = roomRegistry.get(roomCode);
      if (!room) return socket.emit('rejoin_failed', { error: 'Room not found' });
      
      const player = room.players.find(p => p.name === playerName);
      if (!player) return socket.emit('rejoin_failed', { error: 'Player not found' });

      if (room.reconnectTimer) {
        clearTimeout(room.reconnectTimer);
        room.reconnectTimer = null;
      }

      // Remove old socket ID from rate limiter
      rateLimiter.remove(player.socketId);
      eventQueue.remove(player.socketId);

      player.socketId = socket.id;
      player.connected = true;
      socket.join(roomCode);

      socket.emit('game_resync', {
        playerIndex: player.index,
        role: player.role,
        tokens: player.tokens,
        roomState: room.state,
        gameState: room.buildStateSnapshot(),
        currentQuestion: player.questionState.currentQuestion,
      });

      io.to(roomCode).emit('opponent_reconnected', { message: `${playerName} reconnected.` });
      
      if (room.state === 'ACTIVE' && !player.questionState.currentQuestion) {
        const q = questionManager.getNextQuestion(player.questionState);
        if (q) socket.emit('new_question', q);
      }
    }));

    // ── ADMIN CONTROLS ────────────────────────────
    socket.on('admin_pause', rateGuard(socket, 'admin_pause', async (raw) => {
      const roomCode = String(raw?.roomCode || '');
      const adminSecret = String(raw?.adminSecret || '');
      if (adminSecret !== (process.env.ADMIN_SECRET || 'cipherclash2024')) return;
      const room = roomRegistry.get(roomCode);
      if (!room || room.state !== 'ACTIVE') return;
      room.state = 'PAUSED';
      io.to(roomCode).emit('game_paused', { message: 'Game Paused by Admin' });
    }));

    socket.on('admin_resume', rateGuard(socket, 'admin_pause', async (raw) => {
      const roomCode = String(raw?.roomCode || '');
      const adminSecret = String(raw?.adminSecret || '');
      if (adminSecret !== (process.env.ADMIN_SECRET || 'cipherclash2024')) return;
      const room = roomRegistry.get(roomCode);
      if (!room || room.state !== 'PAUSED') return;
      room.state = 'ACTIVE';
      io.to(roomCode).emit('game_resumed', { message: 'Game Resumed' });
    }));

    socket.on('admin_end', rateGuard(socket, 'admin_pause', async (raw) => {
      const roomCode = String(raw?.roomCode || '');
      const adminSecret = String(raw?.adminSecret || '');
      if (adminSecret !== (process.env.ADMIN_SECRET || 'cipherclash2024')) return;
      const room = roomRegistry.get(roomCode);
      if (!room) return;
      stopGameLoop(room);
      room.state = 'ENDED';
      io.to(roomCode).emit('game_over', {
        winner: 'draw',
        reason: 'admin_ended',
        finalState: room.buildStateSnapshot(),
        stats: room.stats,
      });
    }));

    // ── DISCONNECT ────────────────────────────────
    socket.on('disconnect', () => {
      console.log(`[Socket] Disconnected: ${socket.id}`);
      rateLimiter.remove(socket.id);
      eventQueue.remove(socket.id);

      for (const [code, room] of roomRegistry.rooms) {
        const player = room.players?.find(p => p.socketId === socket.id);
        if (player && room.state === 'ACTIVE') {
          player.connected = false;
          player.disconnectedAt = Date.now();

          io.to(code).emit('opponent_disconnected', {
            message: 'Opponent disconnected. Waiting 15s...',
            timeoutMs: 15000,
          });

          room.reconnectTimer = setTimeout(() => {
            if (!player.connected && room.state === 'ACTIVE') {
              const winner = room.getOpponentRole(player.role);
              stopGameLoop(room);
              room.state = 'ENDED';
              io.to(code).emit('game_over', {
                winner,
                reason: 'opponent_disconnected',
                finalState: room.buildStateSnapshot(),
                stats: room.stats,
              });
            }
          }, 15000);
        }
      }
    });
  });
}
