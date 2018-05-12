/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
    if (array.length === 0) {
        return 0;
    }

    return array.sort((a, b) => b - a).slice(0, 3).reduce((a, c) => a * c);
}

console.log(highestProduct([5, 6, 1, 2, 9]));
console.log(highestProduct([8, 2]));
console.log(highestProduct([]));
console.log(highestProduct([1, 2, -3, -8, 0, 1]));




module.exports = highestProduct;
