import roomRegistry from './roomRegistry.js';
import GameRoom from './game/GameRoom.js';
import { startGameLoop, stopGameLoop } from './game/GameLoop.js';
import { spawnTroopGroup, validateDeployment } from './game/TroopManager.js';
import QuestionManager from './game/QuestionManager.js';
import { GAME_CONFIG } from './shared_ref.js';

const questionManager = new QuestionManager();

export function registerSocketHandlers(io) {
  io.on('connection', (socket) => {
    console.log(`[Socket] Connected: ${socket.id}`);

    // ── CREATE ROOM ───────────────────────────────
    socket.on('create_room', ({ settings }) => {
      const code = roomRegistry.generateRoomCode();
      const room = new GameRoom(code, settings || {});
      roomRegistry.rooms.set(code, room);
      console.log(`[Room] Created: ${code}`);
      socket.emit('room_created', { roomCode: code });
    });

    // ── JOIN ROOM ─────────────────────────────────
    socket.on('join_room', ({ roomCode, playerName }) => {
      let room = roomRegistry.get(roomCode);

      if (!room) {
        // Auto-create room for easy testing
        room = new GameRoom(roomCode, {});
        roomRegistry.rooms.set(roomCode, room);
      }

      if (room.state !== 'WAITING' && room.state !== 'COUNTDOWN') {
        socket.emit('join_result', { success: false, error: 'Game already in progress' });
        return;
      }

      if (room.players.length >= 2) {
        socket.emit('join_result', { success: false, error: 'Room is full' });
        return;
      }

      if (room.players.some(p => p.name === playerName)) {
        socket.emit('join_result', { success: false, error: 'Name already taken' });
        return;
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

        // Start game after 3s countdown
        setTimeout(() => {
          if (room.state === 'COUNTDOWN') {
            startGameLoop(room, io);
            // Push first questions to both players
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
    });

    // ── DEPLOY TROOP ──────────────────────────────
    socket.on('deploy_troop', ({ roomCode, cardType, lane }) => {
      console.log(`[Deploy Request] Room:${roomCode}, Type:${cardType}, Lane:${lane}`);
      const room = roomRegistry.get(roomCode);
      if (!room || room.state !== 'ACTIVE') {
        console.warn(`[Deploy] Room not active or found: ${roomCode}`);
        return;
      }

      const player = room.players.find(p => p.socketId === socket.id);
      if (!player) {
        console.warn(`[Deploy] Player not found for socket ${socket.id}`);
        return;
      }

      const validation = validateDeployment(player, cardType);
      if (!validation.valid) {
        console.warn(`[Deploy] Validation failed: ${validation.reason}`);
        return;
      }

      // Deduct tokens & set cooldown
      player.tokens -= validation.cost;
      player.deployCooldown = GAME_CONFIG.DEPLOY_COOLDOWN_MS;

      // Spawn troop group (Passing room to check tower status)
      const group = spawnTroopGroup(room, player.role, cardType, lane);
      if (group) {
        room.troopGroups.push(group);
        room.stats[player.role].troopsDeployed++;
        console.log(`[Deploy] SUCCESS: ${cardType} @ ${lane}`);
      } else {
        console.error(`[Deploy] SPAWN FAILED: ${cardType}`);
      }
    });

    // ── SUBMIT ANSWER ─────────────────────────────
    socket.on('submit_answer', ({ roomCode, questionId, answer }) => {
      const room = roomRegistry.get(roomCode);
      if (!room || room.state !== 'ACTIVE') return;

      const player = room.players.find(p => p.socketId === socket.id);
      if (!player) return;
      if (player.questionState.state !== 'QUESTION') return;

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

      // Push next question after delay
      const delay = result.correct ? 1500 : 2000;
      setTimeout(() => {
        if (room.state !== 'ACTIVE') return;
        const q = questionManager.getNextQuestion(player.questionState);
        if (q) socket.emit('new_question', q);
      }, delay);
    });

    // ── REJOIN ROOM ────────────────────────────
    socket.on('rejoin_room', ({ roomCode, playerName }) => {
      const room = roomRegistry.get(roomCode);
      if (!room) {
        socket.emit('rejoin_result', { success: false, error: 'Room not found' });
        return;
      }

      let player = room.players.find(p => p.name === playerName);
      if (!player) {
        socket.emit('rejoin_result', { success: false, error: 'Player not found in room' });
        return;
      }

      // Update socket ID and connection state
      player.socketId = socket.id;
      player.connected = true;
      socket.join(roomCode);

      socket.emit('rejoin_result', { 
        success: true, 
        role: player.role,
        tokens: player.tokens,
        roomState: room.state 
      });

      console.log(`[Room ${roomCode}] ${playerName} rejoined.`);

      // Send a new question immediately if game is active
      if (room.state === 'ACTIVE') {
        const q = questionManager.getNextQuestion(player.questionState);
        if (q) socket.emit('new_question', q);
      }
    });

    // ── ADMIN CONTROLS ────────────────────────────
    socket.on('admin_pause', ({ roomCode, adminSecret }) => {
      if (adminSecret !== (process.env.ADMIN_SECRET || 'cipherclash2024')) return;
      const room = roomRegistry.get(roomCode);
      if (!room || room.state !== 'ACTIVE') return;
      room.state = 'PAUSED';
      io.to(roomCode).emit('game_paused', { message: 'Game Paused by Admin' });
    });

    socket.on('admin_resume', ({ roomCode, adminSecret }) => {
      if (adminSecret !== (process.env.ADMIN_SECRET || 'cipherclash2024')) return;
      const room = roomRegistry.get(roomCode);
      if (!room || room.state !== 'PAUSED') return;
      room.state = 'ACTIVE';
      io.to(roomCode).emit('game_resumed', { message: 'Game Resumed' });
    });

    socket.on('admin_end', ({ roomCode, adminSecret }) => {
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
    });

    // ── DISCONNECT ────────────────────────────────
    socket.on('disconnect', () => {
      console.log(`[Socket] Disconnected: ${socket.id}`);
      // Find room this socket belongs to
      for (const [code, room] of roomRegistry.rooms) {
        const player = room.players.find(p => p.socketId === socket.id);
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

    // ── REJOIN ────────────────────────────────────
    socket.on('rejoin_room', ({ roomCode, playerName }) => {
      const room = roomRegistry.get(roomCode);
      if (!room) return socket.emit('rejoin_failed', { error: 'Room not found' });
      const player = room.players.find(p => p.name === playerName);
      if (!player) return socket.emit('rejoin_failed', { error: 'Player not found' });

      if (room.reconnectTimer) {
        clearTimeout(room.reconnectTimer);
        room.reconnectTimer = null;
      }

      player.socketId = socket.id;
      player.connected = true;
      socket.join(roomCode);

      socket.emit('game_resync', {
        playerIndex: player.index,
        gameState: room.buildStateSnapshot(),
        currentQuestion: player.questionState.currentQuestion,
      });

      io.to(roomCode).emit('opponent_reconnected', { message: 'Opponent reconnected.' });
    });
  });
}
