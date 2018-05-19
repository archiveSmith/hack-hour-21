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
    let underTwenty = [
      "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"
    ];
    let tens = [
      "Ten", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"
    ];
    let scales = [
      "Hundred", "Thousand", "Million", "Billion", "Trillion", "Quadrillion"
    ];
  
    let words = [];
  
    if (num === 0) {
      return 0;
    }
  
    if (num < 20) {
      return underTwenty[num - 1];
    }
  
    if (num < 100) {
      let isOnes = num % 10;
      let isTens = Math.floor(num / 10);
      words.push(tens[isTens - 1]);
      if (isOnes !== 0) {
        words.push(numToWords(isOnes));
      }
      return words.join("");
    }
  
  }
  
  function thousandChunk(number) {
    let thousands = [];
    while (number > 0) {
      thousands.push(number % 1000);
      number = Math.floor(number / 1000);
    }
    return thousands;
  }

module.exports = numToWords;
