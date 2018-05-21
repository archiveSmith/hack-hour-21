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
  let permutations = permut(str);
  for (let i = 0; i < permutations.length; i++) {
    if (isPalindrome(permutations[i])) return true;
    if (i === permutations.length - 1) return false;
  }
}

function isPalindrome(str) {
    if (str.length <= 0) return true;

    if (str[0] === str[str.length-1]) {
      if (str.length >= 2) {
        return isPalindrome(str.slice(1,str.length-1));
      }
      else {
        return true;
      }
    }
    else {
      return false;
    }
}

function permut(string) {
  if (string.length < 2) return string;
  let permutations = [];
  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    let remaining = string.slice(0, i) + string.slice(i + 1, string.length);
    for (let subperm of permut(remaining)) {
      permutations.push(char + subperm);
    }
  }
  return permutations
}

module.exports = permPalin;