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

const isPalin = (str1) => {
  for (let i = 0; i < Math.floor(str1.length / 2); i++) {
    if (str1[i] !== str1[str1.length - 1 - i]) return false;
  }
  return true;
}


function permPalin(str2) {
  //run isPalin on pieces of str2
  for (let i = 0; i < str2.length - 1; i++) {
    console.log(str2.substring(i));
    if(isPalin(str2.substring(i + 1))) return true;
  }
  return false;
}

module.exports = permPalin;