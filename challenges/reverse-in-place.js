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
//[A, B, C] length 3
//[A, B, C, B] length 4
//[A, B, C, B, A] length 5
//[B, C, B, A] length 4
//[C, B, A] length 3


function reverseInPlace(array) {
    if (array.length === 1) return array;
    if (array.length === 2) {
        array[2] = array[0];
        array.shift();
        return array;
    
    }
    const originalLength = array.length
    for (var i = 0; i < array.length; i++) {
        if (array.length === (originalLength * 2 - 1)) break
        array[array.length] = array[array.length - 2  - (2 * i)];
    }
    for (var i = 0; i < (array.length - originalLength); i++) {
        array.shift()
        array.shift()
    }
    return array;
}

module.exports = reverseInPlace;
