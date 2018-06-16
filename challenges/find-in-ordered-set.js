/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


function findInOrderedSet(arr, target) {
    let midPoint = Math.floor(arr.length/2)

    if (arr[midPoint] === target) {
        return true;
    }
    if (arr.length <= 1) {
        return false;
    }
    if (target < arr[midPoint]) {
        return findInOrderedSet(arr.slice(0, midPoint), target);
    }
    if (target > arr[midPoint]) {
        return findInOrderedSet(arr.slice(midPoint + 1), target);
    }
}


var nums = [1, 4, 6, 7, 9, 17, 45]
console.log(findInOrderedSet(nums, 4));
// -> true
console.log(findInOrderedSet(nums, 2));
// -> false


module.exports = findInOrderedSet;
