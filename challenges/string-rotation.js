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

function stringRotation(s1, s2) {
  if (s2.length !== s1.length) return false;
  if (isSubstring(s1,s2)) return true;
  else {
    for (let i = 0; i < s1.length; i += 1) {
      s2 += s2.charAt(0);
      s2 = s2.slice(1);
      if(s2 === s1) return true;
    }
    return false;
  }
}

console.log(stringRotation('ho','oh'))

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
