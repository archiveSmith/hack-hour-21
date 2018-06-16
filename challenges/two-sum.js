/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
    const tracker = {};
    for (let i = 0; i < arr.length; i++) {
        if (tracker[arr[i]]) return true;
        tracker[n - arr[i]] = "num"
    }
    return false
}

module.exports = twoSum;
