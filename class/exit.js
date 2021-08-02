import Utils from '../lib/utils.js';

class Exit {
  constructor(scene, id, nextMap) {
    this.scene = scene;
    this.id = id;
    this.sprite = null;
    this.nextMap = nextMap;
  }

  static get IMG_ASSET_NAME() {
    return 'exit';
  }

  static preload(scene) {
    scene.load.image(Exit.IMG_ASSET_NAME, 'assets/pink.jpg');
  }

  draw(posX, posY) {
    this.sprite = this.scene.physics.add.sprite(
      Utils.coordToPixel(posX) + Utils.HALF_COMMON_SIZE,
      Utils.coordToPixel(posY) + Utils.HALF_COMMON_SIZE,
      Exit.IMG_ASSET_NAME,
    );
  }

  changeMap() {
    Utils.changeMap(this.scene.scene, this.nextMap);
  }
}

export default Exit;
