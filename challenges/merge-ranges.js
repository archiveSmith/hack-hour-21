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

//  [4, 8], [3, 5]

function mergeRanges(array) {
  return array.reduce((acc, next, index, arr) => {
    console.log(`acc: ${acc}`);
    // console.log(`index: ${index}`);
    // console.log(`arr: ${arr}`);
    acc.forEach(ele => {
      if (ele[1] >= next[0] && ele[1] < next[1]) {
        ele[1] = next[1];
        // return acc;
      } else if (ele[0] > next[0] && ele[1] > next[1]) {
        // return acc;
      } else acc.push(next);
    });
    // acc.push(next);
    return acc;
  }, []);
}

console.log(mergeRanges([[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]));

module.exports = mergeRanges;
