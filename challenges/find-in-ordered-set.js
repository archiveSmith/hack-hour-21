/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

*/


function findInOrderedSet(arr, target) {
  const middle = Math.floor(arr.length / 2);
  if (arr.length === 0) return false;
  else if (arr.length === 1) return target === arr[0];
  else if (target === arr[middle]) return true;
  else if (target > arr[middle]) return findInOrderedSet(arr.slice(middle, arr.length), target);
  return findInOrderedSet(arr.slice(0, middle), target);
}

// const nums = [1, 4, 6, 7, 9, 17, 45];
// console.log(findInOrderedSet(nums, 4));
// console.log(findInOrderedSet(nums, 2));

module.exports = findInOrderedSet;
