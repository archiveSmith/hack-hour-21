/**
 * Write a function mergeRanges that takes an array of meeting time ranges and returns an array of condensed ranges.
 *
 * Example:
 * var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]
 *
 * mergeRanges(times); -> [[0, 1], [3, 8], [9, 12]]
 *
 * Do not assume the ranges are in order
 */


function mergeRanges(array) {
  let sortedArrs = [];
  for (let j = 0; j < array.length; j++) {
    sortedArrs.push(array[j].sort(function(a, b) {return a[0] - b[0]}));
  }
  let returnArr = [array[0].sort()];
  for (let i = 1; i < array.length; i++) {
    if (returnArr[returnArr.length-1][1] >= array[i].sort()[0]) {
    returnArr[returnArr.length-1] = [returnArr[returnArr.length-1][0],array[i].sort()[1]];
    } else {
      returnArr.push(array[i]);
    }
  }
    return returnArr;
}

module.exports = mergeRanges;
