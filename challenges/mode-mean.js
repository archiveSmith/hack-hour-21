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
// calculate mean with reduce
// calculate mode by reducing 
// compare numbers and output boolean

function modemean(array) {
    const mean = Math.floor(array.reduce((acc, cur) => acc + cur))/array.length;

    var counter = 0; 
    var currentMode; 

    for (var i = 0; i < array.length; i++) {
        var innerMode = array[i];
          var innerCounter = 0;
            for (var j = 0; j < array.length; j++) {
                if (array[i] === array[j]) innerCounter++;
            }
        if (innerCounter > counter) {
            counter = innerCounter;
            currentMode = innerMode;
        }
    }
    return mean === currentMode;
}

module.exports = modemean;
