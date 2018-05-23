/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {

  let sortedArr = [...arr].sort();
  // console.log(sortedArr);

  let lowIdx = 0;
  let highIdx = sortedArr.length-1;

  // Because this is sorted, we'll never be able to make up that sum
  if (sortedArr[lowIdx] + sortedArr[highIdx] < n) return false;

  while(lowIdx < highIdx) {
    // console.log(`${sortedArr[lowIdx]} + ${sortedArr[highIdx]}`);
    if (sortedArr[lowIdx] + sortedArr[highIdx] === n) return true;
    if (sortedArr[lowIdx] + sortedArr[highIdx] > n) {
        highIdx--;
      } else {
        lowIdx++;
      }
  }

  return false;

}

// console.log(twoSum([1,1,1,1,1,1,2,1,3], 2));
// console.log(twoSum([1,-1,1,1,1,1,2,1,0], -1));




module.exports = twoSum;
