import { useEffect, useRef } from 'react';
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

// React HUD
import HUD from './HUD.jsx';
import CardHand from './CardHand.jsx';
import QuestionPanel from './QuestionPanel.jsx';

import { TOWER_POSITIONS } from '@shared/gameConfig.js';

export default function GameContainer() {
  const canvasRef = useRef(null);
  const engineRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!canvasRef.current) return;

    // 1. Initialize Scene & Camera
    const scene = new THREE.Scene();
    // No scene.background — the sky sphere in Environment handles it
    const camera = createIsoCamera(window.innerWidth, window.innerHeight);

    // 2. Initialize Renderers
    const renderer = createRenderer(canvasRef.current);
    const css2d = createCSS2DRenderer();
    const { composer, vignettePass } = createComposer(renderer, scene, camera);

    // 2b. Camera controls — orbit with ground clamping
    const cameraControls = createCameraControls(camera, renderer.domElement);

    // 3. Setup Systems
    const lighting = setupLighting(scene);
    const environment = setupEnvironment(scene);
    const particles = new ParticleSystem(scene);
    const ground = createGround(scene);
    
    // Tower Meshes
    const towerMeshes = { playerA: {}, playerB: {} };
    ['playerA', 'playerB'].forEach(player => {
      Object.entries(TOWER_POSITIONS[player]).forEach(([key, pos]) => {
        const mesh = buildTowerMesh(pos.type, player, scene);
        mesh.position.set(pos.x, 0, pos.y); // Map pos.y to Z
        createTowerHPBar(mesh);
        towerMeshes[player][key] = mesh;
      });
    });

    const troopPool = new TroopPool(scene, particles);
    const laneInput = new LaneInput(camera, ground.clickZones);

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

    engineRef.current = { gameLoop, stateReconciler, systems, css2d };

    // 4. Socket Listeners
    SocketService.connect();
    
    // Rejoin if necessary
    if (window.__cipherClash) {
      SocketService.emit('rejoin_room', {
        roomCode: window.__cipherClash.roomCode,
        playerName: window.__cipherClash.playerName,
      });
    }

    SocketService.on('game_state', (state) => {
      stateReconciler.apply(state);
    });

    SocketService.on('combat_event', (evt) => {
      if (evt.type === 'clash') {
        particles.emitDeathMotes(new THREE.Vector3(evt.x, 0.5, evt.y));
      } else if (evt.type === 'explosion') {
        particles.emitDeathMotes(new THREE.Vector3(evt.x, 0.5, evt.y));
      }
    });

    SocketService.on('game_over', (data) => {
      window.__cipherClashResult = data;
      setTimeout(() => navigate('/result'), 1500);
    });

    // 5. Start Engine
    gameLoop.start();

    // 6. Resize handler
    const handleResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      css2d.setSize(window.innerWidth, window.innerHeight);
      composer.setSize(window.innerWidth, window.innerHeight);
      resizeCamera(camera, window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      gameLoop.stop();
      window.removeEventListener('resize', handleResize);
      if (css2d.domElement.parentNode) {
        css2d.domElement.parentNode.removeChild(css2d.domElement);
      }
      SocketService.off('game_state');
      SocketService.off('combat_event');
      SocketService.off('game_over');
      if (cameraControls) cameraControls.dispose();
    };
  }, [navigate]);

  return (
    <div className="game-wrapper fixed inset-0 overflow-hidden bg-slate-950">
      <canvas ref={canvasRef} className="block w-full h-full" />
      <HUD />
      <QuestionPanel />
      <CardHand />
    </div>
  );
}
