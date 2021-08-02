import Utils from '../lib/utils.js';

class Barrel {
  constructor(scene, args) {
    this.scene = scene;
    this.id = args.id;
    this.coord = args.coord;
    this.sprite = null;
  }

  static get IMG_ASSET_NAME() {
    return 'barrel';
  }

  static preload(scene) {
    scene.load.image(Barrel.IMG_ASSET_NAME, 'assets/barrel.png');
  }

  draw() {
    this.sprite = this.scene.physics.add.sprite(
      Utils.coordToPixel(this.coord.x) + Utils.HALF_COMMON_SIZE,
      Utils.coordToPixel(this.coord.y) + Utils.HALF_COMMON_SIZE,
      Barrel.IMG_ASSET_NAME,
    );
    this.sprite.body.immovable = true;
  }
}

export default Barrel;
