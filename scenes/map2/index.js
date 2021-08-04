import Player from '../../class/player.js';

import Utils from '../../lib/utils.js';

export default class Map2 extends Phaser.Scene {
  constructor() {
    super({ key: 'map2' });
    this.cursors = null;
    this.player = new Player(this);
    this.state = null;
  }

  init(data) {
    console.log('map2', data);
    this.state = data;
  }

  preload() {
    this.player.preload();
    this.load.image('grass', 'assets/grass.jpg');
    this.load.image('yellow_grass', 'assets/yellow_grass.jpg');
  }

  create() {
    this.cursors = this.input.keyboard.createCursorKeys();
    Utils.fillScene(this, 'yellow_grass');

    this.player.draw(5, 5);
  }

  update() {
    this.player.keybindings();
  }
}
