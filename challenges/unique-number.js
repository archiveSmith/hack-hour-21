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
 */
function uniqueNumber(array) {
  // let output;
  // const sortedArr = array.sort((a, b) => a - b);

  // for (let i = 0; i < sortedArr.length; i += 1) {
  //   if (sortedArr[i] !== sortedArr[i + 1] && sortedArr[i] !== sortedArr[i - 1]) {
  //     output = sortedArr[i];
  //   }
  // }
  // return output;

  return array.reduce((x, y) => {
    return x ^ y;  
  }, 0);
}
console.log(uniqueNumber([1, 2, 1, 3, 3]));

module.exports = uniqueNumber;
