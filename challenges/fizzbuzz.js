// Write a function that returns an array containing the numbers 1 to NUM.
// Put "fizz" in place of numbers divisble by 3, "buzz" in place of numbers divisble by 5,
// and "fizzbuzz" in place of numbers divisble by both 3 and 5

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

    for (let i = 0; i < num.length; i++) {
      arr.push(myCallback(num[i]));
    }
    return arr;
}
    
let myCallback = (nums) => {
    if (nums % 3 === 0 && nums % 5 === 0) {
        return 'fizzbuzz';
      } else if (nums % 3 === 0) {
        return 'fizz';
      } else if (nums % 5 === 0) {
        return 'buzz';
      } else {
        return nums;
      }
    };
};

module.exports = fizzbuzz;
