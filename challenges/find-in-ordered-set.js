/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


function findInOrderedSet(arr, target) {
    let front = 0;
    let back = arr.length - 1;
    let middle = Math.floor((front + back)/ 2);

    while (arr[middle] !== target && front < back) {
        if (target < arr[middle]) back = middle - 1;
        else front = middle + 1; 
        middle = Math.floor((front + back)/ 2);
    }

    return arr[middle] === target;
}

module.exports = findInOrderedSet;
