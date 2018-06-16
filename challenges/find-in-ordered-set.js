/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


function findInOrderedSet(arr, target) {
  if (arr.length === 0) return false;
  if (arr[0] === target) return true;
  arr.splice(0, 1);
  return findInOrderedSet(arr, target);
}


module.exports = findInOrderedSet;
