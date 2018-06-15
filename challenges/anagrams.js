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
  let collection = [];
  let result = [];
  let arraystring = string.split("");
  for(let i = 0; i<arraystring.length; i++){
    for(let a = 0; a<string.length; a++){
      if(arraystring[i] !== string[a]){
        collection.push(arraystring[i].concat(string[a]))
      }
    }
  }
  for(let c = 0; c<string.length; c++){
    for(let e = 0; e<collection.length; e++){
      if(!collection[e].includes(string[c])){
        result.push(collection[e].concat(string[c]))
      }
    }
  }
  return result;

}
var result = anagrams('abcdd');
console.log(result);

module.exports = anagrams;

