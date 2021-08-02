class Utils {
  static get MAX_WIDTH() {
    return 25;
  }

  static get MAX_HEIGHT() {
    return 20;
  }

  static get COMMON_SIZE() { // Las casillas van a ser de 32x32 pixels
    return 32;
  }

  static get HALF_COMMON_SIZE() { // La mitad para tenerla a mano para los calculos en dibujoss
    return Utils.COMMON_SIZE / 2;
  }

  static coordToPixel(coord) {
    return coord * 32;
  }

  static changeMap(scene, map) {
    scene.start(map);
  }

  static fillScene(scene, ground) {
    for (let i = 0; i < 25; i++) {
      for (let j = 0; j < 19; j++) {
        scene.add.image(16 + (32 * i), 16 + (32 * j), ground);
      }
    }
  }
}

export default Utils;
