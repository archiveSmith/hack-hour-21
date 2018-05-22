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
  if (str.length < 2) return true;
  return Object.values(str.split('').reduce((acc, e) => {
    if (/\s/.test(e)) return acc;
    if (!acc[e]) acc[e] = 1;
    else acc[e] += 1;
    return acc;
  }, {})).filter(e => e % 2 !== 0).length <= 1;
}

module.exports = permPalin;