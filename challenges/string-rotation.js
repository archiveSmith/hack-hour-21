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
 *
 * hello- 01234 [0] + [0+1][0+2][0+3][0+4] slice(0)
 * elloh- 12340 [1] + [1+1][1+2][1+3][1-1] slice(1) + slice(0,1) 
 * llohe- 23401 [2] + [2+1][2+2][2-2][2-1] slice(2) + slice(0,2)
 * lohel- 34012 [3] + [3+1][3-3][3-2][3-1] slice(3) + slice(0,3)
 * ohell- 40123 [4] + [4-4][4-3][4-2][4-1] slice(4) + slice(0,4)
 * 
 */

function isSubstring(s1, s2) {
  return s1.indexOf(s2) >= 0;
}

function stringRotation(s1, s2) {
  let rotation = {}
  for (let i = 0; i <s1.length; i++) {
    if (s1[i] === s1[0]){
      rotation[i]= s1
    } else {
      rotation[i] = s1.slice(i) + s1.slice(0,i);
    }
  }
  
  for (let key in rotation) {
    if(rotation[key] === s2){
      return true;
    } 
  }
  return false;
}

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};

let strr = 'hello';
console.log(stringRotation('hello', 'ohell'))