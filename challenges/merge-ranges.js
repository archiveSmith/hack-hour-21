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
  return array.reduce((acc, e, rIndex, arr) => {
    // don't work on deleted elements
    if (e === undefined) return acc;
    // grab start time, endtime
    let startTime = e[0];
    let endTime = e[1];
    for (let i = 0; i < arr.length; i++) {
      // skip deleted & don't bother checking against itself
      if (arr[i] === undefined || arr[i] === e) continue;
      // iterate looking for any start time earlier than our endtime
      // and if that endtime is greater than our endtime...
      if (arr[i][0] <= endTime && arr[i][1] >= endTime) {
        // replace our endtime
        endTime = arr[i][1];
        // eat that meeting
        delete arr[i];
      } else if (arr[i][1] >= startTime && arr[i][0] <= endTime) {
        // if the current endtime is greater than our start time 
        // and current starttime is less than or equal to our endtime, replace our start time and delete
        startTime = arr[i][0];
        delete arr[i];
      }
    }
    // at end of array, push to our store and remove the meeting from future checks
    acc.push([startTime, endTime]);
    delete arr[rIndex];
    return acc;
  }, []);
}

var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]];

let test = mergeRanges(times); // -> [[0, 1], [3, 8], [9, 12]]

console.log(test);

module.exports = mergeRanges;
