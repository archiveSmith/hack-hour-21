/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
    const lesser = a > b ? b : a;
    const greater = a < b ? b : a; 
    for (let i = 0; i < Math.floor(lesser / 2); i += 1) {
      const divisor = Math.floor(lesser / 2) - i;
      if (lesser % divisor === 0) {
        if (greater % divisor === 0) return divisor;
      }
    }
    return 1;
  }

module.exports = gcd;