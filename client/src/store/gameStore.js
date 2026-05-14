import { create } from 'zustand';
import { TROOPS } from '@shared/troopConfig.js';

const TROOP_ICONS = {
  low: '⚔️', mid: '🛡️', high: '🗿'
};

const TROOP_LABELS = {
  low: 'Infantry', mid: 'Guardian', high: 'Titan'
};

console.log('[gameStore] TROOPS Config:', TROOPS);

function buildDefaultDeck() {
  const types = ['low', 'mid', 'high'];
  return types.map((type, i) => ({
    id: `card_${type}_${i}`,
    type,
    tier: TROOPS[type].tier,
    cost: TROOPS[type].cost,
    count: TROOPS[type].count,
    label: TROOP_LABELS[type],
    icon: TROOP_ICONS[type],
    state: 'ready',
  }));
}

const useGameStore = create((set, get) => ({
  // Player info
  tokens: 5,
  playerRole: null,
  playerName: '',
  opponentName: '',

  // Deck + hand
  deck: buildDefaultDeck(),
  handIndices: [0, 1, 2],
  selectedCardIndex: null,
  deployCooldown: false,

  // Question state
  questionState: 'IDLE', // IDLE | QUESTION | ANSWERED | COOLDOWN
  currentQuestion: null,
  lastAnswerCorrect: null,
  lastTokensAwarded: 0,

  // Game state
  timeRemaining: 300000,
  gameOver: false,
  gameResult: null,

  setTokens: (n) => set({ tokens: Math.min(n, 20) }),
  setPlayerRole: (role) => set({ playerRole: role }),
  setPlayerName: (name) => set({ playerName: name }),
  setOpponentName: (name) => set({ opponentName: name }),

  selectCard: (index) => {
    const state = get();
    const deckIndex = state.handIndices[index];
    const card = state.deck[deckIndex];
    if (!card || card.state !== 'ready' || state.tokens < card.cost) return;
    set({ selectedCardIndex: index });
  },

  deployCard: (lane) => {
    const state = get();
    if (state.selectedCardIndex === null || state.deployCooldown) return null;
    const deckIndex = state.handIndices[state.selectedCardIndex];
    const card = state.deck[deckIndex];
    if (!card || state.tokens < card.cost) return null;

    // Mark card as cycling
    const newDeck = [...state.deck];
    newDeck[deckIndex] = { ...card, state: 'cycling' };

    set({
      deployCooldown: true,
      selectedCardIndex: null,
      deck: newDeck,
    });

    // Restore card after 2s
    setTimeout(() => {
      set((s) => {
        const d = [...s.deck];
        d[deckIndex] = { ...d[deckIndex], state: 'ready' };
        return { deck: d, deployCooldown: false };
      });
    }, 2000);

    return card;
  },

  setQuestion: (q) => set({ currentQuestion: q, questionState: 'QUESTION', lastAnswerCorrect: null }),

  answerResult: (correct, tokensAwarded, newTotal) => {
    set({
      questionState: correct ? 'ANSWERED' : 'COOLDOWN',
      lastAnswerCorrect: correct,
      lastTokensAwarded: tokensAwarded,
      tokens: Math.min(newTotal, 20),
    });
  },

  clearQuestionState: () => set({ questionState: 'IDLE', currentQuestion: null }),

  setTimeRemaining: (ms) => set({ timeRemaining: ms }),

  setGameOver: (result) => set({ gameOver: true, gameResult: result }),

  reset: () => set({
    tokens: 5, selectedCardIndex: null, deployCooldown: false,
    questionState: 'IDLE', currentQuestion: null, lastAnswerCorrect: null,
    timeRemaining: 300000, gameOver: false, gameResult: null,
    deck: buildDefaultDeck(), handIndices: [0, 1, 2],
  }),
}));

export default useGameStore;
