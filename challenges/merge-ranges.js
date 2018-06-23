/**
 * Write a function mergeRanges that takes an array of meeting time ranges and returns an array of condensed ranges.
 *
 * Example:
 * var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]
 *
 * mergeRanges(times); -> [[0, 1], [3, 8], [9, 12]]
 *
 * Do not assume the ranges are in order
 */


function mergeRanges(array) {
    // console.log(array);
    array.sort(function(a,b){
        return a[0] - b[0];
    });
    // console.log("here is the array", array);
    for (let i = 0; i <array.length; i++){
        for( let j = i + 1; j<array.length; j++){
            // console.log("here is the j", j)
            // console.log("Math.max", Math.max(...array[i]));
            if(Math.max(...array[i]) < Math.min(...array[j])){
                // console.log("here is ifff", array[i], array[j])
                // console.log("here is when there's no merge", "i", array[i], "j", array[j]);
                break;
            } else{
                array[i] = [Math.min(...array[i]), Math.max(...array[j])];
                // console.log("here is the new array", array)
                array.splice(j,1);
                // console.log("here's spliced array", array)
                j = j - 1;
            }
        }
    }
    return array;

}


// console.log("hellooooo");
module.exports = mergeRanges;