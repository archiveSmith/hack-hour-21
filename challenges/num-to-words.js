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
  let lookup = {
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

  let units = {
    1: "ty",
    2: "Hundred",
    3: "Thousand",
    4: "ty",
    5: "Hundred",
    6: "Million",
    7: "ty",
    8: "Hundred",
    9: "Billion",
    12: "Trillion",
    15: "Quadrillion",
  }

  let string = String(num);
  let returnedString = '';

  if (num <= 20) return lookup[num];
  if (string.length === 2) return ;

  let done = 0;
  let remaining = string.length;
  for (let i = 0; i < string.length; i++) {
    done++;
    remaining--;
    if (remaining === 2 && parseInt(string) <= 20) {
      returnedString += lookup[num]
    }
    else {
      returnedString += lookup[string[i]];
      if (remaining > 0) returnedString += units[remaining];
    }
  }

  return returnedString;
}


module.exports = numToWords;
