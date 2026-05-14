export const GAME_CONFIG = {
  TICK_RATE_MS:           40,       // 25 TPS (Optimized for Network stability)
  GAME_DURATION_MS:       300000,   // 5 minutes
  TOKEN_CAP:              20,
  PASSIVE_TOKEN_MS:       8000,
  PASSIVE_TOKEN_AMOUNT:   1,
  QUESTION_TIMEOUT_MS:    15000,
  WRONG_COOLDOWN_MS:      2000,
  RESULT_FLASH_MS:        1500,
  DEPLOY_COOLDOWN_MS:     1500,
  COLLISION_RANGE:        0.9,     // world units
  RECONNECT_TIMEOUT_MS:   15000,
  FIELD: {
    LANE_X:   { left: -5.5, center: 0, right: 5.5 },
    SPAWN_Z:  { playerA: 8.5,  playerB: -8.5 }, // Adjusted spawn
    WIDTH:    14,
    DEPTH:    40 // Match ground size
  }
};

export const TOWER_POSITIONS = {
  playerA: {
    main: { x: 0,    y: 18.5,  id: 'a_main', type: 'main', gateY: 18.0 },
    sub1: { x: -5.5, y: 15.0,  id: 'a_sub1', type: 'sub1', lane: 'left',   gateY: 14.5 },
    sub2: { x: 5.5,  y: 15.0,  id: 'a_sub2', type: 'sub2', lane: 'right',  gateY: 14.5 },
    sub3: { x: 0,    y: 13.0,  id: 'a_sub3', type: 'sub3', lane: 'center', gateY: 12.0 }
  },
  playerB: {
    main: { x: 0,    y: -18.5, id: 'b_main', type: 'main', gateY: -18.0 },
    sub1: { x: -5.5, y: -15.0, id: 'b_sub1', type: 'sub1', lane: 'left',   gateY: -14.5 },
    sub2: { x: 5.5,  y: -15.0, id: 'b_sub2', type: 'sub2', lane: 'right',  gateY: -14.5 },
    sub3: { x: 0,    y: -13.0, id: 'b_sub3', type: 'sub3', lane: 'center', gateY: -12.0 }
  }
};
