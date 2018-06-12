/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

// O(n ^ 3) >_<

function maxSubarray(arr) {
  let bestSum = -Infinity;
  function recurSubSum(array) {
    if (array.length <= 0) return;
    const newArray = [];
    array.forEach((el) => {
      newArray.push(el);
      const sum = newArray.reduce((acc, e) => acc + e, 0);
      if (sum > bestSum) bestSum = sum;
    });
    recurSubSum(array.slice(1));
  }
  recurSubSum(arr);
  return bestSum;
}

module.exports = maxSubarray;
