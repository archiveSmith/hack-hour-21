/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */
//loop backwards from smallest of the two 
//as looping, check to see if the number you're getting as you're looping is divisible
//into both a and b
//the first number you get that is will be the gcd (i think???)

function gcd(a, b) {
  let lilNum;

  (a < b) ? lilNum = a : lilNum = b;

  for (let i = lilNum; i > 0; i--){
    if (a % i === 0 && b % i === 0){
      return i;
    }
  }
}

module.exports = gcd;