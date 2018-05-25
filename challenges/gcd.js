/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function union(a, b) {
  const output = {};
  for (var key in b) {
    if (a.hasOwnProperty(key)) output[key] = b[key];
  }
  return output;
}

function gcd(a, b) {
  const aDiv = {};
  const bDiv = {};
  for (let i = 1; i < a + 1; i += 1) {
    if (a % i === 0) {
      aDiv[i] = ' ';
    }
  }
  for (let j = 1; j < b + 1; j += 1) {
    if (b % j === 0) {
      bDiv[j] = ' ';
    }
  }
  const merge = union(aDiv, bDiv);
  let max = -Infinity;
  for (var key in merge) {
    if (Number(key) > max) max = Number(key);
  }
  return max;
}

// console.log(gcd(24, 6));

module.exports = gcd;