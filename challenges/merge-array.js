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
  let arr3 = [];
  arr3.length = (arr1.length + arr2.length);
  let i = 0, j = 0, k = 0;
  while (i < arr1.length && j < arr2.length) {
    if ( arr1[i] < arr2[j] ) {
        arr3[k] = arr1[i];
        i++;
    }
    else { 
        arr3[k] = arr2[j];
        j++;
    }
    k++;
  }

  while (i < arr1.length) {
      arr3[k] = arr1[i];
      i++;
      k++;
  }

  while (j < arr2.length) {
      arr3[k] = arr2[j];
      j++;
      k++;
  }

  return arr3;
}

module.exports = mergeArrays;
