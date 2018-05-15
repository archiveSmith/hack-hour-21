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

// I: input is string
// O: bool

//filter keep parens, curly brace, brackets, now parens-chars should be mirrored throughout array

function balancedParens(input){
    const arr = input.split('').filter(function(x) {
        x === '(' || x === ')' || x === '[' || x === ']' || x === '{' || x === '}'
    }
    console.log('filtered input ' + arr)
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] !== arr[arr.length - 1 - i]) return false;
    }
    return true;
}  

balancedParens('(');

module.exports = balancedParens;
