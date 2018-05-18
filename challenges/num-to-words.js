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

const ones = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
const tens = ['Ten', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
const teens = ['Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
const thousands = ['', 'Thousand', 'Million', 'Billion', 'Trillion', 'Quadrillion'];

function convertThousand(num, th) {
  let output = '';
  if (num === 0) return output;
  if (num > 99) {
    output += ones[Math.floor(num / 100)] + 'Hundred';
    num %= 100;
  }
  if (num < 20 && num > 9) {
    output += teens[num % 10];
  } else if (num > 9) {
    output += tens[Math.floor(num / 10) - 1];
    num %= 10;
    if (num) output += ones[num];
  }
  return output + thousands[th];
}

// console.log(convertThousand(10, 3));

function numToWords(num, th = 0) {
  if (num === 0 && th === 0) return ones[num]; // Return Zero
  if (num < 1000) {
    return convertThousand(num, th);
  } else {
    return numToWords(Math.floor(num / 1000), th + 1) + convertThousand(num % 1000, th);
  }
}

// console.log(numToWords(20000000011));

module.exports = numToWords;
