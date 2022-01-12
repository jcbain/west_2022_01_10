const relatives = ['yeti', 'gigantopithecus', 'chewbacca'];

for( const relative of relatives ) {
  console.log('the relative is', relative)
}


const creature = {
  name: 'bigfoot', 
  hasLargeFeet: true,
  location: 'pacific northwest'
};

creature.relatives = ['yeti', 'gigantopithecus', 'chewbacca'];;



for (const key in creature) {
  console.log(key, " : ", creature[key])
}

