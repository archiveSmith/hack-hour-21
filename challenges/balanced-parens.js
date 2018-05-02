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
    const tempArray = [];
    if (input[0] === '(' || input[0] === '[' || input[0] === '{'){
      for (let i = 1; i < input.length; i++){
        tempArray.push(input[i]);
      }
      if (!tempArray.includes('(', '{', '[')){
          if (tempArray.includes)
      
    }
    
    else {
      return false;
    }
}  

module.exports = balancedParens;
