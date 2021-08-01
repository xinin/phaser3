import { Map } from './scenes/map.js'
import { Map2 } from './scenes/map2.js'


const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
    },
    scene: [Map, Map2]
};

new Phaser.Game(config);