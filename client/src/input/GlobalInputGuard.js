// /client/src/input/GlobalInputGuard.js
import { useRef, useCallback } from 'react';

// Applied to ALL interactive elements — not just cards and answers.
// Prevents double-clicking lobby buttons, rematch spam, etc.
export function useClickOnce(fn, cooldownMs = 1000) {
  const lastClickRef = useRef(0);
  return useCallback((...args) => {
    const now = Date.now();
    if (now - lastClickRef.current < cooldownMs) return;
    lastClickRef.current = now;
    fn(...args);
  }, [fn, cooldownMs]);
}

// Global keydown protection — disable rapid key repeat for game actions
const KEY_COOLDOWNS = new Map();
window.addEventListener('keydown', (e) => {
  const key = e.key;
  if (KEY_COOLDOWNS.has(key)) return; // key still on cooldown
  KEY_COOLDOWNS.set(key, true);
  setTimeout(() => KEY_COOLDOWNS.delete(key), 300); // 300ms per key
});
