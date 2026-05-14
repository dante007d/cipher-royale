export const TROOPS = {
  low: {
    tier:'LOW',  cost:3,  hp:100, damage:45,  speed:2.8, count:5,
    towerDPS:15, atkRange:0.6, spriteScale:0.7, icon:'⚔️',  label:'Infantry',
    desc: 'Swarming dual-wielding foot soldiers.'
  },
  mid: {
    tier:'MID',  cost:5,  hp:320, damage:140, speed:2.2, count:3,
    towerDPS:45, atkRange:0.8, spriteScale:0.9, icon:'🛡️',  label:'Guardian',
    desc: 'Heavy armored sentinels with halberds.'
  },
  high: {
    tier:'HIGH', cost:8, hp:900, damage:450, speed:1.6, count:1,
    towerDPS:120,atkRange:1.2, spriteScale:1.4, icon:'🗿',  label:'Titan',
    desc: 'Colossal monolith carrying a massive hammer.'
  }
};
