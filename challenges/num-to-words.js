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
    const one_through_nineteenArr = [ 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', ' nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tensArr = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const scalesArr = ['hundred', 'thousand', 'million', 'billion', 'trillion'];
  
    const isTruthy = (item) => {
        return !!item;
    }
    
      const chunk = (num) => {
        let thousands = [];
  
        while (num > 0) {
            thousands.push(num%1000);
            num = Math.floor(num / 1000);
        }
      return thousands;
    }
  
    const inEnglish = (num) => {
      let thousands, hundreds, tens, ones, words = [];
  
      if (num < 20) return one_through_nineteenArr[num - 1];
  
      if (num < 100) {
        ones = num % 10;
        tens = num / 10 | 0;
        hundreds = num / 100 | 0;
        
        words.push(scalesArr[hundreds]);
        words.push(tensArr[tens - 1]);
        words.push(inEnglish(ones));
  
        return words.filter(isTruthy).join('-');
      }
      
      if (num > 100 && num < 1000) {
        ones = num % 10;
        tens = num / 10 | 0;
        hundreds = num / 100;
        
        words.push(scalesArr[hundreds]);
        words.push(tensArr[tens - 1]);
        words.push(inEnglish(ones));
        
      }

      if (num > 1000 && num < 10000) {
        ones = num % 10;
        tens = num / 10 | 0;
        hundreds = num / 100;
        thousands = num / 1000;
        
        words.push(scalesArr[thousands]);
        words.push(scalesArr[hundreds]);
        words.push(tensArr[tens - 1]);
        words.push(inEnglish(ones));
        
      }
    }
  
    const appendScale = (chunk, exp) => {
        let scale;
        if (!chunk) return null;
  
        scale = scalesArr[exp - 1];
        return [chunk, scale].filter(isTruthy).join(" ");
    }
  
    let string = chunk(num).map(inEnglish).map(appendScale).filter(isTruthy).reverse().join(" ");
    return string;
  
  }

module.exports = numToWords;
