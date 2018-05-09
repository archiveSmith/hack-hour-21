/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  let sum = 0;
  let tempNum = 0;
  for (let i = 0; i < array.length; i++){
    for (let z = 0; z < array.length; z++){
      for (let x = 0; x < array.length; x++){
        tempNum = array[i] * array[x] * array[z];
        if (tempNum > sum) sum = tempNum;
      }
    }
  }
  return sum;

}


module.exports = highestProduct;
