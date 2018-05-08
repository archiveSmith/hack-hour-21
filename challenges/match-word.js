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

function matchWord(str) {
  str = str.toLowerCase();
  let currWord = '';
  while (str !== '') {
    if (!str.charAt(0).match(/[A-Za-z]/) && currWord) {
      let reverse = currWord.split('').reverse().join('');
      if (str.indexOf(reverse) === -1) {
        return false;
      }
      if (!matchWord(str.slice(0,str.indexOf(reverse) - 1))) return false;
      str = str.slice(0, str.indexOf(reverse)) + str.slice(str.indexOf(reverse) + reverse.length, str.length);
      currWord = '';
    } else if (str.charAt(0).match(/[A-Za-z]/)) {
      currWord += str.charAt(0);
      str = str.slice(1);
    } else {
      str = str.slice(1);
    }
  }
  return !currWord;
}

// console.log(matchWord('__ENDDNE__'));

module.exports = matchWord;
