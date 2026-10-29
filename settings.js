// Keep tuning separate from game behaviour so features can be developed independently.
window.COIN_DASH = {
  width: 800,
  height: 500,
  roundSeconds: 60,
  playerSpeed: 240,
  droneSpeed: 105,
  droneCount: 3,
  colors: { background: 0x101c31, player: 0x71e8ce, coin: 0xffd166, drone: 0xff657a }
};

// Difficulty presets; the active preset overrides droneCount, droneSpeed and roundSeconds above.
Object.assign(window.COIN_DASH, {
  defaultDifficulty: 'normal',
  difficulties: {
    easy:   { label: 'Easy',   droneCount: 2, droneSpeed: 80,  roundSeconds: 75 },
    normal: { label: 'Normal', droneCount: 3, droneSpeed: 105, roundSeconds: 60 },
    hard:   { label: 'Hard',   droneCount: 5, droneSpeed: 150, roundSeconds: 45 }
  }
});
