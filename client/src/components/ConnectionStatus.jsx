// /client/src/components/ConnectionStatus.jsx
import { useState, useEffect } from 'react';

export default function ConnectionStatus() {
  const [status, setStatus] = useState('connected');
  const [rateLimitMessage, setRateLimitMessage] = useState(null);

  useEffect(() => {
    const onConnect = () => setStatus('connected');
    const onDisconnect = () => setStatus('disconnected');
    const onTerminalFail = () => setStatus('failed');
    
    const onRateLimit = (e) => {
      setRateLimitMessage(e.detail.message);
      setTimeout(() => setRateLimitMessage(null), 3000);
    };

    window.addEventListener('socket_connected', onConnect);
    window.addEventListener('socket_disconnected', onDisconnect);
    window.addEventListener('socket_failed_terminal', onTerminalFail);
    window.addEventListener('rate_limited', onRateLimit);

    return () => {
      window.removeEventListener('socket_connected', onConnect);
      window.removeEventListener('socket_disconnected', onDisconnect);
      window.removeEventListener('socket_failed_terminal', onTerminalFail);
      window.removeEventListener('rate_limited', onRateLimit);
    };
  }, []);

  if (status === 'connected' && !rateLimitMessage) return null;

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-[1000] flex flex-col gap-2 items-center pointer-events-none">
      {status === 'disconnected' && (
        <div className="bg-orange-500/90 text-white px-4 py-2 rounded shadow-lg font-bold animate-pulse">
          ⚠️ Connection Lost — Reconnecting...
        </div>
      )}
      {status === 'failed' && (
        <div className="bg-red-600 text-white px-4 py-2 rounded shadow-lg font-bold">
          🚨 Server Unreachable. Please reload.
        </div>
      )}
      {rateLimitMessage && (
        <div className="bg-yellow-500 text-black px-4 py-2 rounded shadow-lg font-bold">
          ⏳ {rateLimitMessage}
        </div>
      )}
    </div>
  );
}
