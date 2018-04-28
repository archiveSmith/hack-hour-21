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
  let one = 0;
  const arr = [];
  if (s1.length !== s2.length) {
    return false;
  }

  for (let i = 0; i < s2.length; i += 1) {
    if (s2[i] === s1[0]) {
      one = i;
      break;
    }
  }

  for (let i = one; i < s2.length; i += 1) {
    arr.push(s2[i]);
  }

  for (let i = 0; i < one; i += 1) {
    arr.push(s2[i]);
  }

  if (s1 === arr.join('')) {
    return true;
  }

  return isSubstring(s1, arr.join(''));
}

module.exports = { isSubstring, stringRotation };
