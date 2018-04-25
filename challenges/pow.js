/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power, prevVal = 1) {
    if (power > 0) {
        prevVal *= base;
        power -= 1;
    }
    else if (power < 0) {
        prevVal /= base;
        power += 1;
    }

    return power === 0 ? prevVal : pow(base, power, prevVal);
}

// console.log(pow(5, 3)); // expect 125
// console.log(pow(2, 6)); // expect 64
// console.log(pow(5, -2)); // expect 1/25

module.exports = pow;
