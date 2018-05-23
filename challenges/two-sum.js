/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {

  if (arr.length<2) return false;

  let sortedArr = [...arr].sort();
  // console.log(sortedArr);

  let lowIdx = 0;
  let highIdx = sortedArr.length-1;

  while (lowIdx < highIdx) {
    // console.log(`${sortedArr[lowIdx]} + ${sortedArr[highIdx]}`);
    if ( (sortedArr[lowIdx] + sortedArr[highIdx]) === n) return true;

    if ( (sortedArr[lowIdx] + sortedArr[highIdx]) > n) {
        highIdx--;
      } else {
        lowIdx++;
      }
  }

  return false;

}

// console.log(twoSum([1,1,1,1,1,1,2,1,3], 3));
console.log(twoSum([1,-1,1,1,1,1,2,1,0], 3));
// console.log(twoSum([1,2], 3));




module.exports = twoSum;
