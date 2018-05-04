/* You are given an array of integers and a target number. Write a function that returns true if
 * there is a subset of the array that sums up to the target and returns false otherwise. A subset
 * can be any size and the elements do not have to appear consecutively in the array.
 * 
 * subsetSum([3, 7, 4, 2], 5) - > true, 3 + 2 = 5
 * subsetSum([3, 34, 4, 12, 5, 12], 32) -> true, 3 + 12 + 5 + 12 = 32
 * subsetSum([8, 2, 4, 12], 13) -> false
 * subsetSum([8, -2, 1, -3], 6) -> true, 8 + 1 + (-3) = 6
 */

function arraySum(array) {
  let sum = 0;
  array.forEach((element) => {
    sum += element;
  });
  return sum;
}

function subsetSum(array, target) {
  if (array.length === 0) return false;
  else if (arraySum(array) === target) return true;
  else if (arraySum(array) < target) return false;
  else {
    let bool = false;
    for (let i = 0; i < array.length; i += 1) {
      let subArray = [...array];
      subArray.splice(i, 1);
      bool = bool || subsetSum(subArray, target);
      subArray = array;
    }
    return bool;
  }
}

module.exports = subsetSum;
