/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


function findInOrderedSet(arr, target) {
  const halfWay = Math.floor(arr.length / 2);
  // console.log(arr.slice(halfWay, arr.length));
  if (arr.length === 1) return arr[0] === target;
  if (arr[halfWay] === target) return true;
  else if (arr[halfWay] < target) arr = arr.slice(halfWay, arr.length);
  else arr = arr.slice(0, halfWay);
  // console.log(arr)
  return findInOrderedSet(arr, target)
}

var nums = [1, 4, 6, 7, 9, 17, 45]
console.log(findInOrderedSet(nums, 46));

module.exports = findInOrderedSet;
