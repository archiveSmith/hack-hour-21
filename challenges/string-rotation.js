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
	let compString = isSubstring(s1,s2)
	if (!compString) {
		let newS1 = s1.slice(1,s1.length-1);
		let newS2 = s2.slice(0,s2.length-2);
		return stringRotation(newS1,newS2)
	} 
	if(s1.length !== s2.length){
		return false;
	}
	if(s1.length === 0 && s2.length === 0){
		return false;
	}
	else{
		return true;
	}

}

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
