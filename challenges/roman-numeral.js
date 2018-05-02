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

const translate = [
  { 1000: 'M' },
  { 900: 'CM' },
  { 500: 'D' },
  { 400: 'CD' },
  { 100: 'C' },
  { 90: 'XC' },
  { 50: 'L' },
  { 40: 'XL' },
  { 10: 'X' },
  { 9: 'IX' },
  { 5: 'V' },
  { 4: 'IV' },
  { 1: 'I' }
];

function romanNumeral(n) {
  let output = '';
  while (n > 0) {
    for (let i = 0; i < translate.length; i += 1) {
      if (n >= Object.keys(translate[i])[0]) {
        output += translate[i][Object.keys(translate[i])[0]];
        n -= Object.keys(translate[i])[0];
        break;
      }
    }
  }
  return output;
}

module.exports = romanNumeral;
