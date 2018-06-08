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
  let resultArr = [], last;
  array.forEach((ele) => {
      if (!last || ele[0] > last[1]) {
        resultArr.push(last = ele);
      } else if (ele[1] > last[1]) {
        last[1] = ele[1];
      }
  });
  return resultArr;
}

var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]];
console.log(mergeRanges(times));
module.exports = mergeRanges;
