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
    //If input is not a string, return false
    if (typeof input !== 'string') return false;

    //Remove non-bracket characters from input. If the resulting cleaned string has an odd length, return false.
    let cleaned = input.replace(/[^\(|\[|\(|\{|\}|\)|\]]/g,'')
    if (cleaned.length % 2 !== 0) return false

    //Set up reveresed and backwards lookups
    let reversed = {
        '(' : ')',
        '{' : '}',
        '[' : ']',
        ')' : '(',
        '}' : '{',
        ']' : '['
    };
    let backwards = [')', ']', '}'];
    
    //Loop through cleaned string and check for balanced brackets
    for (let i = 0; i < cleaned.length; i++) {
        let current = cleaned[i];
        let reversedChar = reversed[current]
        
        //If first bracket in the cleaned string is a backwards bracket, return false
        if (i === 0 && backwards.includes(current)) return false;

        //If there is an odd number of characters between the current element and the last reversed element, return false. 
        if ((cleaned.lastIndexOf(reversedChar) - cleaned.indexOf(current) - 1) % 2 !== 0) return false;
    }
    return true;
}

module.exports = balancedParens;
