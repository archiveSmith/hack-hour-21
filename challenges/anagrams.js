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

function anagrams(string, output = []) {
  if(output.length >= Math.pow(string.length, 2)) {
    let anag = [];
    output.forEach(el => {
      if(!anag.includes(el)) anag.push(el);
    });
    return anag;
  }
  else {
    let letters = string.split('');
    letters.push(letters[letters.length-2]);
    letters.splice(letters.length-3, 1);
    output.push(letters.join(''));
    let word = [];
    for(let i = letters.length -1; i >= 0; i--){
      word.push(letters[i])
    }
    output.push(word.join(''));
    return anagrams(word.join(''), output);
  }
}




module.exports = anagrams;
