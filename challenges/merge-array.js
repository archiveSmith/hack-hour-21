/**
 * We have our lists of orders sorted numerically already, in arrays.
 * Write a functin to merge our arrays of orders into one sorted array.
 * These may be of different lengths.
 *
 * var my_array = [3,4,6,10,11,15,21];
 * var another_array = [1,5,8,12,14,19];
 *
 * mergeArrays(my_array, another_array); -> [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19, 21]
 * 
 * BONUS: 
 * Complete in O(n) time  
 *
 */


// find shortest array and set to 'shortest'
// other is set to longest
// create an empty array;
// beging iteration
    // check first element of shortest. 
        // if it is smaller than first element of longest, push to new array
        // else longest's element is pushed

function mergeArrays(arr1, arr2) {

    let short;
    let long;
    if (arr1.length <= arr2.length) {
        short = arr1;
        long = arr2;
    } else {
        short = arr2;
        long = arr1;
    }

    let longIdx = 0;
    let shortIdx = 0;
    const result = [];
    while (shortIdx < short.length && longIdx < long.length) {
        if (short[shortIdx] < long[longIdx]) {
            result.push(short[shortIdx]);
            shortIdx += 1;
        } else if (short[shortIdx] > long[longIdx]) {
            result.push(long[longIdx]);
            longIdx += 1;
        } else {
            result.push(short[shortIdx]);
            shortIdx += 1;
            result.push(long[longIdx]);
            longIdx += 1;
        }
    }
    console.log(result);
    
    if (longIdx < long.length) {
        return result.concat(long.slice(longIdx));
    }
    if (shortIdx < short.length) {
        return result.concat(short.slice(shortIdx));
    }
}

var my_array = [3,4,6,10,11,15,21];
var another_array = [1,5,8,12,14,19];

console.log(mergeArrays(my_array, another_array)); // -> [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19, 21]

module.exports = mergeArrays;
