/* Given two strings, write a function to check if the second one is a rotation of the first,
 * using only one call to isSubstring. The function isSubstring takes in two strings and returns
 * true if the second string is found in the first, false otherwise.
 *
 * h->e->l->l->o   ===   l->l-o->h->e
 * h->e->l->l->o   !==   o->l-l->h->e
 *
 * For example: stringRotation("hello", "hello") -> true
 *              stringRotation("hello", "llohe") -> true
 *              stringRotation("hello", "he") -> false
 *              stringRotation("hello", "ollhe") -> false (not a rotation, just an anagram)
 */

function isSubstring(s1, s2) {
  return s1.indexOf(s2) >= 0;
}

// if you know where to split the strings, calling to isSubstring once would be trivial.
//
// iterate through s1 and each iteration pop a character off the end and unshift on to the front of the string
// compare both strings
//
// check if both strings are the same length

// first solution
function stringRotationOne(s1, s2) {
    if (s1.length !== s2.length) {
        return false;
    }

    let sArr = s1.split('');
    for (let i = 0; i < sArr.length; i += 1) {
        sArr.unshift(sArr.pop());
        if (sArr.join('') === s2) {
            return true;
        }
    }
    return false;
}

// second solution
function stringRotation(s1, s2) {
    if (s1.length !== s2.length) {
        return false;
    }

    if (isSubstring(s1.concat(s1), s2)) {
        return true;
    }
    return false;
}

console.log(stringRotation('hello', 'llohe'));
console.log(stringRotation("hello", "llohe"));
console.log(stringRotation("hello", "he"));
console.log(stringRotation("hello", "ollhe"));


module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
