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

    const mean = Math.floor(array.reduce((a, c) => a + c) / array.length);

    // count the occurences of each value and store in numCount.
    const numCount = array.reduce(function(a, c) {
        a[c] === undefined ? a[c] = 1 : a[c] += 1;
        return a;
    }, {});


    // reduce an array of numCount's keys by comaparing the values that the keys are paired to.
    let numCountKeys = Object.keys(numCount);
    let mode = numCountKeys.reduce(function(a, c) {
        a = numCount[c] > numCount[a] ? Number(c) : Number(a);
        return a;
    }, numCountKeys[0]);

    return mode === mean;
}

module.exports = modemean;
