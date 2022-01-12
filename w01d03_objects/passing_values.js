// primitive pass by value
const creature = 'bigfoot';

const printDifferentCreature = function(someCreature) {
  someCreature = 'el chupacabra';
  console.log('creature during the function call:', someCreature);
};

console.log("creature before function call:", creature); // bigfoot
printDifferentCreature(); // el chupacapra
console.log("creature after function call:", creature); // bigfoot

// objects
const creatureObject = {
  name: 'bigfoot',
  isTall: true
};

const printDifferentCreatureName = function(obj) {
  obj.name = 'el chupacabra';
  console.log("creature name during function call:", obj.name);
};

// console.log("object before function call:", creatureObject);
// printDifferentCreatureName(creatureObject);
// console.log("object after function call:", creatureObject);

