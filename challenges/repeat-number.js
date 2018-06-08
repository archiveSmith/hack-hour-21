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

// Brute force. O(n) time,  O(n) space
// function repeatNumbersBrute(array) {
//   let occurs = {};
//   for(let i=0; i<array.length; i++){
//     if (occurs[array[i]]) {
//       return array[i]
//     } else {
//       occurs[array[i]] = 'y';
//     }
//   }
// }

// O(n), O(1) space
function repeatNumbers(array) {
  let sum = array.reduce( (elem, curr ) => elem + curr );
  return (sum - (array.length)*((array.length-1)/2) );
}

// console.log(repeatNumbers([1,2,2,3,4,5,6,7,8,9]));

module.exports = repeatNumbers;
