var trilat = require('trilat');

var input = [
  //      X     Y     R
  [2.20, 3.66, 1.3],
  [0.6, 3.66, 1.2],
  [2.20, 2.06, 0.5]
];
// var input = [
//   //      X     Y     R
//   [5.50, 0, 2.7],
//   [0.6, 3.66, 1.2],
//   [0.6, 0, 4.5]
// ];

var output = trilat(input);
console.log(output)
