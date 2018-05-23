/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
    if (arr.length < 2) {
      return false;
    }
    var curr;
    for (var i=0; i<arr.length; i++) {
      curr = arr[i];
      if (arr.indexOf(n-curr) !== -1 && arr.indexOf(n-curr) !== i) {
        return true;
      }
    }
    return false;
  }

module.exports = twoSum;
