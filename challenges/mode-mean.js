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

function getAverage(array) {
    let sum = array.reduce((a, b) => a + b);
    return sum / array.length;
}

function modemean(array) {
// set up a count object 
    let appearances = array.reduce((a, el) => {
        a[el] = (a[el] | 0) + 1;
        return a;
    }, {})
    //get the max
    let max = Math.max(...Object.values(appearances))
    // iterate the object from the back
    let mode;
    for (key in appearances) {
        if (appearances[key] === max) {
            mode = key;
        }
    }
    return Number(mode) === Math.floor(getAverage(array));
}

module.exports = modemean;
