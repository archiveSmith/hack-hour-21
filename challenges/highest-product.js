/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  if (array.length < 3) return 0;
  if (!Array.isArray(array)) return 0;
  const arr = array.sort((a, b) => a - b);
  const sum = arr[arr.length - 3] * arr[arr.length - 2] * arr[arr.length - 1];
  return sum;
}


module.exports = highestProduct;
