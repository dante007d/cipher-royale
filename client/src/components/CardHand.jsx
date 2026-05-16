import { useEffect, useCallback } from 'react';
import useGameStore from '../store/gameStore.js';
import SocketService from '../services/SocketService.js';
import SoundService from '../services/SoundService.js';
import { deploymentLock } from '../input/DeploymentLock.js';

export default function CardHand() {
  const deck = useGameStore((s) => s.deck);
  const handIndices = useGameStore((s) => s.handIndices);
  const selectedCardIndex = useGameStore((s) => s.selectedCardIndex);
  const tokens = useGameStore((s) => s.tokens);
  const selectCard = useGameStore((s) => s.selectCard);
  const deployCard = useGameStore((s) => s.deployCard);

  const handleLaneClick = useCallback((e) => {
    const lane = e.detail.lane;
    
    // ── CLIENT-SIDE LOCK CHECK ────────────────────────────────
    if (deploymentLock.isLocked) {
      console.warn('[CardHand] Deployment locked, ignoring click');
      // Visual feedback could be added here
      return;
    }

    const card = deployCard(lane);
    console.log('[CardHand] handleLaneClick:', lane, 'Card:', card);
    
    if (card) {
      // ── ACQUIRE LOCK ──────────────────────────────────────────
      if (!deploymentLock.tryAcquire()) return;

      const info = window.__cipherClash || {};
      console.log('[CardHand] Emitting deploy_troop:', card.type, 'to room:', info.roomCode);
      SocketService.emit('deploy_troop', {
        roomCode: info.roomCode,
        cardType: card.type,
        lane,
        clientTimestamp: Date.now(),
      });
      window.dispatchEvent(new CustomEvent('card_deselected'));
    }
  }, [deployCard]);

  useEffect(() => {
    if (selectedCardIndex !== null) {
      const card = deck[handIndices[selectedCardIndex]];
      if (card) {
        window.dispatchEvent(new CustomEvent('card_selected', {
          detail: { cardType: card.type }
        }));
      }
    } else {
      window.dispatchEvent(new CustomEvent('card_deselected'));
    }
  }, [selectedCardIndex, deck, handIndices]);

  useEffect(() => {
    window.addEventListener('lane_clicked', handleLaneClick);
    return () => window.removeEventListener('lane_clicked', handleLaneClick);
  }, [handleLaneClick]);

  return (
    <div className="card-hand-bar">
      {handIndices.map((deckIdx, handIdx) => {
        const card = deck[deckIdx];
        if (!card) return null;
        const insufficient = tokens < card.cost;
        const isSelected = selectedCardIndex === handIdx;
        const isCycling = card.state === 'cycling';

        const className = [
          'card',
          `tier-${card.tier}`,
          isSelected ? 'selected' : '',
          insufficient ? 'insufficient' : '',
          isCycling ? 'cycling' : '',
        ].filter(Boolean).join(' ');

        return (
          <div
            key={card.id}
            className={className}
            onClick={() => {
              if (isCycling || insufficient) return;
              selectCard(handIdx);
            }}
          >
            <div className="card-top">
              <span className="card-name">{card.label}</span>
              <span className="card-icon">{card.icon}</span>
            </div>
            <div className="card-bottom">
              <span className="card-cost">🪙 {card.cost}</span>
              <span className="card-count">×{card.count}</span>
              <span className="card-tier">{card.tier}</span>
            </div>
          </div>
        );
      })}
      <div className="token-display">
        <span>🪙</span>
        <span>{tokens} / 20</span>
      </div>
    </div>
  );
}
