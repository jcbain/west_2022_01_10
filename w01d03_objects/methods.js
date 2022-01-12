// methods

const addFive = function(num) {
  return num + 5;
}

const creature = {
  name: 'bigfoot',
  location: 'Pacific Northwest',
  // addFive: function(num) {
  //   return num + 5;
  // },
  addFive: addFive
};

console.log(creature.addFive(4))
