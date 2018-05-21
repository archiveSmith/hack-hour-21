/**
 * Given a string, determine if any of the permutations of that string is a palindrome
 *
 * Example:
 * 	- permPalin('abab') => true
 * 	- permPalin('cbaba') => true
 * 	- permPalin('cbac') => false
 * 	- permPalin('a') => true
 *
 */


// It's a palidrome if the frequency of letters are even....
// and ONE of them can be odd (if the string has an odd number of letters)
function permPalin(str) {

  if ( typeof str !== 'string' ) return false;
  if ( str.length === 0 ) return false;
  // let lowerStr = str.toLowerCase();
  let lowerStr = str;

  let arr = lowerStr.split('');
  arr.sort();
  const strIsOdd = !(arr.length % 2 === 0);

  let currChar = arr[0];
  let currCharCount=1;
  let oddChars=0;

  for(let c=1; c<arr.length; c++) {
    if (arr[c] === currChar) { 
      // we're still on the same character...so add to the count
      currCharCount++;
      console.log(currCharCount);
    } else {
      if (currCharCount %2 !== 0 ) { // this char has an ODD number of occurrence 
        if ( !strIsOdd ) {
          // we found a char that has an odd number of occurrances
          // and our input str has an even number of characters
          console.log(arr);
          return false;
        } else {
          // we found a char that has an odd number of occurrances
          oddChars++;
          if (oddChars > 1){
            return false;
          }
        }
        // we've found a new char
        currChar = arr[c];
        currCharCount = 1;
      } 
      // else {
      //   if (oddChars > 1) {
      //     return false;
      //   }
      // }
    }
  }

  return true;
}

// console.log(permPalin(''));
// console.log(permPalin(123));
// console.log (permPalin('abcdabab') );
// console.log (permPalin('mayamaya') );
// console.log (permPalin('mayaZmaya') );
// console.log (permPalin('KmayaZmaya') );
// console.log (permPalin('a') );
// console.log (permPalin('cccbbbaa') );

module.exports = permPalin;