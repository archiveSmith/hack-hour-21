/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
  let negative = false;
  if (power < 0) {
    power = Math.abs(power);
    negative = true;
  }
  const originalBase = base;
  const newFunc = (acc, power2) => {
    if (power2 < 0) power2 += 1;
    if (power2 === 0) return 1;
    if (power2 === 1) return acc;
    acc *= originalBase;
    power2 -= 1;
    return newFunc(acc, power2);
  };
  if (negative) return 1 / newFunc(base, power);
  return newFunc(base, power);
}

module.exports = pow;
