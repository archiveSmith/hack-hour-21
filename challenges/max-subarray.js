/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

function maxSubarray(arr) {
  let results = {};
  for (let j = 0; j < arr.length; j++) {
    let maxSum = -Infinity;
    let currentSum = 0;
    let subArrStart, subArrEnd = j;
    console.log(j);
    for (let i = j; i < arr.length; i++) {
      console.log(i)
      currentSum += arr[i];
      if (currentSum > maxSum) {
        maxSum = currentSum;
        subArrEnd = i;
      }
      console.log(currentSum);
      console.log(subArrStart) 
      console.log(subArrEnd) 
      console.log(arr.slice(subArrStart, subArrEnd + 1));
    results[arr.slice(subArrStart, subArrEnd + 1)] = maxSum;
    }
  }
  return results
}

// console.log(maxSubarray([15,20,-5,10])) //  -> 40
console.log(maxSubarray([1, -2, 3, 10, -4, 7, 2, -5])) // -> 18 from [3, 10, -4, 7, 2])

module.exports = maxSubarray;
