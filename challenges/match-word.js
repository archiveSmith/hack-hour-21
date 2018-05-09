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
  if (str === '') return true;
  if (typeof str !== 'string') return false;

  function reverseString(string) {
    return string.split("").reverse().join("");
  };

  let newStr = str.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    if (newStr.length <= 0) break;
    newStr = newStr.replace(/^[^A-Za-z]+/,'');
    newStr = newStr.replace(/[^A-Za-z]+$/,'');
    let nextGap = newStr.search(/[^A-Za-z]+/);
    if (nextGap < 0) break;
    let keyword = newStr.slice(0, nextGap);
    let reversedKeyword = reverseString(keyword);
    if (keyword === reversedKeyword) return false;
    if (newStr.indexOf(reversedKeyword, nextGap) < 0) return false;
    newStr = newStr.slice(0, nextGap);
  }
  return true;

}


module.exports = matchWord;
