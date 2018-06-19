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
        if(count[array[i]]) count[array[i]] += 1;
        if (!count[array[i]]) count[array[i]] = 1;
        if (count[array[i]] === 1) arr.push(array[i]);
        if (count[array[i]] === 2) arr.splice(arr.indexOf(array[i]), 1);
    }
    return arr[0];
}

console.log(uniqueNumber([1,2,1,3,3]));

module.exports = uniqueNumber;
