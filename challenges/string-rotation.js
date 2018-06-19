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
  const s4 = s2 + s2;
  for (let i = 0; i < s4.length; i++) {
    if (s4[i] === s1[0]) {
      let i2 = i;
      for (let j = 1; j < s1.length; j++) {
        i2 += 1;
        if (s4[i2] !== s1[j]) return false; 
      }
      return true;
    }
  }
}

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
