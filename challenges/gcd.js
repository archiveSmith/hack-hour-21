/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  if (typeof a !== 'number' || typeof a !== 'number') return undefined;
  let biggest = 0;
  let middle = Math.floor((a > b ? a : b)/2);
  for (let i = middle; i > 0; i--) {
    if (a % i === 0 && b % i === 0) {
      if (i > biggest) biggest = i; 
    }
  }
  return biggest;
}

module.exports = gcd;