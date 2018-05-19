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
    const tab = {0:'Zero', 1:"One", 2:"Two", 3:"Three", 4:"Four", 5:"Five", 6:"Six", 7:"Seven", 8:"Eight", 9:"Nine", 10:"Ten",
                11:"Eleven", 12:"Twelve", 13:"Thirteen", 14:"Fourteen", 15:"Fifteen", 16:"Sixteen", 17:"Seventeen", 18:"Eighteen",
                19:"Nineteen", 20:"Twenty", 30:"Thirty", 40:"Forty", 50:"Fifty", 60:"Sixty", 70:"Seventy", 80:"Eighty", 90:"Ninety",
                100:"Hundred", 1000:"Thousand", 1000000:"Million", 1000000000:"Billion"};
    if(num < 21) ;
    if( num < 100 ) return [tab[parseInt(num.toString()[0])*10]]
    let numString = [];
    for(let i = 0; i < num.toString().length; i++){
        if(num.toString().length - i === 1) numString.push(tab[parseInt(num.toString().slice(i))]);
        if(num.toString().length - i === 2) numString.push(tab[parseInt(num.toString().slice(i, i+1)[0])*10]);
        if(num.toString().length - i === 3) {numString.push(tab[parseInt(num.toString().slice(i, i+1))], tab[100]); i = i+1;}
        if(num.toString().length - i === 4) {numString.push(tab[parseInt(num.toString().slice(i, i+1))], tab[1000]); i = i+1;}
        if(num.toString().length - i === 5) {numString.push(tab[parseInt(num.toString().slice(i, i+2))], tab[1000]); i = i+2;}
        if(num.toString().length - i === 5) {numString.push(tab[parseInt(num.toString().slice(i, i+2))], tab[1000]); i = i+2;}

        }
    return numString.join('');
    }





console.log(numToWords(50056))


module.exports = numToWords;
