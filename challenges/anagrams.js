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
  if (string === '') {
    return [];
  }
  
  if (string.length < 2) return string;

    var permutations = [];

    for (var i=0; i<string.length; i++) {
        var char = string[i];

        if (string.indexOf(char) != i) 
            continue; 

        var remainingString = string.slice(0,i) + string.slice(i+1,string.length); 

        for (var subPermutation of anagrams(remainingString))
            permutations.push(char + subPermutation)

    }
    return permutations;
}

module.exports = anagrams;
