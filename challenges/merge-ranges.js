/**
 * Write a function mergeRanges that takes an array of meeting time ranges and returns an array of condensed ranges.
 *
 * Example:
 
 *
 
 *
 * Do not assume the ranges are in order
 */


function mergeRanges(array) {
    let merged = []; 
    array.forEach(el => {
        merged.push(el);
        merged.forEach(x => {
            if (el[0] >= x[0] && el[0] <= x[0] && el[1] >= x[1]) {
                
            }
        })
    });
    return merged;
}

var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]
console.log(mergeRanges(times));



module.exports = mergeRanges;
