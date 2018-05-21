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
  if (!typeof str === 'string') return undefined;
  let map = {};
  str.split('').forEach((char) => {
    if (map.hasOwnProperty(char)) map[char] += 1;
    else map[char] = 1;
  });
  let odds = 0;
  for (let char in map) {
    if (map[char] % 2) odds +=1;
  }
  return odds <= 1;
}

// console.log(permPalin('cbac'));

module.exports = permPalin;