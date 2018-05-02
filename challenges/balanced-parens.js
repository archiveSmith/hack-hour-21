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
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *
 */

function balancedParens(input){
    let isBalanced = [];
    let openBracket = "[(\]{]";
    let closeBracket = "[)\]}]";
    console.log(openBracket);
    
    if (input[0] === '[' && input[1] === ']') {
      return true;
    } else {
      return false;
    }
    
    for (var i = 0; i < input.length; i++) {
      // simple test: if input[0] is equal to input[input.length - 1], return true
      // complex test: opening "bracket" must match a closing "bracket" with nothing getting in way. 
        // if input[i] is an opening "bracket" push it onto stack
        // if input[i] is a closing "bracket" check if it matches the most recent opening bracket. 
          // if so pop both items from stack and repeat
          // if the stack empties and is equal to the string being finished, then return true
          // if at any time, a closing bracket does NOT match a most recent opening bracket return false.
    }
    
}

module.exports = balancedParens;
