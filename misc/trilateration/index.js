// const trilateration = require('node-trilateration')
var trilat = require('trilat');
// const trilateration2 = require('trilateration')
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

// Creating three beacons
// var beacons = [
//   {x: 2, y: 4, distance: 5.7},
//   {x: 5.5, y: 13, distance: 6.8},
//   {x: 11.5, y: 2, distance: 6.4}
// ];
// var beacons = [
//   {x: 2.20, y: 3.66, distance: 5.7},
//   {x: 0.6, y: 3.66, distance: 6.8},
//   {x: 2.20, y: 2.06, distance: 6.4}
// ];
var input = [
  //      X     Y     R
  [2.20, 3.66, 1.3],
  [0.6, 3.66, 1.2],
  [2.20, 2.06, 0.5]
];

// trilateration.addBeacon(0, trilateration.vector(2, 4));
// trilateration.addBeacon(1, trilateration.vector(5.5, 13));
// trilateration.addBeacon(2, trilateration.vector(11.5, 2));

// trilateration.addBeacon(0, trilateration.vector(5.5, 0.0));
// trilateration.addBeacon(1, trilateration.vector(0.6, 3.66));
// trilateration.addBeacon(2, trilateration.vector(0.6, 0));

var recursiveAsyncReadLine = function () {
  readline.question('dists: ', function (answer) {
    if (answer == 'exit') //we need some base case, for recursion
      return readline.close(); //closing RL and returning from function.

    answer = answer.trim()
    dists = answer.split(" ").map(function (item) {
      return parseFloat(item)
    });
    // console.log('Got it! Your answer was: "', answer, '"', dists);

    for (i = 0; i < 3; ++i) {
      input[i][2] = dists[i]
      // trilateration.setDistance(i, dists[i]);
    }

    console.log(input)

    // var pos = trilateration.calculatePosition()// 
    // var pos = trilateration.calculate(beacons);
    var pos = trilat(input);
    console.log("X: " + pos[0] + "; Y: " + pos[1]); // X: 7; Y: 6.5

    recursiveAsyncReadLine(); //Calling this function again to ask new question
  });
};


// Start Calculation
// var pos = trilateration.calculate(beacons);

recursiveAsyncReadLine();

// console.log("X: " + pos.x + "; Y: " + pos.y); // X: 7; Y: 6.5
