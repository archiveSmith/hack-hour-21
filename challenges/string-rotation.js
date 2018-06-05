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
  // create a new string by repeating s2
  let newString;

  if ( s1.length !== s2.length ) return false; // can't be the same because they are not the same length
  
  newString = s2.repeat(2); // repeat s2 twice...so that we can take into account any order in the string
  // "hellohello" contains all rotations of "hello"
  
  // finally call isSubstring to check
  return isSubstring(newString, s1);

}


module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
