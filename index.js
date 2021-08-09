import Map from './scenes/map/index.js';
import Map2 from './scenes/map2/index.js';
import Map3 from './scenes/map3/index.js';
import Menu from './scenes/menu/index.js';

const config = {
  type: Phaser.AUTO,
  width: 1280,
  height: 720,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0 },
      debug: false,
    },
  },
  scene: [Menu, Map, Map2, Map3],
  pixelArt: true,
};

new Phaser.Game(config);
