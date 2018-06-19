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

const uniqueNumber = array => array.sort().reduce((acc, e, i, arr) => e !== arr[i + 1] && e !== arr[i - 1] ? e : acc, null);

module.exports = uniqueNumber;
