'use strict';
// If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.

// write a function that will find the sum of all the multiples of 3 or 5
// below 1000 and return that sum.

function sumMultiples3Or5Below1000() {

  let sumMlpThree = (Math.floor(1000/3)/2) * (2 * 3 + ((Math.floor(1000/3)-1) * 3));
  let sumMlpFive = (Math.floor(1000/5)/2) * (2 * 5 + ((Math.floor(1000/5)-1) * 5));
  let sumMlpFifteen = (Math.floor(1000/15)/2) * (2 * 15 + ((Math.floor(1000/15)-1) * 15));

  // let S=333/2[2*3+(333–1)*3] =166833


  return sumMlpFive;

}


// extension make it dynamic function that takes input x,y,z
// and returns the sum of multiples of x and y below z
function sumMultiplesXOrYBelowZ(x, y, z) {
  let sumMlpX = x * ((Math.floor(z/x) * (Math.floor(z/x) + 1)) / 2);
  let sumMlpY = y * ((Math.floor(z/y) * (Math.floor(z/y) + 1)) / 2);
  let sumMlpYX = xy * ((Math.floor(z/xy) * (Math.floor(z/xy) + 1)) / 2);

  return sum;
}

const objectToExport = {
  sumMultiples3Or5Below1000,
  sumMultiplesXOrYBelowZ,
};

module.exports = objectToExport;

console.log(sumMultiples3Or5Below1000())
