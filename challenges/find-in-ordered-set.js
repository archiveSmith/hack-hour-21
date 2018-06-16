/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


function findInOrderedSet(arr, target) {
  let found = false;
  let mid = Math.floor(arr.length/2);
  
  if ( target === arr[mid]) return true;
  if ( target < arr[mid] ) found = findInOrderedSet(arr.slice(0, mid) , target);
  if ( target > arr[mid] ) found = findInOrderedSet(arr.slice(mid+1) , target);

  return found;

}

// console.log( findInOrderedSet([1,2,3,5], 4));

module.exports = findInOrderedSet;
