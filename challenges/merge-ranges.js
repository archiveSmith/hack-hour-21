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
  const obj = {};
  for (let i = 0; i < array.length; i += 1) {
    for (let j = array[i][0]; j <= array[i][1]; j += 1) {
      obj[j] = ' ';
    }
  }
  let count = 0;
  const output = [];
  let range = [];
  while (Object.keys(obj).length !== 0) {
    if (obj.hasOwnProperty(count)) {
      if (range.length === 0) {
        range.push(count);
        delete obj[count];
        count += 1;
      } else {
        delete obj[count];
        count += 1;
      }
    } else if (range.length === 1) {
      range.push(count - 1);
      output.push(range);
      range = [];
      count += 1;
    } else {
      count += 1;
    }
  }
  if (range.length === 1) {
    range.push(count - 1);
    output.push(range);
  }
  return output;
}

// const times = [[0, 1], [3, 5], [4, 7], [10, 12], [9, 10]];
// console.log(mergeRanges(times)); // [[0, 1], [3, 8], [9, 12]]

module.exports = mergeRanges;
