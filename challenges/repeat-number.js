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
    let i = 0;

    while (true) {
        if (array[Math.abs(array[i])] > 0) {
            array[Math.abs(array[i])] = - array[Math.abs(array[i])];
        } else {
            return Math.abs(array[i]);
        }
        i += 1;
    }
}

// let a = [1, 2, 3, 4, 5, 6, 7, 4, 9]

// console.log(repeatNumbers(a));

module.exports = repeatNumbers;

