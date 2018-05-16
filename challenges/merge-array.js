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

function mergeArrays(arr1, arr2) {
  const output = [];
  for (let i1 = 0, i2 = 0; i1 + i2 < arr1.length + arr2.length;) {
    if (arr2[i2] === undefined || arr1[i1] <= arr2[i2]) output.push(arr1[i1++]);
    else output.push(arr2[i2++]);
  }
  return output;
}

module.exports = mergeArrays;
