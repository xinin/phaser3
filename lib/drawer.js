import Utils from './utils.js';
import Exit from '../class/exit.js';

class Drawer {
  static fillScene(scene, config) {
    const mapObjects = {};
    for (let i = 0; i < Utils.MAX_WIDTH; i += 1) {
      for (let j = 0; j < Utils.MAX_HEIGHT; j += 1) {
        scene.add.image(
          (Utils.COMMON_SIZE * i) + Utils.HALF_COMMON_SIZE,
          (Utils.COMMON_SIZE * j) + Utils.HALF_COMMON_SIZE,
          config.ground,
        );
      }
    }

    mapObjects.Player = scene.player;
    mapObjects.Player.draw(config.player.coord.x, config.player.coord.y);

    mapObjects.Exit = {};
    // mapObjects.ExitGroup = scene.physics.add.group(); //Mirar para hacerlo en grupos

    config.exit.forEach((exit) => {
      mapObjects.Exit[exit.id] = new Exit(scene, exit.id, exit.nextMap);
      mapObjects.Exit[exit.id].draw(exit.coord.x, exit.coord.y);
      scene.physics.add.overlap(
        mapObjects.Player.sprite,
        mapObjects.Exit[exit.id].sprite,
        () => mapObjects.Exit[exit.id].changeMap(),
        null, this,
      );
    });

    return mapObjects;
  }
}

export default Drawer;
