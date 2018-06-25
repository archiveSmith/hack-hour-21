/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
    let obj = {};

    if (a < b) {
        for (let i = 1; i <= Math.floor(Math.sqrt(a)); i += 1) {
            if (a % i === 0) {
                obj[i] = ' ';
                obj[a / i] = ' ';
            }
        }
        let maxNum = 0;
        for (let key in obj) {
            if (b % Number(key) === 0) {

                if (Number(key) > maxNum) {
                    maxNum = Number(key);
                }
            }
        }

        return maxNum;
    }
    else {
        for (let j = 1; j <= Math.floor(Math.sqrt(b)); j += 1) {
            if (b % j === 0) {
                obj[j] = ' ';
                obj[b / j] = ' ';
            }
        }
        let maxNum = 0;
        for (let key in obj) {
            if (a % Number(key) === 0) {

                if (Number(key) > maxNum) {
                    maxNum = Number(key);
                }
            }
        }

        return maxNum;
    }


}

module.exports = gcd;

console.log(gcd(24, 6))