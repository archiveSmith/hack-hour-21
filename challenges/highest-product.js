/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
    let total = 0
    if (array.length < 3){
      return false;
    }
    for (let i = 0; i < array.length; i++) {
      for (let j = i + 1; j < array.length; j++) {
        for (let k = j + 1; k < array.length; k++) {
          let product = array[i] * array[j] * array[k];
          if (product > total) {
            total = product;
          }
        }
      }
    }
    return total;
  }


module.exports = highestProduct;
