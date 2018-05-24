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
    //split the string into different groups
    let letters = str.split("");
    let count = {};
    for (let l = 0; l < letters.length; l++) {
        if (count[letters][l] == undefined) {
            count[letters][l] = 1;
        }
        count[letters][l] += 1;
    }
    let values = Object.keys(count).map(function(key){
        return count[key];
    });
    values.forEach((v) => {if(v%2 === 0 || v === 1){
        retur
    }
    })

}
module.exports = permPalin;