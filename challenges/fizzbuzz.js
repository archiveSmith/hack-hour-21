// Write a function that returns an array containing the numbers 1 to NUM. Put "fizz" in place of numbers divisible by 3, "buzz" in place of numbers divisible by 5, and "fizzbuzz" in place of numbers divisible by both 3 and 5
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

function fizzbuzz(num) {
    var result = Array(num).fill(0);
    return result.map(function(ele, i) {
        ele = i + 1;
        if (ele % 3 === 0 && ele % 5 === 0) {
            return 'fizzbuzz';
        }
        if (ele % 3 === 0) {
            return 'fizz';
        }
        if (ele % 5 === 0) {
            return 'buzz';
        }
        return ele;
    });
}

console.log(fizzbuzz(16));

module.exports = fizzbuzz;
