/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 *balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *
 */

function balancedParens(input){
var square = /([\[\]])+|([\(\)])|([\{\}])/g;
//+([\(\)])+([\{\}]
//  var fsquare = /(\[)(\])/g;
var parent = /([\(\)])/g;
var brace = /([\{\}])/g;


// var newinputs = input.match(square).join('');
// var newinputp = input.match(parent).join('');
// var newinputb = input.match(brace).join('');

//  var s = newinputs.match(fsquare);
//  var p = newinputp.match(fparent);
//  var b = newinputb.match(fbrace);

console.log(input.match(square));
//  if( s !== null){
//      return true;
//  }
//  if( p !== null){
//      return true;
//  }
//  if( b !== null){
//      return true;
//  }
//  return false
//****** */
console.log(test);
//  console.log(p);
//  console.log(b);
//  if (input.match(fsqaure))
//  if ( s.length > 0){
//      if(input.match(bsquare).length === s.length){
//          return true;
//      } else {
//          return false;
//      }
//  }
//  if(p.length > 0) {
//      if(input.match(bparent).length === p.length){
//          return true;
//      } else {
//          return false;
//      }
//     };
// if(b.length > 0) {
//     if(input.match(bbrace).length === b.length){
//         return true;
//     } else {
//         return false;
//     }
// }
//  console.log(result);
 //first look to solve t
}

//balancedParens(' var wow  = { yo: thisIsAwesome() }');

module.exports = balancedParens;
