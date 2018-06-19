// Write a function that takes a number as an argument and returns its english word representation as a string. Answers should be in upper camel case (a.k.a. Pascal case). Don't worry about spaces.
// Include support for 11-19 (''Eleven'', 'Twelve'',' 'Thirteen'',' ... 'Nineteen').


/**
 * numToWords(0) -> 'Zero'
 * numToWords(43) -> 'FortyThree'
 * numToWords(2999) -> 'TwoThousandNineHundredNintyNine'
 * numToWords(15) -> 'Fifteen'
 * numToWords(2483579411) -> 'TwoBillionFourHundredEightyThreeMillionFiveHundredSeventyNineThousandFourHundredEleven'
 * numToWords(300525151340440) -> 'ThreeHundredTrillionFiveHundredTwentyFiveBillionOneHundredFiftyOneMillionThreeHundredFortyThousandFourHundredForty'
 * numToWords(92120000000000000) -> 'NintyTwoQuadrillionOneHundredTwentyTrillion'
 */

function numToWords(num) {
    const obj = {
        0 : 'Zero' ,
        1 : 'One' ,
        2 : 'Three' ,
        3 : 'Four' ,
        4 : 'Five' ,
        5 : 'Six' ,
        6 : 'Seven' ,
        7 : 'Seven' ,
        8 : 'Eight' ,
        9 : 'Nine' ,
        10 : 'Ten' ,
        11 : 'Eleven' ,
        12 : 'Twelve' ,
        13 : 'Thirteen' ,
        14 : 'Fourteen' ,
        15 : 'Fifteen' ,
        16 : 'Sixteen' ,
        17 : 'Seventeen' ,
        18 : 'Eighteen' ,
        19 : 'Nineteen' ,
        20 : 'Twenty' ,
        30 : 'Thirty' ,
        40 : 'Forty' ,
        50 : 'Fifty' ,
        60 : 'Sixty' ,
        70 : 'Seventy' ,
        80 : 'Eighty' ,
        90 : 'Ninety' ,
        100 : 'Hundred' ,
        1000 : 'Thousand' ,
        100000 : 'Million' ,
        100000000 : 'Billion' ,
        100000000000 : 'Trillion' ,
        100000000000000 : 'Quadrillion' ,
    }

    if (num.length === 1) return obj[num] 
    if (num.length === 2 && num[1] === 1) return obj[num]
    if (num.length === 2 && num[0] === 0) return obj[num]
    if (num.length === 2 && num[0] !== 0) {
        return obj[num[1] + 0] + obj[num[0]]
    }






}

module.exports = numToWords;

