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
  
  let grams = []; 
  
  if (!string) return [''];
  
  if (string.length === 1) {
    grams.push(string);
    return grams;
  }

  string.split('').forEach((letter, index) => {
    let rest = string.slice(0, index) + string.slice(index + 1);
    let subGrams = anagrams(rest);
    
    subGrams.forEach(gram => {
      grams.push(letter + gram)
    })
  })

  return [...new Set(grams)];
}

module.exports = anagrams;
