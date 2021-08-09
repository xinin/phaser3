import Utils from '../lib/utils.js';

const IMG_ASSET_NAME = 'dude';

const STATUS_WAITING = 'WAITING';
const STATUS_WALKING = 'WALKING';

const ENERGY_WALKING = 0.02;

class Player {
  constructor(map) {
    this.map = map;
    this.sprite = null;
    this.status = null;
  }

  show() {
    console.log(this.sprite);
  }

  preload() {
    this.map.load.spritesheet(IMG_ASSET_NAME, 'assets/dude.png', { frameWidth: 32, frameHeight: 32 });
  }

  draw(posX, posY) { // El player si tiene un draw con X e Y por si hay que hacer TPs
    this.sprite = this.map.physics.add.sprite(
      Utils.coordToPixel(posX) + Utils.HALF_COMMON_SIZE,
      Utils.coordToPixel(posY) + Utils.HALF_COMMON_SIZE,
      IMG_ASSET_NAME,
    );
    this.sprite.setCollideWorldBounds(true);

    this.map.anims.create({
      key: 'left',
      frames: this.map.anims.generateFrameNumbers(IMG_ASSET_NAME, { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1,
    });
    this.map.anims.create({
      key: 'turn',
      frames: [{ key: IMG_ASSET_NAME, frame: 4 }],
      frameRate: 20,
    });
    this.map.anims.create({
      key: 'right',
      frames: this.map.anims.generateFrameNumbers(IMG_ASSET_NAME, { start: 5, end: 8 }),
      frameRate: 10,
      repeat: -1,
    });
    this.map.cameras.main.startFollow(this.sprite);
  }

  keybindings() {
    if (this.map.cursors.left.isDown) {
      this.sprite.setVelocityX(-160);
      this.sprite.anims.play('left', true);
      this.status = STATUS_WALKING;
    } else if (this.map.cursors.right.isDown) {
      this.sprite.setVelocityX(160);
      this.sprite.anims.play('right', true);
      this.status = STATUS_WALKING;
    }
    if (this.map.cursors.up.isDown) {
      this.sprite.setVelocityY(-160);
      this.status = STATUS_WALKING;
    } else if (this.map.cursors.down.isDown) {
      this.sprite.setVelocityY(160);
      this.status = STATUS_WALKING;
    }
    if (!this.map.cursors.left.isDown
        && !this.map.cursors.right.isDown
        && !this.map.cursors.down.isDown
        && !this.map.cursors.up.isDown) {
      this.sprite.setVelocityX(0);
      this.sprite.setVelocityY(0);
      this.sprite.anims.play('turn');
      this.status = STATUS_WAITING;
    }
  }

  energyConsumption() {
    if (this.status === STATUS_WALKING) {
      this.map.state.player.energy -= ENERGY_WALKING;
    }
  }
}

export default Player;
