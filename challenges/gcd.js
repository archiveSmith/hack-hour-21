/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b, n = Math.min(a, b)) {
  if (n < 0) return undefined;
  if (a % n === 0 && b % n === 0) return n;
  return gcd(a, b, n - 1);
}

module.exports = gcd;
