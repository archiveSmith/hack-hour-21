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

// input: number
// output: array of nums with multiples of 3 replaced by fizz and multiples of 5 replaced by buzz
// process: create a new array, use a while loop with the condition as greater than or equal to 0, if mod3 unshift fizz and continue, if mod 5 ushift buzz, else unshift, decrement num every time

function fizzbuzz(num) {  
    const output = [];
    while (num > 0) {
        if (!(num % 3)) 
            output.unshift('fizz');
        else if (!(num % 5)) 
            output.unshift('buzz')
        else 
            output.unshift(num)
        num--;
    }
    return output;
}

module.exports = fizzbuzz;
