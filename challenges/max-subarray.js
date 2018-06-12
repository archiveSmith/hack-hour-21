/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

function maxSubarray(arr) {
    subs = [];
    let num = arr.length; 
    while (num--) {
        for (let i = 0; i < arr.length; i++) {
            subs.push(arr.slice(i));
        }
            arr.pop();
    }
    return Math.max(...subs.map(getSum));
}

function getSum(arr) {
    return arr.reduce((a, b) => a + b);
}

// console.log(maxSubarray([1, -2, 3, 10, -4, 7, 2, -5])) 
// console.log(maxSubarray([15,20,-5,10])) 

module.exports = maxSubarray;
