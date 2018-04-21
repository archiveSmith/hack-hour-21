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
//count through numbers 1-num
//if numbers are divisible by 3, put 'fizz' instead of that number
//if numbers are divisible by 5, but buzz instead of that number
//if numbers are divisible by 3 and 5 (15?) - put fizzbuzz

function fizzbuzz(num) {
const fizzArray = [];
  for (var i = 1; i <= num; i++){
    if (i % 15 === 0){
      fizzArray.push('fizzBuzz');
    }
    else if (i % 5 === 0){
      fizzArray.push('buzz');
    }
    else if (i % 3 === 0){
      fizzArray.push('fizz');
    }
    else {
      fizzArray.push(i);
    }
  }
  return fizzArray;
}

console.log(fizzbuzz(100));
