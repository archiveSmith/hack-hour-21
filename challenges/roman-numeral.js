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
  if (typeof n !== 'number') throw new Error('romanNumeral: Numbers only please!');
  // base case, we've subtracted down to 0 (or messed up somehow)
  if (n <= 0) return '';
  // otherwise, add the 'biggest' possible character and call recursion on the remainder
  if (n >= 1000) return 'M' + romanNumeral(n - 1000);
  if (n >= 900) return 'CM' + romanNumeral(n - 900);
  if (n >= 500) return 'D' + romanNumeral(n - 500);
  if (n >= 400) return 'CD' + romanNumeral(n - 400);
  if (n >= 100) return 'C' + romanNumeral(n - 100);
  if (n >= 90) return 'XC' + romanNumeral(n - 90);
  if (n >= 50) return 'L' + romanNumeral(n - 50);
  if (n >= 40) return 'XL' + romanNumeral(n - 40);
  if (n >= 10) return 'X' + romanNumeral(n - 10);
  if (n >= 9) return 'IX' + romanNumeral(n - 9);
  if (n >= 5) return 'V' + romanNumeral(n - 5);
  if (n >= 4) return 'IV' + romanNumeral(n - 4);
  if (n >= 1) return 'I' + romanNumeral(n - 1);
}

module.exports = romanNumeral;
