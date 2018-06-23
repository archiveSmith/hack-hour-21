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
    if (!str) return true;
    str = str.toLowerCase();
    // keep adding letters while it matches a-z
    let arr = str.match(/([a-zA-Z]+(?:_[a-zA-Z]+)*)/g);
    let words = arr.reduce((acc, el) => {
        if (el.includes('_')) return acc.concat(el.split('_'));
        return acc.concat(el);
    }, [])
    
    if (words.length === 1) return false;

    let wordHolder = [];

    for (let i = 0; i < words.length; i++) {
        let rev = words[i].split('').reverse().join('');
        if (wordHolder.indexOf(rev) !== -1) {
            wordHolder.pop();
        } else {
            wordHolder.push(words[i]);
        }
    }

    return wordHolder.length === 0;


}

module.exports = matchWord;

console.log(matchWord('__END_DNE-----')); // -> true
console.log(matchWord('__ENDDNE__'));  //-> false       (not separated by a space)
console.log(matchWord('IF()()fi[]'));  //-> true        (should be case-insensitive)
console.log(matchWord('for__if__rof__fi'));  //-> false     not properly closed. like ( [) ] 
console.log(matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw')); // -> true
console.log(matchWord(''));  //-> true