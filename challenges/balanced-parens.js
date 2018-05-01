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
  let brackets = 0;
  let parens = 0;
  let braces = 0;
  for (let i = 0; i < input.length; i += 1) {
    if (input.charAt(i) === '[') {
      brackets += 1;
      for (let j = i + 1; j < input.length; j += 1) {
        if (input.charAt(j) === ']') {
          brackets += 1;
          input = input.slice(0, j) + input.slice(j + 1, input.length);
          break;
        }
      }
    } else if (input.charAt(i) === '(') {
      parens += 1;
      for (let j = i + 1; j < input.length; j += 1) {
        if (input.charAt(j) === ')') {
          parens += 1;
          input = input.slice(0, j) + input.slice(j + 1, input.length);
          break;
        }
      }
    } else if (input.charAt(i) === '{') {
      braces += 1;
      for (let j = i + 1; j < input.length; j += 1) {
        if (input.charAt(j) === '}') {
          braces += 1;
          input = input.slice(0, j) + input.slice(j + 1, input.length);
          break;
        }
      }
    } else if (input.charAt(i) === ']' || input.charAt(i) === ')' || input.charAt(i) === '}') return false;
  }
  return brackets % 2 === 0 && parens % 2 === 0 && braces % 2 === 0;
}

module.exports = balancedParens;
