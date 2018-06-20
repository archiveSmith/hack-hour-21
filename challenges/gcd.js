/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

const divisors = (num) => {
  const arr = [];
  let i = 1;
  while (i <= Math.floor(num / 2)) {
    if (num % i === 0) arr.unshift(i);
    i++;
  }
  arr.unshift(num);
  return arr;
}

function gcd(a, b) {
  if (a < 1 || b < 1) return undefined;

  const arrA = divisors(a);
  // arrA === [5, 2, 1]
  const arrB = divisors(b);
  // arrB === [8, 4, 2, 1]
  let largestDivisor = -Infinity;
  for (let i = 0; i < arrA.length; i++) {
    for (let j = 0; j < arrB.length; j++) {
      if ((arrA[i] === arrB[j]) && (arrA[i] > largestDivisor)) largestDivisor = arrA[i];
    }
  }
  return largestDivisor;
}

module.exports = gcd;