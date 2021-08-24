import Player from '../../class/player.js';

import Utils from '../../lib/utils.js';
import Drawer from '../../lib/drawer.js';
import config from './config.js';

export default class Map2 extends Phaser.Scene {
  constructor() {
    super({ key: 'map2' });
    this.cursors = null;
    this.player = new Player(this);
    this.config = config;
    this.state = null;
  }

  init(data) {
    this.state = data;
  }

  preload() {
    this.player.preload();
    this.load.image('tile', this.config.world.tilemap.image);
    this.load.tilemapTiledJSON('map', this.config.world.tilemap.json);
  }

  create() {
    this.cursors = this.input.keyboard.createCursorKeys();

    this.state.world.clock.continue(this);

    const mapObjects = Drawer.fillMap2(this, this.config);

  }

  update() {
    this.player.keybindings();
  }
}
