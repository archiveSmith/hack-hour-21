/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  // loop through array and check the sum of the current element and every element after it
  // if the sum equals n, return true
  for (let i = 0; i < arr.length; i++) {
    let remaining = arr.slice(i, arr.length);
    for (let j = 0; j < remaining.length; j++) {
      let sum = arr[i] + arr[j];
      if (sum === n) return true;
    }
  }
  return false
}

let nums = [5, 4, 3, 29, 30, 21, 18, 35, 2, 6]
console.log(twoSum(nums, 44)); //true

module.exports = twoSum;
