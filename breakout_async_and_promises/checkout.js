const store = ['🌮', '🍕', '🥑', '🥖', '🧄', '🧇', '🫐', '🥦', '🥟', '🍙', '🌯', '🥗', '🍣', '🍩', '🥮', '🍦'];

const grabItem = (store) => {
  const numOptions = store.length;
  const randomId = Math.round(Math.random() * (numOptions - 1));
  const randomItem = store[randomId];
  return randomItem;
};


const checkout = (customerNum, item) => {
  console.log(`(${customerNum}) 🛒 Thank you for buying ${item}. Have a nice day!`);
}; 

const askCustomerService = (customerNum, item, callback) => {
  console.log(`\t 🤷 Hello, customer service, where can I find ${item}?`);
  const timer = Math.round(Math.random() * 3) * 1000;
  console.log(`\t🕵️‍♀️ let me go grab those ${item} for you. it will take me ${timer/1000} seconds`);
  setTimeout(() => {

    if(Math.random() < 0.5) {
      callback(`\t🚨🕵️‍♀️ Sorry, I couldn't find ${item}`, customerNum);
    } else {

      console.log(`\t 🕵️‍♀️ here are your ${item}!`);
      callback(null, customerNum, item)
    }
  }, timer)
} 

const checkoutAllItems = (customerNum, cart) => {
  for(const item of cart) {
    checkout(customerNum, item);
  } 
}

// invoke askCustomerService
const groceryCart = [];
askCustomerService(0, grabItem(store), (err, customerNum, foodItem) => {
  if(err) {
    return console.log(err)
  }
  groceryCart.push(foodItem)
  askCustomerService(customerNum, grabItem(store), (err, customerNum, foodItem) => {
    if(err) {
      console.log(err)
      return checkoutAllItems(customerNum, groceryCart) 
    }
    groceryCart.push(foodItem)
    checkoutAllItems(customerNum, groceryCart)
  })
});
checkout(1, grabItem(store));
checkout(2, grabItem(store));



