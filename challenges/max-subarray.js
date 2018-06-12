/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

function sum(arr) {
  let total = 0;
  arr.forEach((num) => { total += num; });
  return total;
}

function maxSubarray(arr) {
  if (arr.length === 0) return undefined;
  if (arr.length === 1) return arr[0];
  let max = sum(arr);
  for (let i = 1; i < arr.length; i += 1) {
    for (let j = 0; j < i + 1; j += 1) {
      let slice = arr.slice(j, j + arr.length - i);
      console.log(slice, sum(slice));
      if (sum(slice) > max) max = sum(slice);
    }
  }
  return max;
}

// console.log(maxSubarray([15,20,-5,10]));

module.exports = maxSubarray;
