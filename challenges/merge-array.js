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
  const merged = [];
  let arr1Index = 0, arr2Index = 0;

  for (let i = 0; i < Math.max(arr1.length, arr2.length); i += 1) {
    const arr1Val = arr1[arr1Index];
    const arr2Val = arr2[arr2Index];
    const smallerVal = Math.max(arr1Val, arr2Val);

    merged.push(smallerVal);
    
    if (smallerVal === arr1Val) arr1Index += 1;
    else arr2Index += 1;
  }

  return merged;
}

module.exports = mergeArrays;
