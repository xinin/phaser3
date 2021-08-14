import Utils from './utils.js';
import Exit from '../class/exit.js';
import Barrel from '../class/barrel.js';

const classes = { Barrel };

const dynamicClass = (name) => classes[name];

class Drawer {
  static fillMap(map, config) {
    const mapObjects = {};
    // for (let i = 0; i < config.world.bounds.x[1]; i += 1) {
    //  for (let j = 0; j < config.world.bounds.y[1]; j += 1) {
    //    map.add.image(
    //      (Utils.COMMON_SIZE * i) + Utils.HALF_COMMON_SIZE,
    //      (Utils.COMMON_SIZE * j) + Utils.HALF_COMMON_SIZE,
    //      config.world.ground,
    //    );
    //  }
    // }

    map.add.image(0, 0, config.world.background);

    map.physics.world.setFPS(60);

    // No se porque no funciona
    // const tile = map.add.tileSprite(
    //  Utils.coordToPixel(config.world.bounds.x[0]) + Utils.HALF_COMMON_SIZE,
    //  Utils.coordToPixel(config.world.bounds.y[0]) + Utils.HALF_COMMON_SIZE,
    //  Utils.coordToPixel(config.world.bounds.x[1]) + Utils.HALF_COMMON_SIZE,
    //  Utils.coordToPixel(config.world.bounds.y[1]) + Utils.HALF_COMMON_SIZE,
    //  config.world.ground,
    // );

    map.physics.world.setBounds(
      Utils.coordToPixel(config.world.bounds.x[0]),
      Utils.coordToPixel(config.world.bounds.y[0]),
      Utils.coordToPixel(config.world.bounds.x[1]),
      Utils.coordToPixel(config.world.bounds.y[1]),
    );
    map.physics.world.setBoundsCollision(true, true, true, true);

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
