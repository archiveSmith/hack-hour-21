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
  const numberCounts = {};
  let total = 0;
  for (let i = 0; i < array.length; i += 1) {
    total += array[i];
    if (numberCounts.hasOwnProperty(array[i])) numberCounts[array[i]]++;
    else numberCounts[array[i]] = 1;
  }
  const avg = Math.floor(total / array.length);
  let mode = 0;
  for (let j = 0; j < Object.keys(numberCounts).length; j += 1) {
    if (numberCounts[Object.keys(numberCounts)[j]] > mode) mode = Number(Object.keys(numberCounts)[j]);
  }
  return avg === mode;
}

module.exports = modemean;
