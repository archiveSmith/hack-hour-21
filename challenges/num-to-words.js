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
  if (num === 0) return 'Zero'
  const thruTeens = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
  const tens = ['Ten', 'Eleven', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
  const digits = ['', '', 'Hundred', 'Thousand', '', '']
  function recur(num) {
    // if (num >= 1000 ) return thruTeens[Math.floor(num / 10)] + recur(num - (Math.floor(num / 10) * 10));
    if (num >= 1000000000) return tens[Math.floor(num / 1000000000)] + 'Billion' + recur(num - (Math.floor(num / 1000000000) * 1000000000));
    if (num >= 100000000) return thruTeens[Math.floor(num / 100000000)] + 'Billion' + recur(num - (Math.floor(num / 100000000) * 100000000));
    if (num >= 10000000) return tens[Math.floor(num / 10000000)] + 'Million' + recur(num - (Math.floor(num / 10000000) * 10000000));
    if (num >= 1000000) return thruTeens[Math.floor(num / 1000000)] + 'Million' + recur(num - (Math.floor(num / 1000000) * 1000000));
    if (num >= 100000) return thruTeens[Math.floor(num / 100000)] + 'HundredThousand' + recur(num - (Math.floor(num / 100000) * 100000));
    if (num >= 10000) return tens[Math.floor(num / 10000)] + 'Thousand' + recur(num - (Math.floor(num / 10000) * 10000));
    if (num >= 1000) return thruTeens[Math.floor(num / 1000)] + 'Thousand' + recur(num - (Math.floor(num / 1000) * 1000));
    if (num >= 100) return thruTeens[Math.floor(num / 100)] + 'Hundred' + recur(num - (Math.floor(num / 100) * 100));
    if (num >= 20) return tens[Math.floor(num / 10)] + recur(num - (Math.floor(num / 10) * 10));
    if (num >= 0) return thruTeens[num];
  }
  return recur(num);
}

module.exports = numToWords;

