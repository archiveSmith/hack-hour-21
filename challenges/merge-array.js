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
 * input: {array} of numbers, {array} of another set of numbers
 * output: one {array} of numbers in numberical order
 * approach:
 * - concat and sort?
 */

function mergeArrays(arr1, arr2) {
  var newArr = arr1.concat(arr2);
  return newArr.sort((a,b) => a - b);
}


module.exports = mergeArrays;


