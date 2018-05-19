// Write a function that takes a number as an argument and returns its english word representation as a string. Answers should be in upper camel case (a.k.a. Pascal case). Don't worry about spaces.
// Include support for 11-19 ('Eleven', 'Twelve', 'Thirteen', ... 'Nineteen').


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
    // let word = {
    //     '1': 'One',
    //     '2': 'Two',
    //     '3': 'Three',
    //     '4': 'Four',
    //     '5': 'Five',
    //     '6': 'Six',
    //     '7': 'Seven',
    //     '8': 'Eight',
    //     '9': 'Nine',
    //     '10': 'Ten',
    //     '11': 'Eleven',
    //     '12': 'Twelve',
    //     '13': 'Thirteen',
    //     '20': 'Twenty',
    //     '30': 'Thirty',
    //     '40': 'Fourty',
    //     '50': 'Fifty',
    //     '60': 'Sixty',
    //     '70': 'Seventy',
    //     '80': 'Eighty',
    //     '90': 'Ninety',
    //     '100': 'Hundred'
    // }
    // let decimal = {
    //     '12': 'Trillion',
    //     '9': 'Billion',
    //     '6': 'Million',
    //     '3': 'Thousand',
    //     '2': 'Hundred'
    // }
    // //the power of ten yields the decimal
    // let decWord = [];
    // let dec = Math.log(num)/Math.log(10);
    // for (let key in decimal){
    //     if(dec.toString() === decimal[key]){
    //     let lead = num%(Math.pow(10,dec));
    //     let trail = Math.floor(num/(Math.pow(10,dec)))
    //     let newNum = Math.floor(num%(Math.pow(10,dec)))
    //     decWord.push(word[trail]);
    //     decWord.push(decimal[lead]);
    //     } 
    // }



}

module.exports = numToWords;
