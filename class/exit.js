import Utils from '../lib/utils.js';

const IMG_ASSET_NAME = 'exit';

class Exit {
  constructor(scene, id, nextMap) {
    this.scene = scene;
    this.id = id;
    this.sprite = null;
    this.nextMap = nextMap;
  }

  static preload(scene) {
    scene.load.image(IMG_ASSET_NAME, 'assets/pink.jpg');
  }

  draw(posX, posY) {
    this.sprite = this.scene.physics.add.sprite(
      Utils.coordToPixel(posX) + Utils.HALF_COMMON_SIZE,
      Utils.coordToPixel(posY) + Utils.HALF_COMMON_SIZE,
      IMG_ASSET_NAME,
    );
  }

  changeMap() {
    Utils.changeMap(this.scene.scene, this.nextMap);
  }
}

export default Exit;
