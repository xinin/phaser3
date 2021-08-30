export default {
  player: {
    coord: { x: 12, y: 12 },
  },
  world: {
    tilemap: {
      json: 'scenes/map3/map1.json',
      image:'assets/spritesheet/hyptosis_til-art-batch-2.png', 
      layers: [
        {
          name: 'Ground'
        },
        {
          name: 'Objects',
          collides: true,
          player: true
        },
        {
          name: 'BellowPlayer'
        }
      ]
    },
    bounds: {
      x: [0, 15],
      y: [0, 15],
    },
  },
  exit: [
    {
      id: 'exit1',
      coord: { x: 10, y: 10 },
      nextMap: 'map2',
    },
  ],
  staticObjects: [
    {
      type: 'Barrel',
      id: 'barrel1',
      coord: { x: 0, y: 0 },
    },
    {
      type: 'Barrel',
      id: 'barrel2',
      coord: { x: 15, y: 15 },
    },
    {
      type: 'Barrel',
      id: 'barrel3',
      coord: { x: 10, y: 11 },
    },
  ],
};
