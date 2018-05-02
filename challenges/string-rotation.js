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
  if (s1 === s2){
    return true;
  }
  else {
    let myFirstString = s1.split('');
    let mySecondString = s2.split('');
   }
    for (var i = 0; i < myFirstString.length; i++){
      if (mySecondString.includes(myFirstString[i])){
        
        for (var j = 0; j < mySecondString.length; j++){
          if (mySecondString[j] === myFirstString[i]){
            let firstSlice = myFirstString.slice(myFirstString[i]);
            let secondSlice = mySecondString.slice(mySecondString[i]);
            for (var x = 0; x < firstSlice.length; x++){
              for (var y = 0; y < secondSlice.length; y++){
                while (firstSlice[x] === secondSlice[y]){
                  if (secondSlice[y] === secondSlice.length || firstSlice[x] === firstSlice.length){
                    let sliceFromBeginning1 = myFirstString.slice(0, myFirstString[i]- 1);
                    let sliceFromBeginning2 = mySecondString.slice(0, mySecondString[i] - 1);
                    }
                    let stringBeginningSlice1 = JSON.stringify(sliceFromBeginning1);
                    let stringBeginningSlice2 = JSON.Stringify(sliceFromBeginning2);
                    
                    if (stringBeginningSlice1 === stringBeginningSlice2){
                      return true;
                    }
                      }
                    }
                return false;
              }
            }
          }
        }
      }
}
module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
