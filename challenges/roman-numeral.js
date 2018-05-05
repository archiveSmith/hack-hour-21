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
    //let numArr = (""+n).split('');
    //console.log(n / 5);
    let romans = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
      
      if (n / 5 <= 1) {
        if (n === 4) return('IV')
        else return(romans[0].repeat(n))
      }
      if (n / 10 <= 1) {
        console.log('secondCase');
        let diff5 = n - 5;
        console.log(diff5);
        if (diff5 === 0) console.log(romans[1]);
        else console.log(romans[1] + romans[0].repeat((diff5)))
      }
      if (n / 10 >= 1 && n < 40) {
        console.log('thirddCase');
        let diff10 = n - 10;
        (diff10 < 5) ? 
        console.log(diff10);
        if (diff10 === 0) console.log(romans[1]);
        else console.log(romans[2] + romans[0].repeat((diff10)))
      }
  
    
  }
  
  console.log(romanNumeral(15))
module.exports = romanNumeral;
