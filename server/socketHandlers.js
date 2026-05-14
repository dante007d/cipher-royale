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
      console.log(`[Room] Create request from socket: ${socket.id}`);
      try {
        const code = roomRegistry.generateRoomCode();
        const room = new GameRoom(code, settings || {});
        roomRegistry.rooms.set(code, room);
        console.log(`[Room] Created: ${code} (Duration: ${room.settings.durationSeconds}s)`);
        socket.emit('room_created', { roomCode: code });
      } catch (err) {
        console.error(`[Room] Create FAILED:`, err);
        socket.emit('error', { message: 'Failed to create room' });
      }
    });

    // ── START DEMO MODE ───────────────────────────
    socket.on('start_demo_mode', ({ playerName }) => {
      console.log(`[Demo] Start request from ${playerName} (${socket.id})`);
      try {
        const code = `DEMO-${Math.random().toString(36).substring(2, 5).toUpperCase()}`;
        const room = new GameRoom(code, { durationSeconds: 600 });
        roomRegistry.rooms.set(code, room);

        // Add Human Player
        const player = {
          socketId: socket.id,
          name: playerName || 'Player',
          index: 0,
          role: 'playerA',
          connected: true,
          tokens: 10, // Extra starting tokens for demo
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
        
        // Give client a moment to process join_result before starting countdown
        setTimeout(() => {
          room.state = 'COUNTDOWN';
          const readyData = {
            playerA: player.name,
            playerB: bot.name,
          };
          
          // Emit to both (though BOT is not real)
          io.to(code).emit('room_ready', readyData);
          // Redundant direct emit to be safe
          socket.emit('room_ready', readyData);

          setTimeout(() => {
            if (room.state === 'COUNTDOWN') {
              startGameLoop(room, io);
              const q = questionManager.getNextQuestion(player.questionState);
              if (q) socket.emit('new_question', q);
            }
          }, 3500); // 3.5s to match countdown
        }, 500);

      } catch (err) {
        console.error(`[Demo] Start FAILED:`, err);
        socket.emit('error', { message: 'Failed to start demo mode' });
      }
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
      const room = roomRegistry.get(roomCode);
      if (!room || room.state !== 'ACTIVE') {
        console.warn(`[Deploy FAILED] Room:${roomCode} state:${room?.state}. Card:${cardType}`);
        return;
      }

      const player = room.players.find(p => p.socketId === socket.id);
      if (!player) {
        console.warn(`[Deploy FAILED] Player not found. Socket:${socket.id}`);
        return;
      }

      const validation = validateDeployment(player, cardType);
      if (!validation.valid) {
        console.warn(`[Deploy FAILED] ${player.name}: ${validation.reason} (${cardType})`);
        return;
      }

      // Deduct tokens & set cooldown
      player.tokens -= validation.cost;
      player.deployCooldown = GAME_CONFIG.DEPLOY_COOLDOWN_MS;

      // Spawn troop group
      const group = spawnTroopGroup(room, player.role, cardType, lane);
      if (group) {
        room.troopGroups.push(group);
        room.stats[player.role].troopsDeployed++;
      } else {
        console.error(`[Deploy ERROR] spawnTroopGroup returned null for ${cardType}`);
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

      // Send comprehensive resync
      socket.emit('game_resync', {
        playerIndex: player.index,
        role: player.role,
        tokens: player.tokens,
        roomState: room.state,
        gameState: room.buildStateSnapshot(),
        currentQuestion: player.questionState.currentQuestion,
      });

      io.to(roomCode).emit('opponent_reconnected', { message: `${playerName} reconnected.` });
      
      // Also send a new question if they don't have one and game is active
      if (room.state === 'ACTIVE' && !player.questionState.currentQuestion) {
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
  });
}
