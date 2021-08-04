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

  static changeMap(map, nextMap) {
    console.log(map.state);
    map.scene.start(nextMap, map.state);
  }

  // @deprecated borrar cuando borres los dos mapas de pruebas
  static fillScene(scene, ground) {
    for (let i = 0; i < 25; i += 1) {
      for (let j = 0; j < 19; j += 1) {
        scene.add.image(16 + (32 * i), 16 + (32 * j), ground);
      }
    }
  }
}

export default Utils;
