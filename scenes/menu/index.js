import Clock from '../../lib/clock.js';
import Utils from '../../lib/utils.js';

export default class Menu extends Phaser.Scene {
  constructor() {
    super({ key: 'menu' });
  }

  create() {
    const helloButton = this.add.text(100, 100, 'Start New Game!', { fill: '#0f0' });
    helloButton.setInteractive();
    helloButton.on('pointerdown', () => this.startNewGame());

    const saveButton = this.add.text(100, 200, 'Save Game!', { fill: '#0f0' });
    saveButton.setInteractive();
    saveButton.on('pointerdown', () => this.saveGame());
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
        name: 'myNewGame',
        clock: new Clock(),
      },
    };

    Utils.changeMap(this, 'map2');
  }

  // test function
  saveGame() {
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

    Utils.save(this.state);
  }
}
