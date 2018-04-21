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
    let cache = {};
    let mean = 0;
    let mode = 0;
    array.forEach(ele => {
        if (cache[ele]) cache[ele] += 1;
        else cache[ele] = 1;
        mean += ele;
    });
    let largest = cache[array[0]];
    mean = Math.floor(mean / array.length);
    for (let key in cache) {
        if (cache[key] > largest) {
        largest = cache[key];
        mode = key;
        } if (cache[key] == largest) {
          if (key > mode) mode = key;
        }
    }
    return mode == mean;
}

module.exports = modemean;
