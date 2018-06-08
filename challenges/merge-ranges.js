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
  let output = [];
  let currentMin, currentMax;
  for (let i = 0; i < array.length; i++) {
    //  if looking at the first time range set the currentMin to array[0] and set the currentMax to array[1]
    if (i === 0) {
      currentMin = array[i][0];
      currentMax = array[i][1];
    }
      let element = array[i];
      //  if the next array[0] is greater than the current max, push the working condensed range to the returned array. The array[0] becomes the new current min and the array[1] becomes the new current max.
      if (element[0] > currentMax) {
        output.push([currentMin, currentMax]);
        currentMin = element[0];
        currentMax = element[1];
      };
      //  if the next array[0] is greater than the current min and less than the current max, check the array[1]. If the array[1] is greater than the current max, it becomes the new max in the working condensed range
      if (element[0] > currentMin && element[0] < currentMax && element[1] > currentMax) {
        currentMax = element[1];
      }
      //  if the next array[0] is less than the current min, it becomes the new current min. Then, check the array[1]. If it's greater than the current max, set it as the new current max.
      if (element[0] < currentMin) {
        currentMin = element[0]
        if (element[1] > currentMax) {
          currentMax = element[1]
        }
      }
      if (i === array.length - 1) output.push([currentMin, currentMax]);
  }
  return output;
}

module.exports = mergeRanges;
