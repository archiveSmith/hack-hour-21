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
 * input: {string}
 * output: {boolean}- true if the parens are balanced, otherwise false
 * approach:   
 *  - convert string to array -> .split('')
 *  - check for opening bracket (, {, [, ], }, )
 *      - /\(/ |/\)/ |/\{/| /\}/| /\[/| /\]/
 *  - 
 */

function balancedParens(input){
    let stringArr = input.split(''); //convert string to array
    console.log(stringArr);
    let checkParens = []
    stringArr.foreach (function(elem) {
        if (elem === /\(/ ))
    }
    }

}

module.exports = balancedParens;

balancedParens('hello');