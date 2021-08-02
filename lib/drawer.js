import Utils from './utils.js';
import Exit from '../class/exit.js';
import Barrel from '../class/barrel.js';

const classes = { Barrel };

const dynamicClass = (name) => classes[name];

class Drawer {
  static fillMap(map, config) {
    const mapObjects = {};
    for (let i = 0; i < Utils.MAX_WIDTH; i += 1) {
      for (let j = 0; j < Utils.MAX_HEIGHT; j += 1) {
        map.add.image(
          (Utils.COMMON_SIZE * i) + Utils.HALF_COMMON_SIZE,
          (Utils.COMMON_SIZE * j) + Utils.HALF_COMMON_SIZE,
          config.ground,
        );
      }
    }

    mapObjects.player = map.player;
    mapObjects.player.draw(config.player.coord.x, config.player.coord.y);

    mapObjects.exit = {};
    // mapObjects.ExitGroup = map.physics.add.group(); //Mirar para hacerlo en grupos

    config.exit.forEach((exit) => {
      mapObjects.exit[exit.id] = new Exit(map, exit);
      mapObjects.exit[exit.id].draw();
      map.physics.add.overlap(
        mapObjects.player.sprite,
        mapObjects.exit[exit.id].sprite,
        () => mapObjects.exit[exit.id].changeMap(),
        null, this,
      );
    });

    mapObjects.staticObjects = {};
    config.staticObjects.forEach((obj) => {
      const DynamicReference = dynamicClass(obj.type);
      mapObjects.staticObjects[obj.id] = new DynamicReference(map, obj);
      mapObjects.staticObjects[obj.id].draw();
      map.physics.add.collider(mapObjects.player.sprite, mapObjects.staticObjects[obj.id].sprite);
    });

    return mapObjects;
  }
}

export default Drawer;
