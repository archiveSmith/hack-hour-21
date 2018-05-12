/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  if (!Array.isArray(array) || array.length < 3) return 0;
  let numbers = array.filter((element) => typeof element === 'number');
  let topNums = top(numbers);
  return topNums.reduce((a, b) => a * b);
}

function top(array) {
  array.sort((a, b) => Math.abs(a) < Math.abs(b));
  let numNegs = 0; 
  let top = [];
  for (let i = 0; i < array.length; i++) {
    if (top.length >= 3) return top;
    if (array[i] < 0) {
      if (numNegs < 2) {
        numNegs++
        top.push(array[i]);
      }
    }
    else {
      top.push(array[i]);
    }
  }
  return top;
}


module.exports = highestProduct;
