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

function recursiveAn(arr, output = [], string = '') {
  if (string.length === arr.length) {
    return string;
  }
  for (let i = 0; i < arr.length; i += 1) {
    if (string.indexOf(arr[i]) === -1) {
      string += arr[i];
      output.push(recursiveAn(arr, output, string));
      string = string.slice(0, -1);
    }
  }
  return output;

}

function anagrams(string) {
  const pieces = string.split('');
  return recursiveAn(pieces).filter(str => str.length === pieces.length);
}

console.log(anagrams('abcd'));

module.exports = anagrams;
