/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


function findInOrderedSet(arr, target) {
  let startMark = 0;
  let endMark = arr.length - 1;
  while (endMark - startMark > 1) {
    if (target <= arr[Math.floor((endMark - startMark) / 2)]) endMark = Math.floor((endMark - startMark) / 2);
    else startMark += Math.floor((endMark - startMark) / 2);
    if (target === arr[startMark] || target === arr[endMark]) return true;
  }
  return false;
}

module.exports = findInOrderedSet;
