// Write a function that takes a number as an argument and returns its english word representation as a string. Answers should be in upper camel case (a.k.a. Pascal case). Don't worry about spaces.
// Include support for 11-19 ('Eleven', 'Twelve', 'Thirteen', ... 'Nineteen').


/**
 * numToWords(0) -> 'Zero'
 * numToWords(43) -> 'FortyThree'
 * numToWords(2999) -> 'TwoThousandNineHundredNintyNine'
 * numToWords(15) -> 'Fifteen'
 * numToWords(2483579411) -> 'TwoBillionFourHundredEightyThreeMillionFiveHundredSeventyNineThousandFourHundredEleven'
 * numToWords(300525151340440) -> 'ThreeHundredTrillionFiveHundredTwentyFiveBillionOneHundredFiftyOneMillionThreeHundredFortyThousandFourHundredForty'
 * numToWords(92,120,000,000,000,000) -> 'NintyTwoQuadrillionOneHundredTwentyTrillion'
 */

//  hundred 
//  thousand 4
//  million 7
//  billion 10
//  trillion 13
//  quadrillion 16
//  quintillion 19
//  sextillion 22
//  septillion 25
//  octillion 28
//  nonillion 31


function numToWords(num) {
    let ones = {
        0: "Zero",
        1: "One",
        2: "Two",
        3: "Three",
        4: "Four",
        5: "Five",
        6: "Six",
        7: "Seven",
        8: "Eight",
        9: "Nine",
        10: "Ten",
        11: "Eleven",
        12: "Twelve",
        13: "Thirteen",
        14: "Fourteen",
        15: "Fifteen",
        16: "Sixteen",
        17: "Seventeen",
        18: "Eighteen",
        19: "Nineteen",
    }

    let tens = {
        2: "Twenty",
        3: "Thirty",
        4: "Forty",
        5: "Fifty",
        6: "Sixty",
        7: "Seventy",
        8: "Eighty",
        9: "Ninety",
      }

    let bigs = {
        1: "Million",
        2: "Billion", 
        3: "Trillion", 
        4: "Quadrillion",
        5: "Quintillion", 
        6: "Sextillion", 
        7: "Septillion", 
        8: "Octillion", 
        9: "Nonillion"
    }

    let n = String(num).split('');
    // split the string into triplets from the back
    let triplets = [];
    let counter = 1;
    let len = n.length;
    while (len) {
        if (n.length < 4) {
            triplets.push();
            break;
        }
        if (counter % 3 === 0) {
            triplets.push(len.slice())
        }
        counter++;
    }
        
    return triplets;
}

module.exports = numToWords;

console.log(numToWords(12123543))