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

const brackets = ['[', ']', '{', '}', '(', ')'];

function balancedParens(input){
    let dict = {'()': 'closed', '[]': 'closed', '{}': 'closed'};
    input.split('').forEach(function(ele) {
        if(['(', '[', '{'].includes(ele)) {
            switch (ele) {
                case '(':
                    dict['()'] = 'open';
                    break
                case '[':
                    dict['[]'] = 'open';
                    break
                case '{':
                    dict['{}'] = 'open';
                    break
            }

        }
        if([')', ']', '}'].includes(ele)) {
            switch (ele) {
                case ')':
                    if(dict['()'] === 'open') {
                        dict['()'] = 'closed';
                        break
                    }
                case ']':
                    if(dict['[]'] === 'open') {
                        dict['[]'] = 'closed';
                        break
                    }
                case '}':
                    if(dict['{}'] === 'open') {
                        dict['{}'] = 'closed';
                        break
                    }
            }

        }
    });
    console.log(Object.values(dict).every((x) => x === 'closed'));
}


balancedParens('(');
balancedParens('()');
balancedParens(')(');
balancedParens('(())');
 
balancedParens('[](){}');
balancedParens('[({})]');
balancedParens('[(]{)}');
 
balancedParens(' var wow  = { yo: thisIsAwesome() }');
balancedParens(' var hubble = function() { telescopes.awesome();');






module.exports = balancedParens;
