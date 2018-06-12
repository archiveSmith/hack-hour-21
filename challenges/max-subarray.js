/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

function maxSubarray(arr) {
    let maxSum = [];
    for (let i = 0; i<arr.length; i++){
        // console.log("here is the initial arr",arr.slice(i,arr.length))
        maxSum.push(sumOfEach(arr.slice(i,arr.length)))
    }
    //use a helper function to calculate the sum of each i and the following sum until hitting the final number
    function sumOfEach(arr){
        let sum = [];
        for (let f = arr.length - 1; f >= 0; f --)
        {sum.push(arr.slice(0,f+1).reduce((acc,curr) => acc + curr))};
        return sum;
        }
        let finalMax = [].concat.apply([],maxSum);
        // console.log("Let's Go", finalMax);
        return Math.max(...finalMax);
    }

// console.log(maxSubarray([15,20,-5,10]));

module.exports = maxSubarray;
