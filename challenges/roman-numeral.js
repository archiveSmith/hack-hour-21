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
    if (n === 0){
        return romanNumeralArray.join('');
    }
    else if (n >= 1000){
        romanNumeralArray.push('M');
        return romanNumeral(n-1000);
    }
    else if (n >= 900){
        romanNumeralArray.push('CM');
        return romanNumeral(n-900);
    }
    else if (n >= 500){
        romanNumeralArray.push('D');
        return romanNumeral(n-500);
    }
    else if (n >= 400){
        romanNumeralArray.push('CD');
        return romanNumeral(n-400);
    }
    else if (n >= 100){
        romanNumeralArray.push('C');
        return romanNumeral(n-100);
    }
    else if (n >= 90){
        romanNumeralArray.push('XC');
        return romanNumeral(n-90);
    }
    else if (n >= 50){
        romanNumeralArray.push('L');
        return romanNumeral(n-50);
    }
    else if (n >= 40){
        romanNumeralArray.push('XL');
        return romanNumeral(n-40);
    }
    else if (n >= 10){
        romanNumeralArray.push('X');
        return romanNumeral(n-10);
    }
    else if (n >= 9){
        romanNumeralArray.push('IX');
        return romanNumeral(n-9);
    }
    else if (n >= 5){
        romanNumeralArray.push('V');
        return romanNumeral(n-5);
    }
    else if (n >= 1){
        romanNumeralArray.push('I');
        return romanNumeral(n-1);
    }

}

romanNumeral(5);
module.exports = romanNumeral;
