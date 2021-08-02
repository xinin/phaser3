export default {
  player: {
    coord: { x: 11, y: 10 },
  },
  ground: 'yellow_grass',
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
      coord: { x: 5, y: 5 },
    },
    {
      type: 'Barrel',
      id: 'barrel2',
      coord: { x: 6, y: 5 },
    },
    {
      type: 'Barrel',
      id: 'barrel3',
      coord: { x: 7, y: 5 },
    },
  ],
};
