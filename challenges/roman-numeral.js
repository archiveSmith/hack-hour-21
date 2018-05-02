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

    roman = [];

    digits = {
        1: 'I',
        2: 'II',
        3: 'III',
        4: 'IV',
        5: 'V',
        6: 'VI',
        7: 'VII',
        8: 'VIII',
        9: 'XI',
    }
    
    // 1864
    // while greater than or equal to 1000 add m's and subtract
    while (n >= 1000) {
        roman.push('M');
        n -= 1000;
    }
    // 968
    // if greater than or equal to 900 push CM and subtract
    if (n >= 900) {
        roman.push('CM');
        n -= 900;
    }
    // 864
    // if greater than equal to 500 add D and subtract
    if (n >= 500) {
        roman.push('D');
        n -= 500;
        // while greater than equal to 100 add C's and subtract
        while (n >= 100) {
            roman.push('C');
            n -= 100;
        }
        // if greater than equal to 90 add XC and subtract
        if (n >= 90) {
            roman.push('XC');
            n -= 90;
        }
        // if greater than equal to 50 add L and subtract 50
        if (n >= 50) {
            roman.push('L');
            n -= 50;
            // while greater than equal to 10 add X's and subtract 10
        } else if (n >= 40) {
            roman.push('XL');
            n -= 40;
        } else {
            while (n >= 10) {
                roman.push('X')
                n -= 10;
            }
        }
    }
    // if less than 500
    if (n < 500) {
        // if (greater than equal to 400) add CD
        if (n >= 400) {
            roman.push('CD');
            n -= 400;
        }
        // else while greater than 100 add C's and subtract do same as above
        while (n >= 100) {
            roman.push('C');
            n -= 100;
        }
        // if greater than equal to 90 add XC and subtract
        if (n >= 90) {
            roman.push('XC');
            n -= 90;
        }
        // if greater than equal to 50 add L and subtract 50
        if (n >= 50) {
            roman.push('L');
            n -= 50;
            // while greater than equal to 10 add X's and subtract 10
        } else if (n >= 40) {
            roman.push('XL');
            n -= 40;
        } else {
            while (n >= 10) {
                roman.push('X')
                n -= 10;
            }
        }
    }
    // do digits logic
    // if (n)
    // push digits[n]
    
    if (n) roman.push(digits[n])
    return roman.join('')
    
}

module.exports = romanNumeral;

