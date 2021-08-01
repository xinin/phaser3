import { Player } from '../lib/player.js'
import { Utils } from '../lib/utils.js'

export class Map2 extends Phaser.Scene {
  constructor() {
    super({ key: 'map2' });
    this.cursors=null;
    this.player;
  }

  preload() {
    this.load.image('grass', 'assets/grass.jpg');
    this.load.spritesheet('dude', 'assets/dude.png', { frameWidth: 32, frameHeight: 48 });
  }
  
  create() {
    this.cursors = this.input.keyboard.createCursorKeys();
    Utils.fillScene(this, 'grass')
    this.player = new Player(this, 100, 450);
  }

  update(){
    this.player.keybindings()
  }
  
}