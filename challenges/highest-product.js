/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
    if (!Array.isArray(array) || array.length < 3) return 0;

    const highestNums = [];
    const mutableArr = array.slice().sort();

    const candidateA = mutableArr[0] * mutableArr[1] * mutableArr[mutableArr.length - 1];
    const candidateB = mutableArr[mutableArr.length - 1] * mutableArr[mutableArr.length - 2] * mutableArr[mutableArr.length - 3];
    
    return Math.max(candidateA, candidateB);
}

module.exports = highestProduct;
