/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function findDivs(n) {
    const result = [];
    
    for(let i = 1; i <= n; i += 1) {
        if (n % i === 0) {
            result.push(i);
        }
    }
    return result;
}

function gcd(a, b) {

    const aDivs = findDivs(a);
    const bDivs = findDivs(b);

    [aDivs, bDivs].reduce((a, c) => {
        


    }, []);



}

module.exports = gcd;
