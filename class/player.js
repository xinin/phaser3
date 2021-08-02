import Utils from '../lib/utils.js';

const IMG_ASSET_NAME = 'dude';

class Player {
  constructor(scene) {
    this.scene = scene;
    this.sprite = null;
  }

  preload() {
    this.scene.load.spritesheet(IMG_ASSET_NAME, 'assets/dude.png', { frameWidth: 32, frameHeight: 32 });
  }

  draw(posX, posY) {
    this.sprite = this.scene.physics.add.sprite(
      Utils.coordToPixel(posX) + Utils.HALF_COMMON_SIZE,
      Utils.coordToPixel(posY) + Utils.HALF_COMMON_SIZE,
      IMG_ASSET_NAME,
    );
    this.sprite.setCollideWorldBounds(true);

    this.scene.anims.create({
      key: 'left',
      frames: this.scene.anims.generateFrameNumbers(IMG_ASSET_NAME, { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1,
    });
    this.scene.anims.create({
      key: 'turn',
      frames: [{ key: IMG_ASSET_NAME, frame: 4 }],
      frameRate: 20,
    });
    this.scene.anims.create({
      key: 'right',
      frames: this.scene.anims.generateFrameNumbers(IMG_ASSET_NAME, { start: 5, end: 8 }),
      frameRate: 10,
      repeat: -1,
    });
  }

  keybindings() {
    if (this.scene.cursors.left.isDown) {
      this.sprite.setVelocityX(-160);
      this.sprite.anims.play('left', true);
    } else if (this.scene.cursors.right.isDown) {
      this.sprite.setVelocityX(160);
      this.sprite.anims.play('right', true);
    }
    if (this.scene.cursors.up.isDown) {
      this.sprite.setVelocityY(-160);
    } else if (this.scene.cursors.down.isDown) {
      this.sprite.setVelocityY(160);
    }
    if (!this.scene.cursors.left.isDown
        && !this.scene.cursors.right.isDown
        && !this.scene.cursors.down.isDown
        && !this.scene.cursors.up.isDown) {
      this.sprite.setVelocityX(0);
      this.sprite.setVelocityY(0);
      this.sprite.anims.play('turn');
    }
  }
}

export default Player;
