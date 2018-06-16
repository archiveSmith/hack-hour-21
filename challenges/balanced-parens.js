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
    let arr = input.match(/[{}()\[\]]/gi, '')
    if (arr.length % 2) return false;
    let left = 0;
    let right = arr.length;
    let p = false;
    let b = false;
    let s = false;
    let last = [];
    let count = 0;
    
    while (left < right) {
      if (arr[left] === '[') {
        last.push('[');
        b = true;
        count++;
      }
      if (arr[left] === '(') {
        last.push('(');
        p = true;
        count++;
      }
      if (arr[left] === '{') {
        last.push('{');
        s = true;
        count++;
      }
      if (arr[left] === ']') {
        if (last[last.length - 1] !== '[') {
          return false;
        }
        b = false;
        count--;
        last.pop();
      }
      if (arr[left] === ')') {
        if (last[last.length - 1] !== '(') {
          return false;
        }
        p = false;
        count--;
        last.pop();
      }
      if (arr[left] === '}') {
        if (last[last.length - 1] !== '{') {
          return false;
        }
        s = false;
        count--;
        last.pop();
      }
      left++;
    }
    return (!p && !b && !s && count === 0);
  }
  

console.log(balancedParens('('));
console.log(balancedParens('()'));
console.log(balancedParens(')('));
console.log(balancedParens('(())'));
console.log(balancedParens('[](){}'));
console.log(balancedParens('[({})]'));
console.log(balancedParens('[(]{)}'));
console.log(balancedParens(' var wow  = { yo: thisIsAwesome() }'));
console.log(balancedParens(' var hubble = function() { telescopes.awesome();'));

module.exports = balancedParens;
