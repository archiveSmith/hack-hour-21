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
    let filledArr = [];
    let i = 0;
    while ( i <= num ) {
      filledArr.push(i);
      i++;
    };
  
    for (let i = 0; i < filledArr.length; i++) {
        if ((filledArr[i] % 3 === 0) && (filledArr[i] % 5 === 0)) {
            filledArr[i] = 'fizzbuzz';
        }
      
        else if (filledArr[i] % 5 === 0) {
            filledArr[i] = 'buzz';
        }
      
        else if (filledArr[i] % 3 === 0) {
            filledArr[i] = 'fizz';
        }
    }
    return filledArr;
  }

module.exports = fizzbuzz;

