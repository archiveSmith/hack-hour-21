/* You are given an array of integers and a target number. Write a function that returns true if
 * there is a subset of the array that sums up to the target and returns false otherwise. A subset
 * can be any size and the elements do not have to appear consecutively in the array.
 * 
 * subsetSum([3, 7, 4, 2], 5) - > true, 3 + 2 = 5
 * subsetSum([3, 34, 4, 12, 5, 12], 32) -> true, 3 + 12 + 5 + 12 = 32
 * subsetSum([8, 2, 4, 12], 13) -> false
 * subsetSum([8, -2, 1, -3], 6) -> true, 8 + 1 + (-3) = 6
 */



function subsetSum(array, target) {
    let powerSet = [[]];
    
    for (let i = 0; i < array.length; i++) {
      //console.log(array[i]);
      for (let j = 0, len = powerSet.length; j < len; j++) {
        let temp = powerSet[j].concat(array[i]);
        console.log(temp);
        powerSet.push(temp);
  
        let subSum = temp.reduce((acc, cur) => { return acc + cur; });
        console.log(subSum);
        if (subSum === target) return true;
      }
    };
    return false;
}

module.exports = subsetSum;
