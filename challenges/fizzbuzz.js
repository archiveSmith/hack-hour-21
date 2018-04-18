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

// works
// function fizzbuzz(num) {
//   let newArr = [];
//   for (let i = 1; i <= num; i += 1) {
//     if (i % 3 === 0) {
//       if (i % 5 === 0) {
//         newArr.push('fizzbuzz');
//       } else newArr.push('fizz');
//     } else if (i % 5 === 0) {
//       newArr.push('buzz');
//     } else newArr.push(i);
//   }
//   return newArr;
// }

// better maybe
// function fizzbuzz(num) {
//   let newArr = [];
//   for (let i = 1; i <= num; i += 1) {
//     newArr.push(i);
//   }
//   return newArr.map((ele) => {
//     if (ele % 3 === 0 && ele % 5 === 0) return 'fizzbuzz';
//     if (ele % 3 === 0) return 'fizz';
//     if (ele % 5 === 0) return 'buzz';
//     return ele;
//   });
// }

function fizzbuzz(num) {
  return Array.from({ length: num }, (v, k) => {
    let j = k + 1;
    if (j % 3 === 0 && j % 5 === 0) return "fizzbuzz";
    if (j % 3 === 0) return "fizz";
    if (j % 5 === 0) return "buzz";
    return j;
  });
}

module.exports = fizzbuzz;
