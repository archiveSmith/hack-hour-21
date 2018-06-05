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

    // brackets array emulates a stack
    // We're going to push on all of the opening brackets we see
    // When we see a closing bracket we want to match it up with our top of the stack
    // If it matches we pop it off, if not, we return false

function balancedParens(input){
    
    if (input.length === 0) return true;
    
    const bracketsArray = [];
    const openingbrackets = "({[";
    const closingbrackets = ")}]";

    let currChar; // the current character we are readinng from input
    let stackTopChar; // the character at the top of the stack
    let matchingChar; // the matching bracket of the character at the top of the stack
    //loop through the string
    for (let c=0; c<input.length; c++){
        currChar = input.charAt(c);
        if ( openingbrackets.indexOf(currChar) !== -1  ) {
            // we found an opening bracket...push onto stack
            bracketsArray.push(currChar);
        }
        else if ( closingbrackets.indexOf(currChar) !== -1 ) {
            // we found a closing bracket...check to see if it matches the last one on our stack
            if ( bracketsArray.length === 0 ) {return false;} // this closing bracket doesn't match what we have

            // see if the closing bracket matches the top of our stack
            stackTopChar = bracketsArray.pop();
            matchingChar = openingbrackets.charAt(closingbrackets.indexOf(currChar));

            if (stackTopChar !== matchingChar ) return false;
        }

    }

    // We've looped through our string...
    // Finally, check to see if we have any leftover open brackets in our array
    // If we have anything left over return false, otherwise return true.

    return ( bracketsArray.length === 0 ); 

}

// test cases with Quokka
// console.log( balancedParens('(')) 
// console.log( balancedParens( "[(]{)}" ) ); 
// console.log(balancedParens("[({})]"));
// console.log(balancedParens("[[](){}({})]"));

module.exports = balancedParens;
