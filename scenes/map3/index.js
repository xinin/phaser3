import Player from '../../class/player.js';

import Utils from '../../lib/utils.js';

export default class Map3 extends Phaser.Scene {
  constructor() {
    super({ key: 'map3' });
    this.cursors = null;
    this.player = new Player(this);
  }

  preload() {
    this.player.preload();
    this.load.image('grass', 'assets/grass.jpg');
  }

  create() {
    
    this.cursors = this.input.keyboard.createCursorKeys();
    Utils.fillScene(this, 'grass');

    this.player.draw(15, 15);
  }

  update() {
    this.player.keybindings();
  }
}
