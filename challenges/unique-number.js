/**
 * Write a function that will take an array of integers, all of which will appear exactly twice,
 * except for one integer that will appear exactly once. Return the integer that appears once.
 *
 * uniqueNumber([1,2,1,3,3]); -> 2
 *
 * BONUS:
 * Complete the challenge in O(n) time
 * Complete the challenge in O(1) space
 * 
 * input: {array} of integers that appear 2x except for one integer that appears only once
 * output: {integer} that appears only once
 * approach:
 * - object approach
 * - reduce approach
 */
function uniqueNumber(array) { //object approach
  let store = {};
  for (let i = 0; i < array.length; i++) {
    if (array[i] in store) {
      delete store[array[i]];
    } else {
      store[array[i]] = true;
    }
  }
  return Object.keys(store)[0];
}

// function uniqueNumber(array) { // reduce approach using binary number
//   return array.reduce((acc, curr) => {
//     return acc (carrot) cur;
//   }, 0);
//   }

console.log(uniqueNumber([1,4,4,5,1,5,5]))

module.exports = uniqueNumber;
