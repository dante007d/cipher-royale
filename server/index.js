import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import { fileURLToPath } from 'url';
import path from 'path';
import { registerSocketHandlers } from './socketHandlers.js';
import adminRoutes from './routes/admin.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: process.env.CLIENT_URL ? [process.env.CLIENT_URL, 'http://localhost:5173'] : '*',
    methods: ['GET', 'POST'],
  },
});

// ── Middleware ──────────────────────────────
app.use(express.json());

// ── Serve static client build (production) ──
const publicPath = path.join(__dirname, 'public');
app.use(express.static(publicPath));

// ── Health check ───────────────────────────
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', time: Date.now() });
});

// ── Admin API (before SPA fallback) ────────
app.use('/api/admin', adminRoutes(io));

// ── SPA fallback (production) ──────────────
app.get('*', (req, res) => {
  const indexPath = path.join(publicPath, 'index.html');
  res.sendFile(indexPath, (err) => {
    if (err) res.status(404).json({ error: 'Not found' });
  });
});

// ── Socket handlers ────────────────────────
registerSocketHandlers(io);

// Make io accessible for game loop later
export { io };

// ── Start server ───────────────────────────
const PORT = process.env.PORT || 3001;
httpServer.listen(PORT, () => {
  console.log(`\n  ⚔️  CIPHER CLASH SERVER`);
  console.log(`  🌐 http://localhost:${PORT}`);
  console.log(`  🔌 Socket.IO ready\n`);
});
