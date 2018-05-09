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
    let romanString = '';
    let workingNumber = n; 
    const lookup = {
        1:"I",
        4:"IV",
        5:"V",
        9:"IX",
        10:"X",
        40:"XL",
        50:"L",
        90: "XC",
        100:"C",
        400: "CD",
        500:"D",
        900: "CM",
        1000: "M"
    }
    const lookupKeysAsFactors = Object.keys(lookup);

    //console.log(lookupKeys)
    let divisorList;
    while ( workingNumber > 0 ) {
        // first look for the largest divisor
        divisor = -1;
        for(let i=lookupKeysAsFactors.length-1; i>=0; i--) {
            if ( (workingNumber/lookupKeysAsFactors[i]) >= 1) {
                divisor = lookupKeysAsFactors[i];
                break;
            } 
        }
        // console.log(`current Working Number: ${workingNumber}`);
        if ( divisor !== -1 ){
            //subtract from our working number
            workingNumber -= parseInt(divisor);
            //use the divisor as Lookup to add to our Roman Numeral
            romanString += lookup[divisor];
        }

        // console.log(`divisor: ${divisor}, current romanString: ${romanString}, new workingNumber: ${workingNumber}`);

    }

    return romanString;
    

}

// console.log(romanNumeral(899));
// console.log(romanNumeral(9));
// console.log(romanNumeral(55));
// console.log(romanNumeral(999));
// console.log(romanNumeral(777));
// console.log(romanNumeral(333));


// 889
// 389 = D (500)
// 89 =  DCCC (3 * 100)
// 39 = DCCCL (50)
// 9 = DCCCLXXX (3 * 10)
// 0 = DCCCLXXXIX (9)


module.exports = romanNumeral;
