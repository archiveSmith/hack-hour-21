/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 * 
 * input: {number} base
 * output: {number} power
 * example: (2, 5) 2 * 2 * 2 * 2 * 2
 *     (any number,0) is 1 --> base case: power at zero
 *      (0,0) is undefined
 * 
 *  let product = 1
 * for (let i = power; power > 0; power--)
 *      product *= base;
 */

function pow(base, power) {
    if (base === 0 && power === 0) {
        return 'undefined';
    }
    if (base === 0 && power > 0) {
        return 0;
    }
    if (power === 0) {
        return 1;
    }
    return base * pow(base, power - 1);
}

module.exports = pow;

console.log(pow(5,0));