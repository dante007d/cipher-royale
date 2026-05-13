import { useEffect } from 'react';
import useGameStore from '../store/gameStore.js';
import SocketService from '../services/SocketService.js';

export default function HUD() {
  const tokens = useGameStore((s) => s.tokens);
  const timeRemaining = useGameStore((s) => s.timeRemaining);

  const info = window.__cipherClash || {};
  const playerAName = info.playerAName || 'Player A';
  const playerBName = info.playerBName || 'Player B';

  useEffect(() => {
    const handler = (state) => {
      if (state.timeRemaining != null) {
        useGameStore.getState().setTimeRemaining(state.timeRemaining);
      }
      if (state.tokens) {
        const role = info.playerIndex === 0 ? 'playerA' : 'playerB';
        const myTokens = state.tokens[role];
        if (myTokens != null) {
          useGameStore.getState().setTokens(myTokens);
        }
      }
    };
    SocketService.on('game_state', handler);
    return () => SocketService.off('game_state');
  }, []);

  const minutes = Math.floor(timeRemaining / 60000);
  const seconds = Math.floor((timeRemaining % 60000) / 1000);
  const timerStr = `${minutes}:${seconds.toString().padStart(2, '0')}`;

  return (
    <div className="hud-bar">
      <div className="hud-player-info">
        <span className="hud-player-name" style={{ color: '#f87171' }}>{playerBName}</span>
      </div>
      <div className="hud-timer">{timerStr}</div>
      <div className="hud-player-info">
        <span className="hud-player-name" style={{ color: '#60a5fa' }}>{playerAName}</span>
        <span className="hud-tokens">🪙 {tokens}</span>
      </div>
    </div>
  );
}
