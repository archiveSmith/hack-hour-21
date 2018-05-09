/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  array.sort((a, b) => a < b);
  let top = array.slice(0, 3);
  return top.reduce((a, b) => a * b);
}

module.exports = highestProduct;
