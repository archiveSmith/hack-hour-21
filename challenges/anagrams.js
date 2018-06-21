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
  //for each letter in string, loop over the same string
  //if the letter is not the same as the iterable, then form concat the string and collect them
  // taking each of the collection, loop through them and compare with each letter in string
  //if not found, then concat the collection item to the letter compared
  //each letter, adding the different combinations of the rest.
  //recurse through the string until string is length of zero, return the concated string.
  let collection = {};
  function getperms(string, final = "") {
    if (string.length === 0) return (collection[final] = true);
    for (let s = 0; s < string.length; s++) {
      let firstLetter = string[s];
      let remaining = string.replace(string[s], "");
      // console.log("REMAINING", final.concat(firstLetter));
      getperms(remaining, final.concat(firstLetter));
    }
    return;
  }
  getperms(string);
  // console.log("collection",collection);
  return Object.keys(collection);

  //capture the first letter
}
// var result = anagrams("abcsdft");
// console.log(result);

module.exports = anagrams;
