/**
 * Given a string, determine if any of the permutations of that string is a palindrome
 *
 * Example:
 * 	- permPalin('abab') => true
 * 	- permPalin('cbaba') => true
 * 	- permPalin('cbac') => false
 * 	- permPalin('a') => true
 *
 * input: {str}
 * output: {true} if any permutations of input string that is a palindrome,
 * false otherwise
 * approach:
 *  change all letters to lowercase
 *  even number of characters = pairs of same letters
 *  odd number of characters = pairs of same letters and once stand alone letter 
 *  
 */

function permPalin(str) {
	str.toLowerCase().split('');
}


module.exports = permPalin;