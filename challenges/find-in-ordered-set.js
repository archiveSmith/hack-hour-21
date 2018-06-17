/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


function findInOrderedSet(arr, target) {
    //Base Case: when arr length is one, compare against the target, and return true if found
    //Else, we would like to search through either the right, or the left half of the array
    if(arr.length === 1){
        if(target === arr) return true;
        else{
            return false
        }
    }
    let m = Math.floor((arr.length)/2);
    // console.log("here is m", arr[m])
        if(target < arr[m]){
            return findInOrderedSet(arr.slice(0,m), target);
        }
        else{
            // console.log("HERE IS GREATER THAN TARGET", arr.slice(m,arr.length))
            return findInOrderedSet(arr.slice(m, arr.length), target);
        }
}
// var nums = [1, 4, 6, 7, 9, 17, 45];
// console.log(findInOrderedSet(nums, 45)); 




module.exports = findInOrderedSet;
