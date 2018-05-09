/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {

    const highestNums = [];
    const mutableArr = array.slice();

    for (let i = 0; i < 3; i++) {
        const max = Math.max(...mutableArr);
        const index = array.indexOf(max);
        if (index > -1) {
            mutableArr.splice(index, 1);
        }
    }

    const product = mutableArr.reduce((acc, cur) => {
        acc * cur;
    }, 1);
    
    return product;
}

module.exports = highestProduct;
