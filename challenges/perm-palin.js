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
    let count = str.split('').reduce((count, char) => {
        count[char] = (count[char] || 0) + 1
        return count;
    }, {});

    let odd = 0;

    Object.values(count).forEach(el => {
        if (el % 2) odd++;
    });

    return odd <= 1;
}

module.exports = permPalin;
