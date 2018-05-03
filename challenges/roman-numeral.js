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
    let romanNumConvert = {
      1: 'I',
      4: 'IV',
      5: 'V',
      9: 'IX',
      10: 'X',
      40: 'XL',
      50: 'L',
      90: 'XC',
      100: 'C',
      400: 'CD',
      500: 'D',
      900: 'CM',
      1000: 'M'
    };
    
    let numString = String(n);
    let splitNumString = numString.split("");
    let length = splitNumString.length;
    console.log(splitNumString.length);
    if(length === 4) {
      for (let i = 0; i < length; i++) {
        
      }
    }
    if(length === 3) {
      for (let i = 0; i < length; i++) {
        
      }
    }
    if(length === 2) {
      for (let i = 0; i < length; i++) {
        
      }
    }
    if(length === 1) {
      for (let i = 0; i < length; i++) {
        
      }
    }
    
    
    
    
    let joinNumString = splitNumString.join("");
    console.log(joinNumString)
  }

module.exports = romanNumeral;
