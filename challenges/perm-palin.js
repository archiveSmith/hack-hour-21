/**
 * Given a string, determine if any of the permutations of that string is a palindrome
 *
 * Example:
 * 	- permPalin('abab') => true
 * 	- permPalin('cbaba') => true
 * 	- permPalin('cbac') => false
 * 	- permPalin('a') => true
 *
 */

function permPalin(str) {
    str = str.split("");
    for(let i = 0; i < Math.floor(str.length/2)+1; i++){
        for(let j = 0; j < str.length; j++){
            let a = str[i]
            str.splice(i, 1, str[j]);
            str.splice(j, 1, a);
            let frtWard = [];
            let bckWrd = [];
            for(k = 0, l = str.length-1; k < str.length/2; k++, l--){
                frtWard.push(str[k]);
                bckWrd.push(str[l]);
                }
            if(frtWard.join('').toLowerCase() === bckWrd.join('').toLowerCase()){
                    return true;
            }
        }
    }
    return false;
}

module.exports = permPalin;