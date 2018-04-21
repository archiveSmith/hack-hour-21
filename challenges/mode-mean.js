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
  let mode = {};
  let mean = 0;
  let map = {};
  let count = 0;
  
  array.forEach(function findMode(num) {
    map[num] = (map[num] || 0) + 1;
    if (count < map[num]) {
      count = map[num];
      mode = num;
    }
    mean += num;
    if(mode[num] === undefined){
      mode[num] = 0;
    }        
      mode[num] += 1;
  });
  mean = mean / array.length;
  if (Math.floor(mode) === mean) {
    return true;
  }
  return false;
}

module.exports = modemean;
