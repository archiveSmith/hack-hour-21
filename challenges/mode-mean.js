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
    let mean;
    let mode;
    var modeMap = {};
    
    var sum = array.reduce(function (acc, curr){
        return acc + curr;
    }, 0);
    
    mean = Math.floor(sum / array.length);
    
    var most = array.reduce(function(acc, curr) {
        if (curr in acc) {
            acc[curr]++;
        } else {
            acc[curr] = 1
        }
        return acc;
    }, {});
    
    
    var mostKeysArr = Object.keys(most);
    mode = mostKeysArr.reduce(function(acc, curr) {
        acc = most[acc] > most[curr] ? Number(acc) : Number(curr);
        return acc;
    })
    
    
    
    if(mode === mean) {
        return true;
    } else {
        return false;
    }
    
    
}

module.exports = modemean;
