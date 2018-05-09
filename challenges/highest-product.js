/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  if (!Array.isArray(array)) return undefined;
  let numbers = array.filter((element) => typeof element === 'number');
  numbers.sort((a, b) => a < b);
  let top = numbers.slice(0, 3);
  return top.reduce((a, b) => a * b);
}

module.exports = highestProduct;
