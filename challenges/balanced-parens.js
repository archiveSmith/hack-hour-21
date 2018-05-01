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
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *
 */

function balancedParens(input){
    arr = [];
    let symbols = ["(", ")", "{", "}", "[", "]"];
    for(let k = 0; k < input.length; k++){
        if (symbols.includes(input[k])){
            arr.push(input[k])
        }
    }

    let j = arr.length-1;
    for(let i = 0; i <= (arr.length-1)/2; i++){
        console.log(arr[i], arr[j])
        if(arr[i] === "(" && arr[j] !== ")"){
            return false;
        }
        if(arr[i] === "{" && arr[j] !== "}"){
            return false;
        }
        if(arr[i] === "[" && arr[j] !== "]"){
            return false;
        }
        j--;
    }
    return true;
}


console.log(balancedParens(' var wow  = { yo: thisIsAwesome() }'));
module.exports = balancedParens;
