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
  let newArray = [];
  let indexLeft = 0, indexRight = 0;

  while (indexLeft < arr1.length && indexRight < arr2.length) {
    if (arr1[indexLeft] < arr2[indexRight]) {
      newArray.push(arr1[indexLeft]);
      indexLeft++
    } else {
      newArray.push(arr2[indexRight])
      indexRight++
    }
  }
  return newArray.concat(arr1.slice(indexLeft)).concat(arr2.slice(indexRight));
}


module.exports = mergeArrays;
