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
 * Since strings are immutable in javascript, we will be reversing an array of characters instead.
 *
 * DO NOT USE THE BUILT IN REVERSE METHOD
 */

function reverseInPlace(array) {
    let savedItem;
    let arrayLength = array.length; // optimizing because I use this many times later in the loop
    for (let i = 0; i < Math.ceil(arrayLength/2); i++) {
        savedItem = array[i];
        array[i] = array[arrayLength-1-i];
        array[arrayLength-1-i] = savedItem;
    }
    return array;
}
 

module.exports = reverseInPlace;
