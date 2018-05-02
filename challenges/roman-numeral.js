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

function romanNumeral(n) {
    const lookup = {1: 'I', 5: 'V', 10: 'X', 50: 'L', 100: 'C', 500: 'D', 1000: 'M'}
    const numbers = [1, 5, 10, 50, 100, 500, 1000];
    // let leastGreater = Math.min(...numbers.filter( e => e >= n))
    // console.log(leastGreater);
    let firstNumeral = String(n).charAt(0);
    let romanNumeral = '';
    let remainingValue;
    function recurse(value) {
        let numeral = String(value).charAt(0);
        console.log(numeral);
        let leastGreater = Math.min(...numbers.filter( e => e >= value))
        let greatestLessThan = Math.max(...numbers.filter( e => e <= value))
        if (remainingValue <= 0) {
            return romanNumeral
        }
        else if (firstNumeral === '9' || firstNumeral === '4') {
            romanNumeral = lookup[leastGreater] + romanNumeral;
            remainingValue = leastGreater - value;
            return recurse(remainingValue);
        }
        else if (numeral === '9' || numeral === '4') {
            remainingValue = leastGreater - value;
            remainingValue = leastGreater - parseInt(numeral);
            console.log(remainingValue);
            romanNumeral = recurse(remainingValue) + lookup[leastGreater];
            return recurse(remainingValue);
        }
        else {
            romanNumeral = romanNumeral + lookup[greatestLessThan];
            console.log(romanNumeral);
            remainingValue = value - greatestLessThan;
            console.log(remainingValue);
            return recurse(remainingValue);
        }
    }
    return recurse(n);

}

module.exports = romanNumeral;

console.log(romanNumeral(40))

// 1     ->    I
// 4     ->    IV
// 5     ->    V
// 9     ->    IX
// 10    ->    X
// 40    ->    XL
// 50    ->    L
// 90    ->    XC
// 100   ->    C
// 400   ->    CD
// 500   ->    D
// 900   ->    CM
// 1000  ->    M