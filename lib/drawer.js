import Utils from './utils.js';
import Exit from '../class/exit.js';
import Barrel from '../class/barrel.js';

const classes = { Barrel };

const dynamicClass = (name) => classes[name];

class Drawer {

  static fillMap2(map, config) {
    const mapObjects = {};
    
    map.physics.world.setFPS(60);

    const tilemap = map.make.tilemap({key: 'map'})
    const tileset = tilemap.addTilesetImage( // get image file name without extension
      config.world.tilemap.image.split('/').slice(-1)[0].split('.')[0],'tile'
    )

    config.world.tilemap.layers.forEach((layer)=>{
        let l = tilemap.createStaticLayer(layer.name, tileset, 0, 0);
        if(layer.collides){
          l.setCollisionByProperty({ collides: true });
        }
        if(layer.player){
          mapObjects.player = map.player;
          mapObjects.player.draw(config.player.coord.x, config.player.coord.y);
          mapObjects.player.stop()
          map.physics.add.collider(mapObjects.player.sprite, l);
          //map.cameras.main.startFollow(mapObjects.player.sprite);
        }
    })

    map.physics.world.setBounds(
      Utils.coordToPixel(config.world.bounds.x[0]),
      Utils.coordToPixel(config.world.bounds.y[0]),
      Utils.coordToPixel(config.world.bounds.x[1]),
      Utils.coordToPixel(config.world.bounds.y[1]),
    );
    map.physics.world.setBoundsCollision(true, true, true, true);

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
