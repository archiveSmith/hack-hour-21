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
    //make a stack of the string
    //check the reverse of the string
    //if half of the arrays are identical, then true
    // let re = /(\w)*\w(?=")|\w+/g;
    // let word = str.match(re);
    // word[0].replace(/^"([^"]+)"$/,"$1");
    // word[0].replace(/\s+/," ");
    // console.log(word);
    //
    if(str.length === 0){return true;}
    let re = /([a-zA-Z]+)/g;
    let word = str.match(re);
    // console.log(word);
    for (let i = 0; i<word.length; i++){
        for (let j = 1; j < word.length; j++){
            let nextWord = word[j].split("").reverse().join("");
                console.log("this is nextWord", nextWord);
            if (word[i] == nextWord){
                // console.log("word[i]",word[i]);
                // console.log("word[j]", word[j]);
                if (i+1 !== j){
                    let newString = word.slice(i+1, j-1)
                    return matchWord(newString.toString());
                }
                else{ return true};
        } else{
            continue;
        }
        }
    }
    return false;
};
    // if(word[0] == word[word.length-1].reverse()){
    //     word.shift();
    //     word.splice(-1,1);
    //     return matchWord(word.toString());

console.log(matchWord('__ENDDNE__'));
module.exports = matchWord;