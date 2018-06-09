/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  let big = (a>b) ? a : b;

  // loop using the bigger of the two numbers
  while ( big > 0 ) {
    if ( (a%big === 0) && (b%big ===0) ) return big;
    big--;
  }


}

// console.log(gcd(10,9));


module.exports = gcd;