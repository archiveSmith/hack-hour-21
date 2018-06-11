'use strict';
// If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.

// write a function that will find the sum of all the multiples of 3 or 5
// below 1000 and return that sum.

function sumMultiples3Or5Below1000() {
  let sum = 0;

  for (let n = 0; n < 1000; n++) {
      if ( n%3 === 0 || n%5 === 0) {
        // console.log(n);
        sum +=n;
      }
  }
  
  return sum;
}

// console.log(sumMultiples3Or5Below1000());



// extension make it dynamic function that takes input x,y,z
// and returns the sum of multiples of x and y below z
function sumMultiplesXOrYBelowZ(x, y, z) {
  let sum = 0;
  
  for (let n = 0; n < z; n++) {
    if ( n%x === 0 || n%y === 0) {
      // console.log(n);
      sum +=n;
    }
  }
  
  return sum;
}

// console.log(sumMultiplesXOrYBelowZ(3, 5, 1000));

const objectToExport = {
  sumMultiples3Or5Below1000,
  sumMultiplesXOrYBelowZ,
};

module.exports = objectToExport;
