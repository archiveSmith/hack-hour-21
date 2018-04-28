'use strict';
/**
 * Write a function to reverse an array in place
 *
 * "In place" means "without creating a new object in memory"
 *
 * In some languages, strings are mutable (like in Ruby). In other languages,
 * such as Python and Javascript, strings are immutable, meaning they cannot
 * be changed after they're created.  
 *
 * Since strings are immutable in javascript, we will be reversing an array of 
 * characters instead.
 *
 * DO NOT USE THE BUILT IN REVERSE METHOD
 * 
 * input: {array} [a,b,c,d,e]
 * output: {array} with elements reversed in order [e,d,c,b,a]
 * approach:
 * - loop 
 * - slice to make a copy of the array
 * - splice to remove elements from array and replace with its copy
 * 
 */

function reverseInPlace(array) {
    let copyArr = array.slice();
    let lastIndex = array.length - 1;
    for (let i = 0; i < array.length; i++) {
        array.splice(i, 1, copyArr[lastIndex - i]);
    }
    return array;
}

var r = [6,3,5,1,2];
console.log(reverseInPlace(r));
module.exports = reverseInPlace;
