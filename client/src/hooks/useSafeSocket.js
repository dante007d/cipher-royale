// /client/src/hooks/useSafeSocket.js
import { useEffect, useRef } from 'react';
import SocketService from '../services/SocketService.js';

// Auto-cleans up listeners on unmount.
// Prevents memory leaks if React hot-reloads or components remount.
export function useSafeSocket(event, callback) {
  const savedCallback = useRef(callback);

  // Remember the latest callback if it changes.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (!event) return;

    const handler = (...args) => {
      try {
        if (savedCallback.current) {
          savedCallback.current(...args);
        }
      } catch (e) {
        console.error(`[useSafeSocket] Error in handler for event '${event}':`, e);
      }
    };

    SocketService.on(event, handler);
    return () => SocketService.off(event);
  }, [event]);
}
