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
  const split = string.split('');
  const anagramArray = [];
  function permute(building) {
    if (building.length === split.length) {
      return anagramArray.push(building.join(''));
    }
    for (let i = 0; i < split.length; i += 1) {
      if (!building.includes(split[i])) permute([...building, split[i]]);
    }
  }
  permute([]);
  return anagramArray;
}

console.log(anagrams(''));

module.exports = anagrams;
