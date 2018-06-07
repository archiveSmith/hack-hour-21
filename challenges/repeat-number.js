/**
 * I have an array where every number in the range 1...n appears once except for 
 * one number which appears twice.
 *
 * Write a function for finding the number that appears twice.
 *
 * BONUS:
 * Do this in O(n) time
 * Do this in O(1) space
 *
 */

function repeatNumbers(array) {
  const sum = array.reduce((acc, val) => acc + val);
  let fact = array.length - 1;
  let factorial = 0;
  while (fact > 0) {
    factorial += fact;
    fact -= 1;
  }
  return sum - factorial;
}

// console.log(repeatNumbers([1,5,5,2,4,3]));

module.exports = repeatNumbers;
