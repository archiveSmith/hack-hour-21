/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

input: {array} of integers and target {number}
output: O(n) time of {boolean} true if target number is in the array, false otherwise
approach:
  -use binary tree search and iterate through but stop iterating
  when max < min (where min = index 0) and return false

  -set min = 0
      max = array.length - 1
  -midIndex = (avg of min and max), then (math.floor)
  -if (arr[midIndex] === target) return true;
   if (target > arr[midIndex]) min = midIndex + 1 to iterate through the indices that are right of the midIndex.
   if (target < arr[midIndex]) max = midopint - 1 to iterate through the indices that are left of the midIndex
  

  now find O(n) or O(1) time
 */


function findInOrderedSet(arr, target) {
  let min = 0;
  let max = arr.length - 1;
  let midIndex = Math.floor((min + max) / 2);
  
  if (max < min) {
    return 'false'
  }
  if (arr[midIndex] === target) {
    return 'true'
  }
  if (arr[midIndex] < target) {
    return findInOrderedSet(arr.splice(midIndex + 1), target);
  }
  if (arr[midIndex] > target) {
    arr.splice(midIndex);
    return findInOrderedSet(arr, target);
  }
}

var nums = [1, 4, 6, 7, 9, 17, 45, 55, 57,87, 134];
console.log(findInOrderedSet(nums, 2));

module.exports = findInOrderedSet;
