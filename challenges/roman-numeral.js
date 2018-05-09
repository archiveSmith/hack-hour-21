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

//i: roman numeral as a string, for example IV or LV
//o: integer sum
//iterage through romal numeral input, check if element matches special combinations in combo object

function romanNumeral(n) {
    if (n.length === 1) return romans[n];

    let sum = 0;
    const arr = n.split('');
    const romans = {
        I : 1,
        IV : 4,
        V : 5,
        IX : 9,
        X : 10,
        XL : 40,
        L : 50,
        XC : 90,
        C : 100,
        CD : 400,
        D : 500,
        CM : 900,
        M : 1000,
    }
    for (let i = 0; i < arr.length; i ++) {
        let combo = arr[i] + arr[i + 1]
        for (let key in romans) {
            if (key === combo) {
                sum += romans.combo
                i ++;
            }
        }        
        sum += romans.arr[i]
    }
    return sum;
}

module.exports = romanNumeral;
