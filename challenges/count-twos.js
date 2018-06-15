// Write a function "countTwos" that takes a number as an argument, n. The function will return the number of 2s encountered when counting from 1 to n (inclusive). 
// For example: countTwos(3) should be 1 because there are no 2s in the number one. There is One 2 in the number two and no 2s in the number three.
// Each 2 should be counted. For instance,  the number 2222 has four 2s. 

// countTwos(1);  -> 0
// countTwos(3);  -> 1
// countTwos(13);  -> 2
// countTwos(1000);  -> 300
// countTwos(11420);  -> 4483

/**
 * input- {num}
 * output- {num} of 2s encountered counting from 1 to n (inclusive)
 * 
 * ex: 2, 12, 22, 32,42,52, 62, 72, 82, 92 -> 11 2s between 2-100
 *  102, 112, 122 ... 
 * 
 * approach:
 * - convert integer to string array
 *      num.toString()
 *      str.split('')
 * - loop through the array to identify 2
 *  -make sure to convert string to num before incrementing
 * - create a variable to keep count of 2s
 *
 * 
 */

function countTwos(num) {
  // convert integer to string array
  let numArr = num.toString().split('');
  let count = 0;

  for (let i = 1; i <= )

  numArr.forEach((elem) => {
    if (elem == 2) {
      count += 1;
    }
  })
  return count;
}

console.log(countTwos(3));  //-> 0
// countTwos(3);  -> 1
// countTwos(13);  -> 2
// countTwos(1000);  -> 300
// countTwos(11420);  -> 4483

module.exports = countTwos;
