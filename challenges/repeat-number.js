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
//create a variable to store number
//for loop through array, assigning number to variable and checking to see if following numbers equal that one (2 for loops?)

function repeatNumbers(array) {
  let possibleDouble = 0;

  for (let i = 0; i < array.length; i++){
    possibleDouble = array[i];
    for (let z = i + 1; z < array.length; z++){
      if (array[z] === possibleDouble){
        return possibleDouble;
      }
    }
  }
  return 'no double!';
}

module.exports = repeatNumbers;
