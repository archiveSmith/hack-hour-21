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
  let odds = (evens = 0);
  let cache = {};
  str.split("").forEach(ele => {
    cache[ele] ? (cache[ele] += 1) : (cache[ele] = 1);
  });
  for (let key in cache) {
    if (cache[key] % 2 === 0) evens += 1;
    else odds += 1;
  }
  if (odds <= 1) return true;
  else return false;
}

module.exports = permPalin;
