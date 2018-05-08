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
//shift all to caps
//loop to middle
//must have space in the middle of words

//shift all to caps
//loop to middle
//must have space in the middle of words

function matchWord(str) {
  let capsWord = str.toUpperCase();
  capsWord = capsWord.replace(/\W/g, '');
  console.log(capsWord);
  let strArray = [];
  let backwardsStrArray = [];
  
  if (capsWord.includes('_')){
  for (var i = 0; i < capsWord.length; i++){
      strArray.push(capsWord[i]);
  }
  for (var z = capsWord.length - 1; z > 0; z--){
      backwardsStrArray.push(capsWord[z]);
  }
  
  return arraysEqual(strArray, backwardsStrArray);
  }
  
  else {
    return false;
  }
  }
  
  function arraysEqual(arr1, arr2) {
      if(arr1.length !== arr2.length)
          return false;
      for(var i = arr1.length; i--;) {
          if(arr1[i] !== arr2[i])
              return false;
      }
  
      return true;
  }
  
   matchWord('__END_DNE-----');
   
module.exports = matchWord;

