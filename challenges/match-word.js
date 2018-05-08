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
  let words = [];
  let word = [];
  const letters = /[a-zA-Z]/;
  let pass = true;
  str.split('').forEach((e, i, arr) => {
    if (letters.test(e)) {
      word.push(e);
    } else if (word.length > 0) {
      words.push(word.join('').toLowerCase());
      word = [];
    }
    if (i === arr.length - 1 && words.length > 0) words.push(word.join(''));
  });
  words = words.filter(e => e !== '');
  if (words.length < 2) return false;
  const wordsMarked = [];
  words.forEach((e) => {
    const flipped = (e.split('').reverse().join('')) + '.o'
    if (!words.includes(e.split('').reverse().join(''))) pass = false; 
    if (wordsMarked.includes(flipped)) wordsMarked.push(e + '.c');
    else wordsMarked.push(e + '.o');
  });
  if (!pass) return false;
  let tracker = [];
  let finalCheck = true;
  wordsMarked.forEach((e, i, arr) => {
    if (e.slice(-2) === '.c') {
      const eCut = e.slice(0, -2);
      const prevCut = tracker[tracker.length - 1].slice(0, -2);
      // console.log('e: ', e, ' eCut: ', eCut, 'prevCut: ', prevCut);
      if (prevCut !== eCut.split('').reverse().join('')) {
        pass = false;
      }
      else tracker.pop();
    } else tracker.push(e);
  });
  return pass;
}

// console.log(matchWord('__END_DNE-----'));
// console.log(matchWord('__ENDDNE__'));
// console.log(matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw'));
// console.log(matchWord('for__if__rof__fi'));
// console.log(matchWord('IF()()fi[]'));

module.exports = matchWord;
