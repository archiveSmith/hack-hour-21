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

    if (array.length === 1) return array  // return if only one item

    for (let i = 0; i < Math.floor(array.length / 2); i++) {
        const item = array[array.length - 1 - i];
        const swapIndex = array.length - 1 - i;
        array[swapIndex] = array[i];
        array[i] = item
    }

    return array
}

module.exports = reverseInPlace;
