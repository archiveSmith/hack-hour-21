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
  for (let x = 0, y = 1; y < array.length; x += 1, y += 1) {
    if (array[x] === array[y]) return array[x];
  }
  return -1;
}

module.exports = repeatNumbers;
