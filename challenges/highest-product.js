/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

// function highestProduct(array) {
//   let sorted = array.sort();
//   return (sorted[sorted.length - 1] * sorted[sorted.length - 2] * sorted[sorted.length - 3]);
// }


// function highestProduct(array) {

//   if ( !Array.isArray(array)) return 0;
//   if (array.length === 0 ) return 0;
//   // sort descending
//   let sorted = array.sort( (a,b) => b>a);


//   return (sorted[0] * sorted[1] * sorted[2]);

// }

function highestProduct (array) {
  if (!Array.isArray(array)) return 0;
  if (array.length < 3) return 0;

  let sorted = array.sort((a, b) => b > a);
  // if there are negative numbers we have to take into account that - * - is a +
  //  take the two most negative numbers only... but those have to be multiplied together to get a +

  // for all the 'positive' numbers sorted
  largest_one = sorted[0] * sorted[1] * sorted[2];

  // if there are negative numbers...these will use the last two negative to get a LARGE positive
  largest_two = sorted[0] * sorted[sorted.length - 1] * sorted[sorted.length - 2];

  return (largest_one > largest_two ? largest_one : largest_two);

}

// console.log(highestProduct([-1, -3]));
// console.log(highestProduct2([-1, -3, -1, 1, 2])); // should be 6
// console.log(highestProduct2([-100, -3, -1, -2])); // should be -6
// console.log(highestProduct2([5, 3, 2, 4, 1]));
// console.log(highestProduct2('hello'));
// console.log(highestProduct2([]));



// console.log(highestProduct([-1, -3, -1, 1, 2])); // should be 6
// console.log(highestProduct('hello'));
// console.log(highestProduct([]));
// console.log(highestProduct([-100, -3, -1, -2])); // should be -6
// console.log(highestProduct([5, 3, 2, 4, 1]));

module.exports = highestProduct;
