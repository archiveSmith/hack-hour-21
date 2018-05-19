/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
    array.sort(function(a, b){return a - b});
    return array[array.length - 1]*array[array.length - 2]*array[array.length - 3];
}

module.exports = highestProduct;
