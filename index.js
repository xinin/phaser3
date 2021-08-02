import Map from './scenes/map/index.js';
import Map2 from './scenes/map2/index.js';
import Map3 from './scenes/map3/index.js';

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 640,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0 },
      debug: false,
    },
  },
  scene: [Map, Map2, Map3],
};

new Phaser.Game(config);
