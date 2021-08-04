import Utils from '../lib/utils.js';

class Exit {
  constructor(map, args) {
    this.map = map;
    this.id = args.id;
    this.coord = args.coord;
    this.nextMap = args.nextMap;
    this.sprite = null;
  }

  static get IMG_ASSET_NAME() {
    return 'exit';
  }

  static preload(map) {
    map.load.image(Exit.IMG_ASSET_NAME, 'assets/pink.jpg');
  }

  draw() {
    this.sprite = this.map.physics.add.sprite(
      Utils.coordToPixel(this.coord.x) + Utils.HALF_COMMON_SIZE,
      Utils.coordToPixel(this.coord.y) + Utils.HALF_COMMON_SIZE,
      Exit.IMG_ASSET_NAME,
    );
  }

  changeMap() {
    console.log('ChangeMap', this.map);
    Utils.changeMap(this.map, this.nextMap);
  }
}

export default Exit;
