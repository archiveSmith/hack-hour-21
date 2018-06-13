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
  let resultArr = [];
  let counterArr = [];
  // helper function to swap letters
  const swap = (str, i, j) => {
    let temp = str[i];
    str[i] = str[j];
    str[j] = temp;
  }
  // put the second letter in the first position, and shuffle behind
  // put the third letter in the first position, and shuffle behind
  // split the input string into an array
  charArr = string.split('');

  // declare a count array to keep track of the number of letters that are being swapped
  for (let i = 0; i < charArr.length; i++) {
    counterArr[i] = 0;
  }

  // declare an index to loop over
  let i = 0;
  while (i < charArr.length) {
    // here is how you keep a given letter at the front of the anagram
    if (counterArr[i] < i) {
      swap(charArr, i % 2 === 1 ? counterArr[i] : 0, i);
      counterArr[i]++;
      i = 0;
      resultArr.push(charArr.join(''));
    } else {
      counterArr[i] = 0;
      i++;
    }
  }
  return resultArr;  
}

let result = anagrams('abc');
console.log(result);
module.exports = anagrams;
