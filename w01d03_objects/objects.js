const creature = {
  name: 'Harry',
  type: 'bigfoot',
  hasLargeFeet: true,
  relatives: ['yeti', 'gigantopithecus', 'chewbacca']
};

// dot notation
console.log("dot notation: ", creature.name);

// square bracket notation
const key = "relatives";
console.log("square bracket notation: ", creature[key])

