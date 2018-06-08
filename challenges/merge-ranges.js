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
    let nwArr = [];
    let mem = [];
    for(let i = 0; i < array.length; i++){
        let check = false;
        for(let j = 0; j < array.length; j++){
        if(array[j][0] > array[i][0] && array[j][0] <= array[i][1]){
            let temp = [];
            temp.push(array[i][0], array[j][1]);
            console.log(temp)
            nwArr.push(temp);
            check = true;
            mem.push(array[j]);
            if (nwArr.includes(array[j])) nwArr.splice(nwArr.indexOf(array[j]), 1);
   

        }
    }
    if(check === false && !mem.includes(array[i])) nwArr.push(array[i])

}
    return nwArr;

}

var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]
console.log(mergeRanges(times));

module.exports = mergeRanges;
