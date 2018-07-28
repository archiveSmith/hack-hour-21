/**
 * I have an array where every number in the range 1...n appears once except for 
 * one number which appears twice.
 *
 * Write a function for finding the number that appears twice.
 *
 * BONUS:
 * Do this in O(n) time
 * Do this in O(1) space
 *
 */

function repeatNumbers(array) {
    let count = {};
    for(let i = 0; i < array.length; i++) {
        if(count[array[i]]) return array[i];
        count[array[i]] = 1;
        console.log(count)
        
    }
}


let arr = [3, 4, 5, 6, 6, 7, 8, 9];
console.log(repeatNumbers(arr));

module.exports = repeatNumbers;
