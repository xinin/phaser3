export default {
  player: {
    coord: { x: 11, y: 10 },
  },
  world: {
    ground: 'yellow_grass',
    bounds: {
      x: [0, 55],
      y: [0, 40],
    },
  },
  exit: [
    {
      id: 'exit1',
      coord: { x: 12, y: 10 },
      nextMap: 'map2',
    },
    {
      id: 'exit2',
      coord: { x: 19, y: 10 },
      nextMap: 'map3',
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
      coord: { x: 25, y: 20 },
    },
    {
      type: 'Barrel',
      id: 'barrel3',
      coord: { x: 10, y: 11 },
    },
  ],
};
