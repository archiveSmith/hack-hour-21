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
    let recordi = []
    let a;
    let b;
    
    for(let i = 0; i < str.length; i++){
        if(/^[a-zA-Z]+$/.test(str[i])){
            recordi.push(str[i]);
            if(/^[a-zA-Z]+$/.test(str[i+1])===false){
                recordi.push("/")
                a = i;
                i = str.length +1
        }}
    }

    let recordj = []
    for(let j = str.length - 1; j > 0; j--){
        if( /^[a-zA-Z]+$/.test(str[j]) ){
            recordj.push(str[j]);
            if(/^[a-zA-Z]+$/.test(str[j-1])===false){
                recordj.push("/")
                b = j;
                j = 0;
            }
    }
}
    console.log(recordi);
    if(recordj.join('').toLowerCase() === recordi.join('').toLowerCase() && a <= b ){
        return true;
}
    else{
        return false;
    }

}

console.log(matchWord('__ENDDNE__'))

module.exports = matchWord;
