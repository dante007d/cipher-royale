import { useState, useEffect } from 'react';
import SocketService from '../services/SocketService.js';

const DEFAULT_SECRET = 'cipherclash2024';

export default function AdminPanel() {
  const [secret, setSecret] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const [rooms, setRooms] = useState([]);
  const [duration, setDuration] = useState(300);
  const [createdCode, setCreatedCode] = useState('');
  const [statusMsg, setStatusMsg] = useState('');

  useEffect(() => {
    if (!authenticated) return;

    SocketService.connect();

    // Poll rooms every 2 seconds
    const poll = setInterval(() => fetchRooms(), 2000);
    fetchRooms();

    SocketService.on('room_created', (data) => {
      setCreatedCode(data.roomCode);
      setStatusMsg(`Room ${data.roomCode} created!`);
    });

    return () => {
      clearInterval(poll);
      SocketService.off('room_created');
    };
  }, [authenticated]);

  const fetchRooms = async () => {
    try {
      const res = await fetch('/api/admin/rooms', {
        headers: { 'x-admin-secret': secret },
      });
      if (res.ok) {
        const data = await res.json();
        setRooms(data.rooms || []);
        if (statusMsg.includes('Unauthorized') || statusMsg.includes('failed')) setStatusMsg('');
      } else {
        if (res.status === 401) setStatusMsg('Unauthorized: Invalid Secret');
        else setStatusMsg(`Fetch error: ${res.status}`);
      }
    } catch (e) {
      console.error('[Admin] Fetch error:', e);
      setStatusMsg('Server connection failed. Check console.');
    }
  };

  const handleLogin = () => {
    if (secret === DEFAULT_SECRET || secret === (window.__ADMIN_SECRET || DEFAULT_SECRET)) {
      setAuthenticated(true);
    } else {
      setStatusMsg('Invalid secret');
    }
  };

  const handleCreateRoom = () => {
    SocketService.emit('create_room', {
      settings: { durationSeconds: duration },
    });
  };

  const handlePause = (code) => {
    SocketService.emit('admin_pause', { roomCode: code, adminSecret: secret });
    setStatusMsg(`Paused room ${code}`);
  };

  const handleResume = (code) => {
    SocketService.emit('admin_resume', { roomCode: code, adminSecret: secret });
    setStatusMsg(`Resumed room ${code}`);
  };

  const handleEnd = (code) => {
    SocketService.emit('admin_end', { roomCode: code, adminSecret: secret });
    setStatusMsg(`Ended room ${code}`);
  };

  if (!authenticated) {
    return (
      <div className="lobby-container">
        <div className="lobby-card" style={{ maxWidth: '360px' }}>
          <h2>🔐 ADMIN ACCESS</h2>
          <div className="input-group">
            <label>Admin Secret</label>
            <input
              type="password"
              value={secret}
              onChange={(e) => setSecret(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
              placeholder="Enter admin secret..."
            />
          </div>
          <button className="btn-primary" onClick={handleLogin}>Authenticate</button>
          {statusMsg && <p className="lobby-status error">{statusMsg}</p>}
        </div>
      </div>
    );
  }

  return (
    <div className="admin-container" style={{ overflow: 'auto' }}>
      <h1>⚔️ CIPHER CLASH — ADMIN PANEL</h1>

      {statusMsg && <p style={{ color: 'var(--accent-green)', marginBottom: '1rem' }}>{statusMsg}</p>}

      {/* CREATE ROOM */}
      <div className="admin-section">
        <h2>CREATE ROOM</h2>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-end', flexWrap: 'wrap' }}>
          <div className="input-group" style={{ marginBottom: 0 }}>
            <label>Duration (seconds)</label>
            <input
              type="number"
              value={duration}
              onChange={(e) => setDuration(Number(e.target.value))}
              min={60}
              max={600}
              style={{ width: '120px' }}
            />
          </div>
          <button
            className="btn-primary"
            onClick={handleCreateRoom}
            style={{ width: 'auto', padding: '0.8rem 2rem' }}
          >
            Generate Room
          </button>
          {createdCode && (
            <div className="lobby-room-code" style={{ fontSize: '1.5rem' }}>
              {createdCode}
            </div>
          )}
        </div>
      </div>

      {/* ACTIVE ROOMS */}
      <div className="admin-section">
        <h2>ACTIVE ROOMS</h2>
        {rooms.length === 0 ? (
          <p style={{ color: 'var(--text-muted)' }}>No active rooms</p>
        ) : (
          <table className="admin-table">
            <thead>
              <tr>
                <th>Code</th>
                <th>Players</th>
                <th>State</th>
                <th>Winner</th>
                <th>Duration</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {rooms.map((room) => (
                <tr key={room.code}>
                  <td style={{ fontFamily: 'var(--font-display)', color: 'var(--accent-gold)' }}>
                    {room.code}
                  </td>
                  <td>{room.players?.join(' vs ') || '-'}</td>
                  <td>
                    <span className={`state-tag ${room.state.toLowerCase()}`}>
                      {room.state}
                    </span>
                  </td>
                  <td style={{ color: room.winner ? 'var(--accent-green)' : 'inherit' }}>
                    {room.winner ? (room.winner === 'playerA' ? room.players[0] : room.players[1] || 'Bot') : '-'}
                  </td>
                  <td>{room.duration}s</td>
                  <td>
                    {room.state === 'ACTIVE' && (
                      <button className="btn-admin pause" onClick={() => handlePause(room.code)}>Pause</button>
                    )}
                    {room.state === 'PAUSED' && (
                      <button className="btn-admin resume" onClick={() => handleResume(room.code)}>Resume</button>
                    )}
                    <button className="btn-admin end" onClick={() => handleEnd(room.code)}>End</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
