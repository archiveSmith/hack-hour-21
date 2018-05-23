/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
    for (let i = 0; i < arr.length; i += 1) {
        for (let j = i + 1; j < arr.length; j += 1) {
            if (arr[i] + arr[j] === n) {
                return true;
            }
        }
    }
    return false;
}

// const a = [1, 2, 3, 4, 5, 5];

// console.log(twoSum(a, 10));
// console.log(twoSum(a, 2));

module.exports = twoSum;

