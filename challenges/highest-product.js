/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  if (array.length < 3) throw new Error('Array too short!');
  const newArray = array.sort((a, b) => b - a);
  return newArray[0] * newArray[1] * newArray[2];
}
