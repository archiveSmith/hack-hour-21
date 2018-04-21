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

//mode = most numbers
//mean = average (sum divided by number of elements)
//loop through array; find container to add mode to. 

function modemean(array) {
    var mode = 0;
    var mean = 0;
    
    if(array.length === 0)
        return 'empty array';
    var modeColl = {};
    var maxEl = array[0], maxCount = 1;
    for(var i = 0; i < array.length; i++)
    {
        var el = array[i];
        if(modeColl[el] === null)
            modeColl[el] = 1;
        else
            modeColl[el]++;  
        if(modeColl[el] > maxCount)
        {
            maxEl = el;
            maxCount = modeMap[el];
        }
    
    }
    
    mode = maxEl;
    console.log(mode);
    
    var sum = 0;
    for (var z = 0; z < array.length; z++){
    sum += array[z];
    }
    mean = Math.floor(sum/array.length);
    if (mean === mode){
        return true;
    }
    else {
        return false;
    }
    }


module.exports = modemean;
