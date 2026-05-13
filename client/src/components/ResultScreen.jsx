import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SocketService from '../services/SocketService.js';

export default function ResultScreen() {
  const [result, setResult] = useState(null);
  const navigate = useNavigate();
  const info = window.__cipherClash || {};

  useEffect(() => {
    // Check if result was stored from game_over event
    if (window.__cipherClashResult) {
      setResult(window.__cipherClashResult);
    }

    SocketService.on('game_over', (data) => {
      window.__cipherClashResult = data;
      setResult(data);
    });

    return () => SocketService.off('game_over');
  }, []);

  const handlePlayAgain = () => {
    window.__cipherClashResult = null;
    navigate('/');
  };

  if (!result) {
    return (
      <div className="result-container">
        <h1 className="result-title" style={{ color: 'var(--text-secondary)' }}>Waiting for results...</h1>
      </div>
    );
  }

  const myRole = info.playerIndex === 0 ? 'playerA' : 'playerB';
  const isWinner = result.winner === myRole;
  const isDraw = result.winner === 'draw';

  const reasonText = {
    main_tower_destroyed: 'Main Tower Destroyed',
    time_expired: 'Time Expired — Tower Count',
    opponent_disconnected: 'Opponent Disconnected',
    admin_ended: 'Game Ended by Admin',
  }[result.reason] || result.reason;

  const playerAName = info.playerAName || 'Player A';
  const playerBName = info.playerBName || 'Player B';

  return (
    <div className="result-container">
      <h1 className={`result-title ${isDraw ? '' : isWinner ? 'victory' : 'defeat'}`}>
        {isDraw ? 'DRAW' : isWinner ? '🏆 VICTORY!' : '💀 DEFEAT'}
      </h1>
      <p className="result-reason">{reasonText}</p>

      {result.stats && (
        <div className="result-stats">
          <table>
            <thead>
              <tr>
                <th>Stat</th>
                <th style={{ color: '#60a5fa' }}>{playerAName}</th>
                <th style={{ color: '#f87171' }}>{playerBName}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Troops Deployed</td>
                <td>{result.stats.playerA?.troopsDeployed || 0}</td>
                <td>{result.stats.playerB?.troopsDeployed || 0}</td>
              </tr>
              <tr>
                <td>Questions Correct</td>
                <td>{result.stats.playerA?.questionsCorrect || 0}</td>
                <td>{result.stats.playerB?.questionsCorrect || 0}</td>
              </tr>
              <tr>
                <td>Towers Destroyed</td>
                <td>{result.stats.playerA?.towersDestroyed || 0}</td>
                <td>{result.stats.playerB?.towersDestroyed || 0}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      <button className="btn-play-again" onClick={handlePlayAgain}>
        Play Again
      </button>
    </div>
  );
}
