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
	// base case: whenn array is 0 or 1, do not reverse and return
	// recursively swapping the first and the last elements of the array;
	if(array.length = 0){return};
	if(array.length  = 1){return};
	console.log("here we go");
	array.shift();
	array = array.splice(array.length - 1, 1);
	return reverseInPlace(array);
	var tmp = array[0];
	array[0] = array[array.length - 1];
	array[array.length - 1] = tmp;
	console.log("here is the reversed array");
	console.log(array);
	return array;


}

module.exports = reverseInPlace;
