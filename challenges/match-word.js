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

function matchWordsdf(tstr) {
    // split each string on a regex that includes non alpha numeric characters into an array stringArr.
    // create a separate holding array tmp
    // for each word in stringArr
        // push into tmp
        // if the word is a reverse of a word already in tmp
            // if the word 

    strArr = str.split(/[^A-Za-z]+/).filter(w => w != '');
    const tmp = [];
    const matches = {}

    console.log(strArr) ;

    strArr.forEach(word => {
        matches[word] = word.split('').reverse('').join('');
        if (word in matches) {
            tmp.push(word);
        } else if (tmp.includes(word.split('').reverse('').join(''))) {
            console.log('rev');
            if (word !== tmp.pop()) {
                consoloe.log(false);
            }
        }
    });
    console.log(true);
}

function matchWord(str) {

    strArr = str.split(/[^A-Za-z]+/).filter(w => w != '');
    let tmp = [];
    const matches = {}


    strArr.forEach(word => {
        tmp.push(word);
        if (tmp.includes(word.split('').reverse('').join(''))) {
            tmp.pop();
            let i = tmp.indexOf(word.split('').reverse('').join(''))
            tmp = tmp.slice(0, i).concat(tmp.slice(i + 1));
            console.log(tmp);
        }
    });
    if (tmp.length = 0) {
        console.log(true);
    }
    console.log(false);
}


// function balancedParens(input) {
// 
//   const tracker = [];
// 
//   const matches = {
// 
//     '{': '}',
// 
//     '[': ']',
// 
//     '(': ')',
// 
//   };
// 
//   for (let i = 0; i < input.length; i++) {
// 
//     if (input[i] in matches) tracker.push(input[i]);
// 
//     else if (input[i] === ')' || input[i] === '}' || input [i] === ']') {
// 
//       if (input[i] !== matches[tracker.pop()]) return false;
// 
//     }
// 
//   }
// 
//   return tracker.length === 0;
// 
// }

matchWord('__END_DNE-----');
// true
matchWord('__ENDDNE__');
// false
matchWord('IF()()fi[]');
// true
matchWord('for__if__rof__fi');
// false
matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');
// true
matchWord('');
// true

module.exports = matchWord;
