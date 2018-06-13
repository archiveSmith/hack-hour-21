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
  const output = [];
  const strArr = string.split('');

  for (let i = 0; i < strArr.length; i += 1) {
    for (let j = 0; j < strArr.length; j += 1) {
      for (let k = 0; k < strArr.length; k += 1) {
        output.push(strArr[i] + strArr[j] + strArr[k]);
      }  
    }
  }
  return output;
}

module.exports = anagrams;
