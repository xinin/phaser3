import Utils from '../lib/utils.js';

class Barrel {
  constructor(map, args) {
    this.map = map;
    this.id = args.id;
    this.coord = args.coord;
    this.sprite = null;
  }

  static get IMG_ASSET_NAME() {
    return 'barrel';
  }

  static preload(map) {
    map.load.image(Barrel.IMG_ASSET_NAME, 'assets/barrel.png');
  }

  draw() {
    this.sprite = this.map.physics.add.sprite(
      Utils.coordToPixel(this.coord.x) + Utils.HALF_COMMON_SIZE,
      Utils.coordToPixel(this.coord.y) + Utils.HALF_COMMON_SIZE,
      Barrel.IMG_ASSET_NAME,
    );
    this.sprite.body.immovable = true;
  }
}

export default Barrel;
