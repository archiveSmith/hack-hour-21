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

function mergeArrays(a, b) {
  var tempArray = [];
  while (a.length || b.length) {
    if (typeof a[0] === "undefined") {
      tempArray.push(b[0]);
      b.shift();
    } else if (a[0] > b[0]) {
      tempArray.push(b[0]);
      b.shift();
    } else {
      tempArray.push(a[0]);
      a.shift();
    }
  }
  return tempArray;
}

module.exports = mergeArrays;
