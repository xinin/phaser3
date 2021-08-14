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
    this.load.image('tiles', 'assets/spritesheet/hyptosis_til-art-batch-2.png');
    this.load.tilemapTiledJSON('map', 'scenes/map2/map1.json');
  }

  create() {
    this.cursors = this.input.keyboard.createCursorKeys();
    // Utils.fillScene(this, 'yellow_grass');

    const map = this.make.tilemap({ key: 'map' });
    const tileset = map.addTilesetImage('hyptosis_til-art-batch-2', 'tiles');

    const belowLayer = map.createStaticLayer('Ground', tileset, 0, 0);
    const worldLayer = map.createStaticLayer('Objects', tileset, 0, 0);

    worldLayer.setCollisionByProperty({ collides: true });

    this.physics.world.setBounds(0, 0, 1280, 1280);
    this.physics.world.setBoundsCollision(true, true, true, true);

    this.player.draw(5, 5);
    this.physics.add.collider(this.player.sprite, worldLayer);

    const otra = map.createStaticLayer('BellowPlayer', tileset, 0, 0);


    // this.cameras.main.startFollow(this.player.sprite);
  }

  update() {
    this.player.keybindings();
  }
}
