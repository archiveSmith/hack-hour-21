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
}

function getAllPerms(str) {

    let results = [];

    if (str.length === 1) {
        results.push(str);
        return results;
    }

    for (let i = 0; i < str.length; i += 1) {
        let  first = str[i];
        let remains = str.substring(0, i) + str.substring(i + 1);
        let innerPerms = getAllPerms(remains);
        for (let j = 0; j < innerPerms.length; j += 1) {
            results.push(first + innerPerms[j]);
            let thisPerm = (first + innerPerms[j]);
            console.log(thisPerm);
        }
    }

    return results;
}



console.log(getAllPerms('abc'));

module.exports = permPalin;
