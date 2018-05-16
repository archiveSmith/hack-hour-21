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
  
  // console.log(arr1.length)
  // console.log(arr2.length)
  // console.log(Array.isArray(arr1));
  // console.log(Array.isArray(arr2));
  // console.log(arr1 === null);
  

  if (arr1 === null && arr2 === null) return null;
  if (arr1 === null && Array.isArray(arr2)) return arr2;
  if (arr2 === null && Array.isArray(arr1)) return arr1;

  let idx1 = 0;
  let idx2 = 0;

  while ( idx1 !== arr1.length && idx2 !== arr2.length ) {
    if ( arr1[idx1] < arr2[idx2]) {
      merged.push(arr1[idx1++]);
    } else {
      merged.push(arr2[idx2++])
    }
  }

  // now deal with leftovers in one of the arrays array
  // because one array could be longer than the other
  // or they are the same size and we exited the while loop
  // and there is one more element in the other array 
  if (idx1 !== arr1.length) { // arr1 was longer
    merged.splice(merged.length, 0, ...arr1.slice(idx1));
  }
  
  if (idx2 !== arr2.length){ // arr2 was longer
    merged.splice(merged.length, 0, ...arr2.slice(idx2));
  }

  return merged;

}


// let my_array = [3, 4, 6, 10, 11, 15, 21];
// // let another_array = [1, 5, 8, 12, 14, 19];
// let another_array = [1, 5, 8, 12, 14, 19, 22, 22, 25, 101];
 
// // [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19, 21]
// console.log(mergeArrays(my_array, another_array)) 

module.exports = mergeArrays;
