/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example:
  * var result = anagrams('abc');
  * console.log(result); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  * 
  * input- {string}
  * output- {array} of anagrams of a string
  * approach- substr() or splice or slice?
  */

function anagrams(string) {
  let result = [];
  let length = string.length;
  for (i = 0; i <= length; i++) {
    let startingLetter = string[i];
    for (j = 0; j <= length; i++) {

    } 

  }
}

module.exports = anagrams;
