// Write a function that returns an array containing the numbers 1 to NUM. Put "fizz" in place of numbers divisble by 3, "buzz" in place of numbers divisble by 5, and "fizzbuzz" in place of numbers divisble by both 3 and 5
// fizzbuzz(16);  -> [ 1,
//                     2,
//                     'fizz',
//                     4,
//                     'buzz',
//                     'fizz',
//                     7,
//                     8,
//                     'fizz',
//                     'buzz',
//                     11,
//                     'fizz',
//                     13,
//                     14,
//                     'fizzbuzz',
//                     16 ]

 /* 
input: {number} 
output: {array} contains the numbers 1 to NUM
approach:
 - iterate from 1 to NUM
 -  for numbers divisible by:
    - 3, place 'fizz'
    - 5, place 'buzz'
    - 3 and 5 'fizzbuzz'
*/

function fizzbuzz(num) {
    numArr = [];
    for (var start = 1; start <= num; start++) {
        numArr.push(start);
    }

    for (var i = 0; i < numArr.length; i++) {
        if (numArr[i] % 3 === 0 && numArr[i] % 5 === 0) {
            numArr.splice(i, 1, 'fizzbuzz');
        } else if (numArr[i] % 3 === 0) {
            numArr.splice(i, 1, 'fizz');
        } else if (numArr[i] % 5 === 0) {
            numArr.splice(i, 1, 'buzz');
        } 
    };

    return numArr;
}

console.log(fizzbuzz(21));

module.exports = fizzbuzz;
