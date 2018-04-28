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
    let i = array.length - 1;
    let num = 0;
    while (i > 1) {
        console.log(i, num);
        let temp = array[num];
        array[num] = array[i];
        array[i] = temp;
        num++
        i--
    } 
    return array;
  }

module.exports = reverseInPlace;
