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
  const timeoutRef = useRef(null);

  useEffect(() => {
    SocketService.connect();

    // REMOVED: Redundant join_result listener here, now handled in the main listener set
    // to ensure timeout clearing.
    
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

    SocketService.on('room_created', (data) => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      setStatus('waiting');
      setStatusMsg('Room created! Waiting for opponent...');
      setRoomCode(data.roomCode);
      setRoomInfo(prev => ({ ...prev, roomCode: data.roomCode }));
      
      const cleanName = playerName.trim().slice(0, 16).replace(/[^a-zA-Z0-9_]/g, '');
      SocketService.emit('join_room', {
        roomCode: data.roomCode,
        playerName: cleanName,
      });
    });

    SocketService.on('error', (data) => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      setStatus('error');
      setStatusMsg(data.message || 'Server error');
    });

    SocketService.on('join_result', (data) => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (data.success) {
        setStatus('waiting');
        setStatusMsg('Waiting for opponent...');
        setRoomInfo({
          roomCode: data.roomCode,
          playerIndex: data.playerIndex,
          playerName: playerName,
        });
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

    return () => {
      SocketService.off('join_result');
      SocketService.off('room_ready');
      SocketService.off('room_created');
      SocketService.off('error');
      if (countdownRef.current) clearInterval(countdownRef.current);
    };
  }, [playerName]);

  const handleJoin = () => {
    if (!playerName.trim() || !roomCode.trim()) return;
    const cleanName = playerName.trim().slice(0, 16).replace(/[^a-zA-Z0-9_]/g, '');
    const cleanCode = roomCode.trim().toUpperCase().slice(0, 6);
    setStatus('joining');
    setStatusMsg('Connecting...');

    timeoutRef.current = setTimeout(() => {
      if (status === 'joining') {
        setStatus('error');
        setStatusMsg('Join timeout. Check room code.');
      }
    }, 8000);

    SocketService.emit('join_room', {
      roomCode: cleanCode,
      playerName: cleanName,
    });
  };

  const handleDemoMode = () => {
    if (!playerName.trim()) return;
    const cleanName = playerName.trim().slice(0, 16).replace(/[^a-zA-Z0-9_]/g, '');
    setStatus('joining');
    setStatusMsg('Starting Demo Mode...');

    // Timeout if server doesn't respond
    timeoutRef.current = setTimeout(() => {
      setStatus(current => {
        if (current === 'joining') {
          setStatusMsg('Server timeout. Please restart your server to apply changes.');
          return 'error';
        }
        return current;
      });
    }, 8000);

    SocketService.emit('start_demo_mode', { playerName: cleanName });
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
            disabled={!playerName.trim() || !roomCode.trim() || status === 'joining' || status === 'waiting' || status === 'ready'}
          >
            {status === 'joining' ? '...' : 'Join Room'}
          </button>
          <button
            className="btn-primary"
            onClick={handleDemoMode}
            disabled={!playerName.trim() || status === 'joining' || status === 'waiting' || status === 'ready'}
            style={{ background: 'linear-gradient(135deg, #10b981, #059669)' }}
          >
            {status === 'joining' ? '...' : 'Demo Mode'}
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
