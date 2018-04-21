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
    // filter non-numbers out of the array
    let numbersOnly = array.filter(element => typeof element === 'number');
    
    // get mean of the array, make sure to Math.floor the mean
    let mean = Math.floor((numbersOnly.reduce((a, b) => a + b))/numbersOnly.length);

    // get mode of the array, if there are multiple modes, take the max
    let mode = function(array) {
        let obj = {};
        array.forEach(function(element) {
            if (obj[element] == null) {obj[element] = 1;}
            else {obj[element] = obj[element] + 1;}
        });
        
        let frequencies = [];
        let modes = [];
        let maxFreq = 0;
        
        for (var prop in obj) {
            frequencies.push(parseInt(obj[prop]));
             maxFreq = Math.max.apply(null,frequencies);
        }

        for (var prop in obj) {
            if (obj[prop] >= maxFreq) {
                modes.push(prop);
            }
        }
        return Math.max.apply(null,modes);

    }(numbersOnly);
    // compare if mode and mean are ===, if so return true, else return false
    return (mode === mean ? true : false);
}

module.exports = modemean;