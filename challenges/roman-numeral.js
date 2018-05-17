/* Given a positive integer, return it as a string in Roman Numeral form.
 * Some basic conversions are given below:
 *
 *      1     ->    I
 *      4     ->    IV
 *      5     ->    V
 *      9     ->    IX
 *      10    ->    X
 *      40    ->    XL
 *      50    ->    L
 *      90    ->    XC
 *      100   ->    C
 *      400   ->    CD
 *      500   ->    D
 *      900   ->    CM
 *      1000  ->    M
 * 
 */

function below10(n) {
    if (n <= 4) {
        if (n === 4) {
            let r = 'I'.repeat(3);
            return r + 'V';
        }
        let r = 'I'.repeat(n);
        return r;
    }
    if (n < 9) {
        let r = 'V';
        if (n > 5) {
            return r + 'I'.repeat(n - 5);
        }
        return r;
    }
    if (n === 9) {
        return 'IX';
    }
}

function below50(n) {
    if (n < 10) {
        return below10(n);
    }
    if (n < 40) {
        return 'X'.repeat(Math.floor(n / 10)) + below10(n % 10);
    }
    if (n < 90) {
        let r = 'L'
        if (n < 50) {
            return 'X' + r + below10(n - 40);
        }
    }
}

function romanNumeral(n) {
    if (n < 10) {
        return below10(n);
    }
    if (n < 50) {
        return below50(n);
    }
    if (n < 90) {
        return 'L' + below50(n - 50);
    }
}

const romans = {I: 1, IV: 4, V: 5, IX: 6, X: 10, XL: 40, L: 50, XC: 90, C: 100, CD: 400, D: 500, CM: 900, M: 1000};
for (let i = 0; i < Objec.keys(romans); i += 1){
    while (num > )
}


console.log(romanNumeral(3));
console.log(romanNumeral(4));
console.log(romanNumeral(5));
console.log(romanNumeral(8));
console.log(romanNumeral(38));
console.log(romanNumeral(47));
console.log(romanNumeral(73));


module.exports = romanNumeral;
