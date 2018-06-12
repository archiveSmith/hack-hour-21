/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  return arr.reduce((acc, e, reduceI, reduceArr) => {
    if (!acc) {
      for (let i = reduceI + 1; i < reduceArr.length; i += 1) {
        if (e + reduceArr[i] === n) return true;
      }
    }
    return acc;
  }, false);
}

module.exports = twoSum;
