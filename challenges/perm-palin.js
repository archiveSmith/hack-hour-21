/**
 * Given a string, determine if any of the permutations of that string is a palindrome
 *
 * Example:
 * 	- permPalin('abab') => true
 * 	- permPalin('cbaba') => true
 * 	- permPalin('cbac') => false
 * 	- permPalin('a') => true
 *
 */
//palindrome - if string has even number of characters, it must have each of the characters exactly twice (or twice^)
//if string has odd number of characters, it must have each of the charactres exactly twice (or twice^) plus one 
function permPalin(str) {
  let strContainer = 0;
  let strArray = str.split('');
  console.log(strArray);
  if (str.length % 2 === 0);
    for (let i = 0; i < strArray.length; i++){
      count = 0;
      for (let j = 0; j < strArray.length; j++){
        if (strArray[j] === strArray[i]){
          count++;
        }
      }
    }
  }


module.exports = permPalin;