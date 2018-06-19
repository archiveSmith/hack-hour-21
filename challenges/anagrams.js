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

  //time complexity is n^k where k is the length of the input string

function anagrams(string) {
  let result = [];
  let split = string.split('');

  for (let i = 0; i < split.length; i++) {
    for (let j = 0; j < split.length; j++) {
      for (let k = 0; k < split.length; k++) {
        if (split[i] !== split[j] && split[j] !== split[k] && split[i] !== split[k]) result.push(split[i] + split[j] + split[k]);
      }
    }
  }

  return result;
}

module.exports = anagrams;
