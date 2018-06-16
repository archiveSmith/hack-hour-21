/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


function findInOrderedSet(arr, target) {
    if (arr.length <= 1) {
        if (!arr.includes(target)) return false; 
        if (arr[0] === target) return true;
    }
    let midIndex = Math.floor(arr.length/2);
    let midNum = arr[midIndex];
    if (midNum === target) return true;
    if (target < midNum) return findInOrderedSet(arr.slice(0, midIndex), target);
    if (target >= midNum) return findInOrderedSet(arr.slice(midIndex, arr.length + 1), target);
}

module.exports = findInOrderedSet;
