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
    const modeObj = {};
    let sum = 0;
    let mean;
    let mode; // the biggest mode
    let modeFreq; // the freq of the biggest mode

    // sum for mean and collectiing in modeObj
    array.forEach( function(elem) {
        sum += elem;
        if ( modeObj[elem] !== undefined ){
            modeObj[elem]++;
        } else {
            modeObj[elem] = 1; // first time we've seen this number 
        }
    });
        
        // get the mode
        for (let k in modeObj){
            if ( mode === undefined || modeObj[k]>modeFreq ) { //check to see if we found a new mode
                mode = k;
                modeFreq = modeObj[k];
            } else if ( modeObj[k] === modeFreq ) { // if this mode has the same freq as our current mode
                // see which number is bigger
                if ( k > mode ) {
                    mode = k;
                }
            }
        }
        mean = Math.floor(sum/array.length);
        // console.log (`mean: ${mean} === mode ${mode}`);
        // console.log (`=== ? ${mean === mode}`);
        mode = Number.parseInt(mode); // convert it to a number
        return ( mean === mode)

}

module.exports = modemean;
