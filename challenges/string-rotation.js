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
  let testLength = Math.ceil(s1.length / 2);
  let test1 = s1.slice(0, testLength);
  let test2 = s1.slice(testLength - 1);
  
  if (s2.includes(test1) || s2.includes(test2)) return true;
  else return false;
  
}

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
