const DIRECTORY_SAVE_DATA = './../saves';

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
    if(map.player) {
      map.player.destroy();
    }
    map.scene.stop(map.scene.settings.key);
    map.scene.start(nextMap, map.state);
  }

  // vamos a probar con esto + https://www.andy-howard.com/phaser-to-steam/ a ver si vale con el args de chromium
  static saveGame(state) {
    localStorage.setItem(state.world.name, JSON.stringify(state));
  }

  static loadGame(name) {
    return localStorage.getItem(name);
  }

}

export default Utils;
