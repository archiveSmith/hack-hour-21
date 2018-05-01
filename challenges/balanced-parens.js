/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens( ' var hubble = function() { telescopes.awesome();' ); // false
 *
 *
 */

function balancedParens(input){
    let inputArr = input.split('');
    let testArrForward = [];
    let testArrReverse = [];
    let resultArr = [];
  
   const isOpenParenthesis = (char) => {
      let str = '{[(';
      if (str.indexOf(char) > -1) {
        return true;
        } else {
        return false;
      }
   }

   const isClosedParenthesis = (char) => {
     let str = '}])';
     if (str.indexOf(char) > -1) {
         return true;
     } else {
         return false;
     }
   }

   for (let i = 0; i < input.length; i++) {
       testArrForward.push(isOpenParenthesis(input[i]));
   }
    console.log(testArrForward);
   for (let j = input.length; j > 0; j--) {
       testArrReverse.push(isClosedParenthesis(input[j]));
   }
    //console.log(testArrReverse);
  
  testArrReverse.reverse();
  console.log(testArrReverse);

  
    for(var i = testArrForward.length; i--;) {
        if(testArrForward[i] !== testArrReverse[i]) {
          resultArr.push(false)}
      else {resultArr.push(true)}
    }
  
  console.log(resultArr);
  if (resultArr.includes(false)) return false
  else return true;
  
  
}
module.exports = balancedParens;
