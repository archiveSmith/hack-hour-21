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

// use values as index
// use each value will point to an index twice except for the unique value
function uniqueNumber(array) {
    return array.reduce((a, c) => a ^ c);
}

// console.log(uniqueNumber([4, 4, 5, 5, 2, 8, 8, 12, 12, 99, 99]));
// 
// console.log(uniqueNumber([1,2,1,3,3]));
// -> 2

module.exports = uniqueNumber;
