/*
 * Given an array of numbers, determine if the mode and mean of the array are equivalent
 *
 * Caveats:
 * 	- Math.floor the mean
 * 	- If there are multiple modes, use the max of the modes
 *
 * Return true or false
 *
 */


function modemean(array) {
  let divideBy = array.length;
  let sum = array.reduce((acc, ele) => acc + ele);
  let mean = sum / divideBy;
  
  let greatesFreq = 0;
  let modeMap = {};
  let maxEl = array[0], maxCount = 1;

  array.forEach((ele) => {
      if (modeMap[ele] == null) modeMap[ele] = 1;
      else modeMap[ele]++;

      if (modeMap[ele] > maxCount) {
          maxEl = ele;
      }
  });
  
  if ( maxEl === mean) return true;
  else return false;
}

module.exports = modemean;
