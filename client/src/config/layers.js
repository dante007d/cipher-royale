/**
 * Layer Depth Constants
 * Single source of truth for all Phaser depth values
 */
export const LAYER = {
  GROUND:          0,
  GROUND_DETAILS:  1,   // cracks, moss, scorch marks
  AO:              2,   // ambient occlusion overlay
  LANE:            3,
  CENTER_LINE:     4,
  DECORATIONS:     5,   // barrels, rocks, banners
  TOWER_BASE:      6,
  SHADOWS:         7,   // unit drop shadows
  TROOPS:          8,   // iso-sorted
  TOWER_BODY:      9,   // iso-sorted with troops
  TOWER_TOP:       10,  // battlements, flags — always above troops
  PROJECTILES:     11,
  IMPACTS:         12,  // explosion, spark effects
  DAMAGE_NUMBERS:  13,
  HP_BARS:         14,
  SCREEN_EFFECTS:  15,  // danger pulse, flash
  VIGNETTE:        998,
  FLASH:           999
};
