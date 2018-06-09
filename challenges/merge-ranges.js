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
  const sortedArrs = [];
  for (let i = 0; i < array.length; i += 1) {
    sortedArrs.push(array[i].sort((a, b) => a[0] - b[0]));
  }
  const returnArr = [array[0].sort()];
  for (let j = 1; j < array.length; j += 1) {
    if (returnArr[returnArr.length - 1][1] >= array[j].sort()[0]) {
      returnArr[returnArr.length - 1] = [returnArr[returnArr.length - 1][0], array[j].sort()[1]];
    } else {
      returnArr.push(array[j]);
    }
  }
  return returnArr;
}

module.exports = mergeRanges;
