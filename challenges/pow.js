/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
    if (power < 0) {return undefined}
    let output = 0;
    if (power === 0) {
        return 1;
    }
    else {
        power--;
        return base * pow(base, power);
    }
    return pow(base, power);
}

module.exports = pow;

