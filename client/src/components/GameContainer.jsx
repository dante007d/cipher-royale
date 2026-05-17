import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as THREE from 'three';
import SocketService from '../services/SocketService.js';

// Three.js Engine & World
import { createRenderer, createCSS2DRenderer, createComposer } from '../engine/Renderer.js';
import { createIsoCamera, resizeCamera, createCameraControls } from '../engine/Camera.js';
import { setupLighting } from '../engine/Lighting.js';
import { GameLoop } from '../engine/GameLoop.js';
import { StateReconciler } from '../engine/StateReconciler.js';

import { createGround } from '../world/Ground.js';
import { setupEnvironment } from '../world/Environment.js';
import { buildTowerMesh } from '../world/TowerBuilder.js';
import { createTowerHPBar } from '../world/HPBars.js';
import { TroopPool } from '../world/TroopPool.js';
import { ParticleSystem } from '../engine/ParticleSystem.js';
import { LaneInput } from '../input/LaneInput.js';

import { DisposalRegistry } from '../engine/DisposalRegistry.js';
import { attachContextLossHandlers } from '../engine/ContextRecovery.js';
import { tearDownScene } from '../engine/SceneTeardown.js';

// React HUD
import HUD from './HUD.jsx';
import CardHand from './CardHand.jsx';
import QuestionPanel from './QuestionPanel.jsx';

import { TOWER_POSITIONS } from '@shared/gameConfig.js';

export default function GameContainer() {
  const canvasRef = useRef(null);
  const engineRef = useRef(null);
  const navigate = useNavigate();
  const [contextLost, setContextLost] = useState(false);

  useEffect(() => {
    if (!canvasRef.current) return;

    // ── INITIALIZATION WITH DISPOSAL REGISTRY ─────────────────
    const disposalRegistry = new DisposalRegistry();
    const scene = new THREE.Scene();
    const camera = createIsoCamera(window.innerWidth, window.innerHeight);

    const renderer = createRenderer(canvasRef.current);
    const css2d = createCSS2DRenderer();
    const { composer, vignettePass } = createComposer(renderer, scene, camera);

    const cameraControls = createCameraControls(camera, renderer.domElement);

    // ── WEBGL CONTEXT RECOVERY ──────────────────────────────────
    const removeContextHandlers = attachContextLossHandlers(
      renderer,
      () => setContextLost(true),
      () => window.location.reload() // Hard reload on restore is safest
    );

    // ── SETUP SYSTEMS ───────────────────────────────────────────
    const lighting = setupLighting(scene);
    disposalRegistry.trackTree(lighting.ambientLight);
    disposalRegistry.trackTree(lighting.directionalLight);

    const environment = setupEnvironment(scene);
    const particles = new ParticleSystem(scene);
    const ground = createGround(scene);
    
    disposalRegistry.trackTree(ground.mesh);
    disposalRegistry.trackTree(environment.skyBox);

    const towerMeshes = { playerA: {}, playerB: {} };
    ['playerA', 'playerB'].forEach(player => {
      Object.entries(TOWER_POSITIONS[player]).forEach(([key, pos]) => {
        const mesh = buildTowerMesh(pos.type, player, scene);
        mesh.position.set(pos.x, 0, pos.y);
        createTowerHPBar(mesh);
        towerMeshes[player][key] = mesh;
        disposalRegistry.trackTree(mesh);
      });
    });

    const troopPool = new TroopPool(scene, particles);
    const laneInput = new LaneInput(camera, ground.clickZones, scene);

    const systems = {
      lighting,
      environment,
      particles,
      ground,
      towerMeshes,
      troopPool,
      laneInput,
      vignettePass,
      cameraControls,
      towers: [...Object.values(towerMeshes.playerA), ...Object.values(towerMeshes.playerB)]
    };

    const stateReconciler = new StateReconciler(systems);
    const gameLoop = new GameLoop(renderer, css2d, composer, scene, camera, systems);

    engineRef.current = { gameLoop, stateReconciler, systems, css2d, disposalRegistry };

    // ── SOCKET LOGIC ───────────────────────────────────────────
    const SERVER_URL = import.meta.env.VITE_SERVER_URL || (import.meta.env.PROD ? 'https://cipher-royale-1.onrender.com' : `http://${window.location.hostname}:3001`);
    console.log('🔌 Connecting to game server at:', SERVER_URL);
    SocketService.connect(SERVER_URL);
    
    if (!window.__cipherClash) {
      const stored = localStorage.getItem('cipherClash_room');
      if (stored) window.__cipherClash = JSON.parse(stored);
    }

    if (window.__cipherClash) {
      console.log('[GameContainer] rejoining room:', window.__cipherClash.roomCode);
      SocketService.emit('rejoin_room', {
        roomCode: window.__cipherClash.roomCode,
        playerName: window.__cipherClash.playerName,
      });
    }

    SocketService.on('game_state', (state) => {
      stateReconciler.apply(state);
    });

    SocketService.on('combat_event', (evt) => {
      const pos = new THREE.Vector3(evt.x, 0.5, evt.y);
      if (evt.type === 'clash') {
        particles.emitClash(pos);
      } else if (evt.type === 'explosion') {
        particles.emitExplosion(pos, 2.0, 0xffaa00);
      } else if (evt.type === 'tower_hit') {
        particles.emitClash(pos);
      } else if (evt.type === 'tower_fall') {
        particles.emitTowerDestruction(pos);
      }
    });

    SocketService.on('game_over', (data) => {
      window.__cipherClashResult = data;
      setTimeout(() => navigate('/result'), 1500);
    });

    // ── START ENGINE ───────────────────────────────────────────
    gameLoop.start();

    const handleResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      css2d.setSize(window.innerWidth, window.innerHeight);
      composer.setSize(window.innerWidth, window.innerHeight);
      resizeCamera(camera, window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // ── CLEANUP ────────────────────────────────────────────────
    return () => {
      gameLoop.stop();
      window.removeEventListener('resize', handleResize);
      removeContextHandlers();
      
      SocketService.off('game_state');
      SocketService.off('combat_event');
      SocketService.off('game_over');

      if (css2d.domElement.parentNode) {
        css2d.domElement.parentNode.removeChild(css2d.domElement);
      }
      
      if (cameraControls) cameraControls.dispose();
      laneInput.dispose();
      
      // Perform safe teardown
      tearDownScene(scene);
      disposalRegistry.disposeAll();
      renderer.dispose();
    };
  }, [navigate]);

  return (
    <div className="game-wrapper fixed inset-0 overflow-hidden bg-slate-950">
      {contextLost && (
        <div className="absolute inset-0 bg-black/80 z-50 flex items-center justify-center text-white flex-col">
          <h2 className="text-2xl font-bold mb-2">Graphics Context Lost</h2>
          <p>Please wait while the engine attempts to recover...</p>
        </div>
      )}
      <canvas ref={canvasRef} className="block w-full h-full" />
      <HUD />
      <QuestionPanel />
      <CardHand />
    </div>
  );
}
