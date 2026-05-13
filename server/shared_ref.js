// Shared reference — re-exports for server (avoids ESM workspace issues)
import { createRequire } from 'module';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Direct import from shared
const troopConfigPath = path.join(__dirname, '..', 'shared', 'troopConfig.js');
const towerConfigPath = path.join(__dirname, '..', 'shared', 'towerConfig.js');
const gameConfigPath = path.join(__dirname, '..', 'shared', 'gameConfig.js');

export const { TROOPS } = await import(`file://${troopConfigPath.replace(/\\/g, '/')}`);
export const { TOWERS } = await import(`file://${towerConfigPath.replace(/\\/g, '/')}`);
export const { GAME_CONFIG, TOWER_POSITIONS } = await import(`file://${gameConfigPath.replace(/\\/g, '/')}`);
