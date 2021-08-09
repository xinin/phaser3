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
    // Utils.fillScene(this, 'yellow_grass');

    this.add.tileSprite(0, 0, 800, 640, 'yellow_grass');
    this.physics.world.setBounds(0, 0, 800, 640);
    this.physics.world.setBoundsCollision(true, true, true, true);

    this.player.draw(5, 5);
    this.cameras.main.startFollow(this.player.sprite);
  }

  update() {
    this.player.keybindings();
  }

  render() {
    this.debug.cameraInfo(this.camera, 32, 32);
    this.debug.spriteCoords(this.player.sprite, 32, 500);
  }
}
