/**
 * I have an array where every number in the range 1...n appears once except for 
 * one number which appears twice.
 *
 * Write a function for finding the number that appears twice.
 *
 * input: {array}
 * output: {number}
 * approach:
 * 
 * [1,1]
 * [1,1,2] [1,2,2]
 * [1,2,2,3] [1,2,1,3] [1,2,3,3]
 * 
 * BONUS:
 * Do this in O(n) time - can't use nested array
 * Do this in O(1) space - can't store as array/obj
 *
 */

function repeatNumbers(array) {
  let result;
  array.forEach((elem, index) => {
    if (array.indexOf(elem, index + 1) > -1) {
      result = elem;
    }
  })
  return result;
}

console.log(repeatNumbers([1,2,5,4,3,3]))

module.exports = repeatNumbers;
