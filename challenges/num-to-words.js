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
  let words = '';
  if ( num === 0 ) return 'Zero';

  let number = num;

  const baseTenLookup = ["", "Thousand", "Million", "Billion", "Trillion", "Quadrillion", "Quintillion", "Sextillion", "Septillion", "Octillion"];

for (let b=baseTenLookup.length-1; b>=0; b--){
  // divide the number by ... 1,000,000, 1,000, etc. so we get the triple digits for that category "millions" for example
  let workingTriplet = Math.floor(number / Math.pow(10,b*3));

  // process3digit will give us the triplet wording.  baseTenLookup will give us the category.
  if (workingTriplet > 0){
    words = words + process3digit(workingTriplet) + baseTenLookup[b];
  }

  number -= workingTriplet * Math.pow(10,b*3);

}


  return words;

}


function process3digit (num) {
  let tnum = num;
  let w = '';
  const digitsLookup = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen',];
  
  // process hundreds and subtract from number
  let hundreds = Math.floor(tnum/100); hundreds
  w += digitsLookup[hundreds];
  if (hundreds>0){
    w += 'Hundred';
  }
  tnum -= hundreds*100;

  // process tens greater than eq 20 and subtract from number
  let tens = Math.floor(tnum/10);
  if (tens >= 2){
    const tensLookup = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty','Ninety'];
    w += tensLookup[tens];
    tnum -= tens*10;
  }
  
  // process less than 20
    w += digitsLookup[tnum];

  return w;
}


// console.log( Math.floor(93/100));

// console.log( 236000/1000)

// console.log(numToWords(123));
// console.log(numToWords(34563));
// console.log(numToWords(837167134563));
// console.log(numToWords(34563));
// console.log(numToWords(34563));
// console.log(numToWords(92120000000000000));
// console.log(process3digit(312));

module.exports = numToWords;
