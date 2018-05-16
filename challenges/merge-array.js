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

    let merged = [];
    let index1 = 0;
    let index2 = 0;
    let current = 0;
    
    while (current < arr1.length + arr2.length) {
      let arr1Depleted = index1 >= arr1.length;
      let arr2Depleted = index2 >= arr2.length;
      
      
      if (!arr1Depleted && (arr2Depleted || arr1[index1] < arr2[index2])) {
        merged[current] = arr1[index1];
        index1++;
      } else {
        merged[current] = arr2[index2];
        index2++;
      }
      current++;
    }
    return merged;
    }

module.exports = mergeArrays;
