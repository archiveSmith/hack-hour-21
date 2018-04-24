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

function fizzbuzz(num) {
    const arr = [];

    for (let i = 1; i <= num; i++) {

        var val = undefined;

        if (i % 3 === 0 && i % 5 === 0)     val = "fizzbuzz";   // divisible by 3 && 5
        else if (i % 3 === 0)               val = "fizz";       // divisible by 3
        else if (i % 5 === 0)               val = "buzz";       // divisible by 5
        else                                val = i;            // divisible by neither

        arr.push(val);
    }

    return arr;
}

module.exports = fizzbuzz;
