/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

// function highestProduct(array) {
//   let sorted = array.sort();
//   return (sorted[sorted.length - 1] * sorted[sorted.length - 2] * sorted[sorted.length - 3]);
// }


function highestProduct(array) {

  if ( !Array.isArray(array)) return 0;
  if (array.length === 0 ) return 0;
  // sort descending
  let sorted = array.sort( (a,b) => b>a);
  return (sorted[0] * sorted[1] * sorted[2]);
}

// console.log(highestProduct('hello'));
// console.log(highestProduct([]));
// console.log(highestProduct([-100, -3, -1, -2]));
// console.log(highestProduct([5, 3, 2, 4, 1]));

module.exports = highestProduct;
