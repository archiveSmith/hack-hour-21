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

function balancedParens(input) {
  let booly = true;
  let length = input.length;

  newInput = input.split("");
  for (let i = 0; i < length; i += 1) {
    if (newInput[0] === "(" && newInput.indexOf(")") === -1) {
      booly = false;
    }
    if (newInput[0] === "[" && newInput.indexOf("]") === -1) {
      booly = false;
    }
    if (newInput[0] === "{" && newInput.indexOf("}") === -1) {
      booly = false;
    }
    // if (newInput[0] === '(' && newInput.indexOf(']') !== -1 && newInput.indexOf(']') < newInput.indexOf(')')) booly = false;
    newInput.shift();
  }

  return booly;
}

module.exports = balancedParens;
