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
  const count = {};
  for (let i = 0; i < str.length; i += 1) {
    const letter = str[i];
    count[letter] = count[letter] ? count[letter] + 1 : 1;
  }

  let hasOddCount = false;
  for (const key in count) {
    const isOdd = count[key] % 2 > 0;
    if (isOdd) {
      if (hasOddCount) {
        return false;
      } else {
        hasOddCount = true;
      }
    }
  }

  return true;
}

module.exports = permPalin;
