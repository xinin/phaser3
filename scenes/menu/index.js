import Clock from '../../lib/clock.js';
import Utils from '../../lib/utils.js';

export default class Menu extends Phaser.Scene {
  constructor() {
    super({ key: 'menu' });
  }

  create() {
    const helloButton = this.add.text(100, 100, 'Start New Game!', { fill: '#0f0' });
    helloButton.setInteractive();

    // helloButton.on('pointerover', () => { console.log('pointerover'); });

    helloButton.on('pointerdown', () => this.startNewGame());

    // this.scene.start('map');
  }

  startNewGame() {
    this.state = {
      player: {
        max_health: 100,
        max_energy: 100,
        health: 100,
        energy: 100,
      },
      world: {
        clock: new Clock(),
      },
    };

    Utils.changeMap(this, 'map');
  }
}
