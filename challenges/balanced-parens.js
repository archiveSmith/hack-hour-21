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
  const arr = input.split('');
  const output = [];
  const useless = [];

  for (let i = 0; i < arr.length; i += 1) {
    const str = '{}[]()';
    if (str.indexOf(arr[i]) > -1) {
      output.push(arr[i]);
    } else {
      return false;
    }
  }
  for (let j = 0; j < output.length; j++) {
    if (output[j] === '}') {
      if (output.indexOf('{') > -1) {
        output.splice(0, output.indexOf(output[j]));
      }
    }
    if (output[j] === ')') {
      if (output.indexOf('(') > -1) {
        output.splice(0, output.indexOf(output[j]));
      }
    }
    if (output[j] === ']') {
      if (output.indexOf('[') > -1) {
        output.splice(0, output.indexOf(output[j]));
      }
    }
  }
  if (output.length === 3) {
    return true;
  }
  return false;
}

module.exports = balancedParens;
