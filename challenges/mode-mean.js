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
  function getMode (arr) {
    const cache = {};
    return arr.reduce((acc, e) => {
      if (cache[e]) cache[e]++;
      else cache[e] = 1;
      if (cache[e] >= acc[0]) {
        if (cache[e] === acc[0]) acc[1] = Math.max(e, acc[0]);
        else acc[1] = e;
        acc[0] = cache[e];
      }
      return acc;
    }, [0, 0])[1];
  }
  const mode = getMode(array);
  const mean = Math.floor(array.reduce((acc, e) => {
    return acc + e;
  }, 0) / 2);
  return mode === mean;
}

module.exports = modemean;
