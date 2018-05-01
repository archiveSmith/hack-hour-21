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
  // function to return a valid opening bracket for a given closing bracket
  const valid = (char) => {
    if (char === '}') return '{';
    if (char === ']') return '[';
    if (char === ')') return '(';
    return null;
  };
  // counters
  let numOpen = 0;
  let numClosed = 0;
  // array to track the last unclosed bracket
  const savedLastEs = [];
  // split array and reduce to return a boolean
  return input.split('').reduce((acc, char) => {
    // do work only if boolean is still true
    if (acc) {
      // if opening bracket...
      if (/\{|\(|\[/.test(char)) {
        numOpen += 1;
        // add opening bracket to end of saved brackets array
        savedLastEs.push(char);
      }
      // if closing bracket...
      if (/\}|\)|\]/.test(char)) {
        numClosed += 1;
        // main test - check to ensure a closing bracket does not appear
        // after an opening bracket of a different type
        if (savedLastEs[savedLastEs.length - 1] !== valid(char)) return false;
        // remove properly closed closing bracket from end of saved brackets array
        savedLastEs.pop();
      }
    }
    return acc;
  }, true) && (numOpen === numClosed); // returning reduce boolean + counters equivalency
}

module.exports = balancedParens;
