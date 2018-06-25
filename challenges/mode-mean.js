/*
 * Given an array of numbers, determine if the mode and mean of the
 * array are equivalent
 *
 * Caveats:
 * 	- Math.floor the mean
 * 	- If there are multiple modes, use the max of the modes
 *
 * Return true or false
 *
 * input: {array} of numbers
 * output: {boolean} true if mode = mean, otherwise false;
 * 
 * 
 * mean- avg= 1 +2 +3 + 4/ 4  
 *  let sum = array.reduce(function(a,b) {return a+b;}, 0)
 *  let avg = Math.floor(sum/array.length)
 * 
 * mode- highest number of frequency
 *  let obj =  {1: count,
 *              2: count,
 *              3: count            
 *             }
 *  let count = 0;
 *  - loop through the array to count the number of frequency
 *  - if number doesn't exist, assign it as a property in obj 
 *      and increment count.
 *    if number exists, increment count.
 *  
 *  - find the highest number of count using number max
 * [1,2,1,4,1,3,2]
 */


function modemean(array) {
    let sum = array.reduce(function(a,b) {return a + b}, 0);
    let avg = Math.floor(sum / array.length);

    let obj = {};
    let count = 0;
    array.forEach(element => {if(!key obj[elem])
        else {(array.includes(elem)) {
        obj[elem] = obj[count] + 1;
        } 
    });
}

module.exports = modemean;
