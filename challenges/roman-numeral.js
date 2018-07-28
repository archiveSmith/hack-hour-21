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
    conv = [
        ["I", "V"],
        ["X", "L"],
        ["C", "D"],
        ["M"]
    ]
    const num = n.toString();
    let output = '';
    let j = 0;
    for(let i = num.length-1; i >= 0; i--){
        let chfr = parseInt(num[i])
 
        if(0 < chfr && chfr < 4){
            output = conv[j][0].repeat(chfr) + output;
            
        }
        if(3 < chfr && chfr < 6){
            output = conv[j][1] + conv[j][0].repeat(5-chfr) + output;

        }
        if(5 < chfr && chfr < 9){
            output = conv[j][1] + conv[j][0].repeat(chfr-5) + output;
        }
        if(chfr === 9){
            output = conv[j+1][0] + conv[j][0] + output;
        }
        j++;
        
    }
    return output;
}
        
        
        
    //     if(rst >= 4){
    //         output.concat(chfr*"M");
        
        
    //     if(rst === 3){
    //         if(0 < chfr < 4){
    //             output.concat(chfr*"C");
    //         }
    //         if(3 < chfr < 6){
    //             output.concat((5-chfr)*"C", "D")
    //         }
    //         if(5 < chfr < 9){
    //             output.concat("D", (chfr-5)*"C")
    //         }
    //         if(chfr === 9){
    //             output.concat("CM")
    //         }
    //     }

    //     if(rst === 2){
    //         if(0 < chfr < 4){
    //             output.concat(chfr*"X");
    //         }
    //         if(3 < chfr < 6){
    //             output = output.concat((5-chfr)*"X", "L")
    //             console.log(output);
    //         }
    //         if(5 < chfr < 9){
    //             output.concat("L", (chfr-5)*"X")
    //         }
    //         if(chfr === 9){
    //             output.concat("XC")
    //         }

    //     }

    //     }
    // }




console.log(romanNumeral(2458));

module.exports = romanNumeral;
