/**
 * Write a function that will take an array of integers, all of which will appear exactly twice,
 * except for one integer that will appear exactly once. Return the integer that appears once.
 *
 * uniqueNumber([1,2,1,3,3]); -> 2
 *
 * BONUS:
 * Complete the challenge in O(n) time
 * Complete the challenge in O(1) space
 *
 */
function uniqueNumber_brute(array) {
  let seen = {};
  
  array.forEach(elem => {
    if ( seen[elem] ) {
      seen[elem] += 1;
    } else {
      seen[elem] = 1;
    }
  })
  
  for (k in seen) {
    if ( seen[k] === 1 ) return k;
  }
  
}

// use XOR
// any value that is XOR'ed with itself is 0
function uniqueNumber(array) {
 return array.reduce((acc,curr) => acc^curr)
}

// console.log(uniqueNumber([1,19,1,3,3]));

module.exports = uniqueNumber;
