/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

function maxSubarray(arr) {
    let max = Math.max(...arr);
    console.log(max)
    let sum = max;
    for(let i = arr.indexOf(max); i < arr.length; i++){
        console.log(arr.slice(arr.indexOf(max), i+1))
        sum = arr.slice(arr.indexOf(max), i+1).reduce((a, b) => {
            return a = b + a;
        })
        if(sum > max){
            max = sum;
        }
    }
    for(let i = arr.indexOf(max); i >= 0; i--){

    }
    return max;
}

console.log(maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]));

module.exports = maxSubarray;
