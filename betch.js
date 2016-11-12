const betch = require('nblue').betch

// use an object to execute promises one by one
betch({
  r1: Promise.resolve(1),
  r2: (ctx, data) => Promise.resolve(data + 2),
  r3: (ctx, data) => data + 3
}).
then((data) => {
  console.log(data) // data should be 6
})

// or use array to execute promises with parallel mode
betch([
  Promise.resolve(1),
  Promise.resolve(2),
  Promise.resolve(3)
]).
then((data) => {
  console.log(data) // data should be [1, 2, 3]
})
