// this

const printBio = function () {
  console.log(`my name is ${this.name}. Large feet? : ${this.hasLargeFeet}`)
};


const creature = {
  name: 'bigfoot',
  hasLargeFeet: true,
  printBio: printBio
}

const creature2 = {
  name: 'el chupacabra',
  hasLargeFeet: false,
  printBio: printBio
}

creature.printBio();
creature2.printBio();