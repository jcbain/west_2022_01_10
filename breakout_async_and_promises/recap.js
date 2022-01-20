// // js -> synchronous
// const fs = require('fs');

// fs.readFile('data/sample100000.html', { encoding: 'utf-8'}, (err, data) => {
//   if(err) {
//     return console.log(err);
//   }
//   console.log('(1) 100000 words')
// });

// fs.readFile('data/sample10000.html', { encoding: 'utf-8'}, (err, data) => {
//   if(err) {
//     return console.log(err);
//   }
//   console.log('(2) 10000 words')
// });

// fs.readFile('data/sample100.html', { encoding: 'utf-8'}, (err, data) => {
//   if(err) {
//     return console.log(err);
//   }
//   console.log('(3) 100 words')
// });
// setTimeout(() => {
//   console.log("(0) when do I run?")
// }, 1000);

// console.log('(1) i run first');
// console.log('(2) i run second');
// console.log('(3) i run third');


const higherOrder = (callback) => {
  let data = {
    name: 'Mulder'
  }

  setTimeout(() => {
    data.name = 'Scully';
    callback(data)
  }, 2)

  console.log(data)
}

higherOrder((obj) => {
  console.log(obj)
})


