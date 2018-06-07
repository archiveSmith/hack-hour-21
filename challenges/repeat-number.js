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
//double for loop
//time:
//space
// function repeatNumbers(array) {
//   for (let i = 0; i < array.length; i++) {
//     for (let j = i + 1; j < array.length; j++) {
//       if (array[i] === array[j]) return array[i];
//     }
//   }

//   return undefined;
// }

//single for loop
//time:
//space:
function repeatNumbers(array) {
  if(!Array.isArray(array)) return undefined;

  let obj = {};
  
  for (let i = 0; i < array.length; i++) {
    if (obj[array[i]] === 1) return array[i];
    else (obj[array[i]] = 1);
  }

  return undefined;
}

// function repeatNumbers(array) {
//   for (let i = 0; i < array.length; i++) {
//     for (let j = i + 1; j < array.length; j++) {
//       if (array[i] === array[j]) return array[i];
//     }
//   }

//   return undefined;
// }

module.exports = repeatNumbers;
