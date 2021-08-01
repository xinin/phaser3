import { Player } from '../lib/player.js'
import { Utils } from '../lib/utils.js'

export class Map extends Phaser.Scene {
  constructor() {
    super({ key: 'map' });
    this.cursors=null;
    this.player;
  }

  preload() {
    this.load.image('yellow_grass', 'assets/yellow_grass.jpg');
    this.load.spritesheet('dude', 'assets/dude.png', { frameWidth: 32, frameHeight: 48 });
    this.load.image('platform', 'assets/platform.png');
  }
  
  static goMap2(){
      console.log("overlap");
      this.scene.start('map2')
  }

  create() {
    this.cursors = this.input.keyboard.createCursorKeys();
    Utils.fillScene(this, 'yellow_grass')
    
    var platforms = this.physics.add.staticGroup();
    platforms.create(900, 600, 'platform');

    this.player = new Player(this, 100, 450);

    //this.physics.add.collider(this.player.sprite, platforms);
    this.physics.add.overlap(this.player.sprite, platforms, Map.goMap2 , null, this);

  }

  update(){
    this.player.keybindings()
  }

}