/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  let pairs = [];
  let length = arr.length;
  for (let i = 0; i < length; i += 1) {
    let temp = arr[0];
    arr.shift();
    arr.forEach(ele => {
      pairs.push([temp, ele]);
    });
  }
  console.log(pairs);
  for (let i = 0; i < pairs.length; i += 1) {
    if (pairs[i][0] + pairs[i][1] === n) return true;
  }
  return false;
}

module.exports = twoSum;
