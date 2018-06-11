'use strict';
// If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.

// write a function that will find the sum of all the multiples of 3 or 5
// below 1000 and return that sum.

/**
 * sum of:
 * 3,   5,  6,  9, 10   
 * 12, 15,15, 18, 20       
 * 21, 24, 25, 27, 30,30   
 * 33, 35, 36, 39, 40
 * 42, 45,45, 48, 50
 * 51, 54, 55, 57, 60,60
 * 
 */

function sumMultiples3Or5Below1000() {
  let sum = 0;
  let multiplesOf3 = [];
  let multiplesOf5 = [];
  for (let i = 1; i <= 1000; i ++) {
    if (i % 3 === 0) {
      multiplesOf3.push(i);
    }
    if (i % 5 === 0) {
      multiplesOf5.push(i);
    }
  }
  
  for (let j = 0; j < multiplesOf5.length; i++) {
    if (multiplesOf3.indexOf(j)) {
      multiplesOf3.splice(j, 1);
    }
  }
  
  multiplesOf3.reduce((acc, curr) => acc + curr, 0
  })
 
  return sum;
}

console.log(sumMultiples3Or5Below1000());

// extension make it dynamic function that takes input x,y,z
// and returns the sum of multiples of x and y below z
function sumMultiplesXOrYBelowZ(x, y, z) {
  let sum = 0;

  return sum;
}

const objectToExport = {
  sumMultiples3Or5Below1000,
  sumMultiplesXOrYBelowZ,
};

module.exports = objectToExport;
