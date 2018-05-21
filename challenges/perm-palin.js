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
  const cache = {};
  for (let i = 0; i < str.length; i += 1) {
    if (cache[str[i]]) {
      delete cache[str[i]];
    } else if (!cache[str[i]]) {
      cache[str[i]] = true;
    }
  }
  return Object.keys(cache).length > 1 ? false : true;
}

module.exports = permPalin;
