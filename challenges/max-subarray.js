/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

function maxSubarray(arr) {
  //build subarrays
  let subArr = [];
  let container = [];
  let pointer = arr.length - 1;
  let sums = [];
  while (pointer) {
      console.log('in while');
      for (let i = pointer; i >= 0; i--) {
          subArr.push(arr[i]);
          console.log(subArr);
      }
      container.push(subArr);
      pointer--;
      sums.push(subArr.reduce((acc, cur) => {
        return acc + cur;
      }));
      return sums;
    }
  }
  


console.log(maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]));
//console.log(maxSubarray([15,20,-5,10]));


module.exports = maxSubarray;
