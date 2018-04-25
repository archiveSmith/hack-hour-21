/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
  if (!base && !power) return;
  function recurPow(base, power) {
    if (power === 0) return 1;
    return base * pow(base, Math.abs(power) - 1);
  }
  const returnVal = recurPow(base, power);
  if (power < 0) return 1 / returnVal;
  return returnVal;
}

console.log(pow(0, 0)); // --> undefined

console.log(pow(4, 0)); // --> 1

console.log(pow(4, 4)); // --> 256

console.log(pow(2, -4)); // --> 1/16th

console.log(1 / 16);

module.exports = pow;
