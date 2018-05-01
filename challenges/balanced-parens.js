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

const closeParensMapping = {')' : '(',
                            '}' : '{',
                            ']' : '['}

function balancedParens(input){
    const parens = [];
    for (let i = 0; i < input.length; i++) {
        const char = input.charAt(i);
        if (char ===  '(' || char ===  '{' || char ===  '[') {
            // push to parens arrays
            parens.push(char);
        }
        else if (char ===  ')' || char ===  '}' || char ===  ']') {
            const lastChar = parens[parens.length - 1];
            if (closeParensMapping[char] === lastChar) {
                // parens are balanced… remove last element from parens array
                parens.pop();
            }
            else {
                return false;
            }
        }
    }
    return true;
}

console.log(balancedParens('[](){}'));
console.log(balancedParens('[({})]'));
console.log(balancedParens('[(]{)}'));

module.exports = balancedParens;
