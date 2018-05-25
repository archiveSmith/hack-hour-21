/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  const aDivisors = divisors(a);
  const bDivisors = divisors(b);
  const commonDivisors = aDivisors.filter(x => bDivisors.indexOf(x) !== -1);
  return commonDivisors.pop();
}

function divisors(x) {
  const divisors = [];
  for (let i = 1; i <= x; i += 1) {
    if ((x / i) % 1 === 0) divisors.push(i);
  }
  return divisors;
}

module.exports = gcd;
