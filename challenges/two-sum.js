/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  const obj = {};
  const newArr = [];

  for (let i = 0; i < arr.length; i += 1) {
    if (obj[arr[i]] !== undefined) {
      newArr.push([obj[arr[i]], arr[i]])
    } else {
      obj[n - arr[i]] = arr[i];
    }
  }
  if (newArr.length >= 1) return true;
  return false;
}

module.exports = twoSum;
