import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import SocketService from '../services/SocketService.js';

export default function LobbyUI() {
  const [playerName, setPlayerName] = useState('');
  const [roomCode, setRoomCode] = useState('');
  const [status, setStatus] = useState('idle'); // idle | joining | waiting | ready | countdown | error
  const [statusMsg, setStatusMsg] = useState('');
  const [countdown, setCountdown] = useState(null);
  const [roomInfo, setRoomInfo] = useState(null);
  const navigate = useNavigate();
  const countdownRef = useRef(null);

  useEffect(() => {
    SocketService.connect();

    SocketService.on('join_result', (data) => {
      if (data.success) {
        setStatus('waiting');
        setStatusMsg('Waiting for opponent...');
        setRoomInfo({
          roomCode: data.roomCode,
          playerIndex: data.playerIndex,
          playerName: playerName,
        });
        // Store in window for GameScene access
        const role = data.playerIndex === 0 ? 'playerA' : 'playerB';
        const roomData = {
          roomCode: data.roomCode,
          playerIndex: data.playerIndex,
          playerRole: role,
          playerName: playerName,
        };
        window.__cipherClash = roomData;
        localStorage.setItem('cipherClash_room', JSON.stringify(roomData));
      } else {
        setStatus('error');
        setStatusMsg(data.error || 'Failed to join');
      }
    });

    SocketService.on('room_ready', (data) => {
      setStatus('ready');
      setStatusMsg(`${data.playerA} vs ${data.playerB}`);
      const fullInfo = {
        ...window.__cipherClash,
        opponentName: data.playerA === playerName ? data.playerB : data.playerA,
        playerAName: data.playerA,
        playerBName: data.playerB,
      };
      window.__cipherClash = fullInfo;
      localStorage.setItem('cipherClash_room', JSON.stringify(fullInfo));
      // Start 3-2-1 countdown
      let count = 3;
      setCountdown(count);
      countdownRef.current = setInterval(() => {
        count--;
        if (count <= 0) {
          clearInterval(countdownRef.current);
          setCountdown(null);
          navigate('/game');
        } else {
          setCountdown(count);
        }
      }, 1000);
    });

    return () => {
      SocketService.off('join_result');
      SocketService.off('room_ready');
      if (countdownRef.current) clearInterval(countdownRef.current);
    };
  }, [playerName]);

  const handleJoin = () => {
    if (!playerName.trim() || !roomCode.trim()) return;
    const cleanName = playerName.trim().slice(0, 16).replace(/[^a-zA-Z0-9_]/g, '');
    const cleanCode = roomCode.trim().toUpperCase().slice(0, 6);
    setStatus('joining');
    setStatusMsg('Connecting...');
    SocketService.emit('join_room', {
      roomCode: cleanCode,
      playerName: cleanName,
    });
  };

  const handleCreate = () => {
    if (!playerName.trim()) return;
    const cleanName = playerName.trim().slice(0, 16).replace(/[^a-zA-Z0-9_]/g, '');
    setStatus('joining');
    setStatusMsg('Creating room...');

    SocketService.on('room_created', (data) => {
      setRoomCode(data.roomCode);
      SocketService.off('room_created');
      // Auto-join the created room
      SocketService.emit('join_room', {
        roomCode: data.roomCode,
        playerName: cleanName,
      });
    });

    SocketService.emit('create_room', {
      settings: { durationSeconds: 300 },
    });
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleJoin();
  };

  return (
    <div className="lobby-container">
      <h1 className="lobby-title">CIPHER CLASH</h1>
      <p className="lobby-subtitle">Tower Defense × Quiz Battle</p>

      {countdown !== null && (
        <div className="countdown-overlay">
          <div className="countdown-number" key={countdown}>{countdown}</div>
        </div>
      )}

      <div className="lobby-card">
        <h2>⚔️ ENTER THE ARENA</h2>

        <div className="input-group">
          <label>Player Name</label>
          <input
            type="text"
            placeholder="Enter your name..."
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
            maxLength={16}
            disabled={status === 'waiting' || status === 'ready'}
          />
        </div>

        <div className="input-group">
          <label>Room Code</label>
          <input
            type="text"
            placeholder="6-character code"
            value={roomCode}
            onChange={(e) => setRoomCode(e.target.value.toUpperCase())}
            onKeyDown={handleKeyDown}
            maxLength={6}
            disabled={status === 'waiting' || status === 'ready'}
            style={{ textTransform: 'uppercase', letterSpacing: '0.15em', fontFamily: 'var(--font-display)' }}
          />
        </div>

        <div style={{ display: 'flex', gap: '10px' }}>
          <button
            className="btn-primary"
            onClick={handleJoin}
            disabled={!playerName.trim() || !roomCode.trim() || status === 'waiting' || status === 'ready'}
          >
            Join Room
          </button>
          <button
            className="btn-primary"
            onClick={handleCreate}
            disabled={!playerName.trim() || status === 'waiting' || status === 'ready'}
            style={{ background: 'linear-gradient(135deg, #8b5cf6, #a855f7)' }}
          >
            Create Room
          </button>
        </div>

        {statusMsg && (
          <div className={`lobby-status ${status}`}>
            {statusMsg}
            {roomInfo && status === 'waiting' && (
              <div className="lobby-room-code">{roomInfo.roomCode}</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
