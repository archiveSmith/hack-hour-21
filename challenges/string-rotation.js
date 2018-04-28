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
  if (typeof s1 !== 'string' || typeof s2 !== 'string') return false;
  const num = s2.indexOf(s1.split('')[0]);
  const cutOff = s2.slice(num, s2.length);
  const first = s2.slice(0, num);
  return isSubstring(cutOff.concat(first), s1)
}

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
