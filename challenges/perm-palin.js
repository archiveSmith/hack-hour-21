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

function permPalin(str) {
    let letterCount = {};
    for (let i = 0; i < str.length; i++) {
      let letter = str[i];
      if (letterCount[letter]) letterCount[letter]++;
      else letterCount[letter] = 1;
    }
  
    let groups = 0;
    for (let keys in letterCount) {
      if (letterCount[keys] % 2 === 0 || letterCount[keys] % 3 === 0) groups++;
    }
  
    if (groups === 1 && str.length % 2 === 0) return false;
    if (groups < (groups - str.length)) return false;
    if (groups === str.length / 2) return true;
    else return true;
  }

module.exports = permPalin;