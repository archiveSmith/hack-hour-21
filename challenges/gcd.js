/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 gcd(10, 8)
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
    if (b === 0) return a;
    if( a > b ){
        console.log("here is the a>b", b)
        gcd(b, a%b)
        //divide a by b, get the dividend
        //then divide b by the dividend, then the answer is the gcd
        
    }
    else{
        console.log("here is b>a", b)
        gcd(b, b%a);
    }
}

// gcd(10, 9)

module.exports = gcd;