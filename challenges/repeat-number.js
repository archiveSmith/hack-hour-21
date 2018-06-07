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
function repeatNumbersBrute(array) {
  let occurs = {};
  for(let i=0; i<array.length; i++){
    if (occurs[array[i]]) {
      return array[i]
    } else {
      occurs[array[i]] = 'y';
    }
  }
}


// function repeatNumbersTrick(array) {
//   let factorial = array.reduce( (elem, 1 ) => { elem * curr );
//   console.log(factorial);

//   // let dup = factorial / 

// }



// console.log(repeatNumbers([1,2,11,3,4,5,6,7,8,9,11,100,24]));

module.exports = repeatNumbers;
