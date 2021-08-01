import { Player } from '../lib/player.js'
import { Utils } from '../lib/utils.js'

export class Map2 extends Phaser.Scene {
  constructor() {
    super({ key: 'map2' });
    this.cursors=null;
    this.player = new Player(this)
  }

  preload() {
    this.player.preload();
    this.load.image('grass', 'assets/grass.jpg');
  }
  
  create() {
    this.cursors = this.input.keyboard.createCursorKeys();
    Utils.fillScene(this, 'grass')

    this.player.create(100, 450);

  }

  update(){
    this.player.keybindings()
  }

}