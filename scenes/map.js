import Player from '../class/player.js';
import Exit from '../class/exit.js';

import Drawer from '../lib/drawer.js';

import config from '../scenes_config/map.js';

export default class Map extends Phaser.Scene {
  constructor() {
    super({ key: 'map' });
    this.cursors = null;
    this.config = config;
    this.player = new Player(this);
  }

  preload() {
    this.player.preload();
    Exit.preload(this);

    this.load.image('yellow_grass', 'assets/yellow_grass.jpg');
    this.load.image('platform', 'assets/platform.png');
  }

  create() {
    this.cursors = this.input.keyboard.createCursorKeys();
    const mapObjects = Drawer.fillScene(this, this.config);

    console.log(mapObjects);

    // var platforms = this.physics.add.staticGroup();
    // platforms.create(900, 600, 'platform');

    // const exit1 = new Exit(this, 'map2');
    // exit1.draw(4, 19);

    // const exit2 = new Exit(this, 'map2');
    // exit2.draw(10, 10);

    // this.player.draw(100, 450);

    // this.physics.add.collider(this.player.sprite, platforms);
    // this.physics.add.overlap(
    //  this.player.sprite,
    //  exit1.sprite,
    //  () => exit1.changeMap(),
    //  null, this,
    // );
  }

  update() {
    this.player.keybindings();
  }
}
