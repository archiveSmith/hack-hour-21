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
  */

function anagrams(string) {
  let letters = string.split('');
  let results = [];
  letters.forEach((letter) => {
    
  });
  return results;
}

var result = anagrams('abc');
console.log(result); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]

module.exports = anagrams;
