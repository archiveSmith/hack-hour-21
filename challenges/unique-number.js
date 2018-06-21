/**
 * Write a function that will take an array of integers, all of which will appear exactly twice,
 * except for one integer that will appear exactly once. Return the integer that appears once.
 *
 * uniqueNumber([1,2,1,3,3]); -> 2
 *
 * BONUS:
 * Complete the challenge in O(n) time
 * Complete the challenge in O(1) space
 *
 */
function uniqueNumber(array) {
    let arr = [];
    let count = {};
    for(let i = 0; i < array.length; i++){
        console.log(arr.includes([array[i]])
        if (arr.includes([array[i]]) === false) arr.push(array[i])
        
        else  arr.splice(arr.indexOf(array[i]), 1);
        
        console.log(arr)
    }
    return arr[0];
}

console.log(uniqueNumber([1,2,1,3,3]));

module.exports = uniqueNumber;
