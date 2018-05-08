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
 * Regex expression… checks if all characters are letters, case insensitive
 * (ex: IS_WORD.text(str))
*/ 
const IS_WORD = /^[a-zA-Z]+$/; 

const reverse = str => Array.from(str).reverse().join('');

function matchWord(str) {

    const openWords = [];

    let currentWord = "";

    for (let i = 0; i < str.length; i++) {
        const char = str.charAt(i);
        const isWord = IS_WORD.test(char);

        if (isWord) {
            // append char to currentWord & convert all to lowercase
            currentWord += char.toLowerCase();
        }
        
        if ((!isWord || (i + 1) === str.length) && currentWord.length > 0) {
            // check if currentWord closes out previous word if at end of currentWord or end of str
            if (reverse(currentWord) === openWords[openWords.length - 1]) {
                // pop last openWord if the currentWord closes it out
                openWords.pop();
            } 
            else {
                // push currentWord to openWords if it doesn't close out the last open word
                openWords.push(currentWord);
            }

            // reset the currentWord
            currentWord = "";
        }
        else {
            // ignore non-word characters if we don't have a currentWord
        }
    }

    return openWords.length === 0;
}

// console.log(matchWord('__END_DNE-----'));                                   // -> true
// console.log(matchWord('__ENDDNE__'))                                        // -> false       (not separated by a space)
// console.log(matchWord('IF()()fi[]'));                                       // -> true        (should be case-insensitive)
// console.log(matchWord('for__if__rof__fi'));                                 // -> false     not properly closed. like ( [) ] 
// console.log(matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw'));  // -> true
// console.log(matchWord(''));                                                 // -> true

module.exports = matchWord;
