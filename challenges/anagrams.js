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
  let cache = {};
  let grams = [ string ];
  let tempStr = string;
  for (let i = 0; i < string.length; i += 1) {
    tempStr = tempStr.slice(1).concat(tempStr[0]);
    cache[tempStr] = 1;
    for (let j = 0; j < string.length; j += 1) {

    }
  }
  return cache;
}

console.log(anagrams('abc'));

module.exports = anagrams;
