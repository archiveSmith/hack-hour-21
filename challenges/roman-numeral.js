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
 * 
 * 
 *  1 => I
 *  5 => V
 *  10 => X
 *  50 => L
 *  100 => C
 *  500 => D
 *  1000 => M
 * 
 */

 const intervals = [1000, 500, 100, 50, 10, 5, 1];
 const chars = ['M', 'D', 'C', 'L', 'X', 'V', 'I'];

function romanNumeral(num, appendedTo = '') {
    if (num === 0) return appendedTo;

    for (let i = 0; i < intervals.length; i++) {
        const intervalNum = intervals[i];
        if (num >= intervalNum) {
            num -= intervalNum;
            appendedTo += chars[i];
            return romanNumeral(num, appendedTo);
        }
        else {
            for (let j = i; j > 0; j--) {
                const prevIntervalNum = intervals[j];
            }
        }

    }
}

console.log(romanNumeral(1617));

module.exports = romanNumeral;
