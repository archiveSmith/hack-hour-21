/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  if (array.length === 0) return 0;
  else if (array.length === 1) return array[0];
  else if (array.length === 2) return array[0] * array[1];
  else if (array.length === 3) return array[0] * array[1] * array[2];
  let max = array[0];
  for (let i = 0; i < array.length - 2; i += 1) {
    for (let j = i + 1; j < array.length - 1; j += 1) {
      for (let k = j + 1; k < array.length; k += 1) {
        if (max < array[i] * array[j] * array[k]) max = array[i] * array[j] * array[k];
      }
    }
  }
  return max;
}

module.exports = highestProduct;
