'use strict';
// If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.

// write a function that will find the sum of all the multiples of 3 or 5
// below 1000 and return that sum.

function sumMultiples3Or5Below1000() {
  let sum = 0;
  // since we know there are at most 333 multiples of 3
  let threes = Array.apply(null, {length: 333}).map(Number.call, Number);
  threes = threes.map((ele => ele * 3));
  // since we know there are at most 200 multiples of 5
  let fives = Array.apply(null, {length: 200}).map(Number.call, Number);
  fives = fives.map((ele => ele * 5));
  let sumThrees = threes.reduce((sum, val) => {return sum + val});
  let sumFives = fives.reduce((sum, val) => {return sum + val});
  sum = sumThrees + sumFives;
  return sum;
}


// extension make it dynamic function that takes input x,y,z
// and returns the sum of multiples of x and y below z
function sumMultiplesXOrYBelowZ(x, y, z) {
  let sum = 0;
  let xs = Array.apply(null, {length: Math.floor(z / x)}).map(Number.call, Number);
  xs = xs.map(ele => ele * x);

  let ys = Array.apply(null, {length: Math.floor(z / y)}).map(Number.call, Number);
  ys = ys.map(ele => ele * y);
  let sumX = xs.reduce((sum, val) => {return sum + val});
  let sumY = ys.reduce((sum, val) => {return sum + val});
  sum = sumX + sumY;

  return sum;
}

const objectToExport = {
  sumMultiples3Or5Below1000,
  sumMultiplesXOrYBelowZ,
};

module.exports = objectToExport;
