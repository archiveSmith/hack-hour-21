// Some languages have "if" statements that are closed by "fi" instead of curly brackets. Or they close a "case" with "esac", 
//i.e. the same keyword backwards. for this problem we'll check that all words in a string are "closed". Write a function that 
//takes a string and returns true if every word is closed by its backwards counterpart. Words must be separated by space or 
//punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ] 
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

/*
input: {string}
output: {true} if every word is closed by its backwards counerpart. otherwise false
approach:
- lowercase toLowerCase
- words must be separated by space or punctuation
- call stack approach
- 

*/

function matchWord(str) {
  newStr = str.toLowerCase();
  const matches = {

}
}

function balancedParens(input) {
    const tracker = [];
    const matches = {
      '{': '}',
      '[': ']',
      '(': ')',
    };
    for (let i = 0; i < input.length; i++) {
      if (input[i] in matches) tracker.push(input[i]);
      else if (input[i] === ')' || input[i] === '}' || input [i] === ']') {
        if (input[i] !== matches[tracker.pop()]) return false;
      }
    }
    return tracker.length === 0;
  }
let w = 'EI %$& %(A'.split(' ');

console.log(w);
module.exports = matchWord;
