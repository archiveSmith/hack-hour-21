/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */
// highestProduct([1,4,5,67,8,9,6,43,5,3,8])


function highestProduct(array) {
    if(array.length < 3) return 'array not long enough';
    const arr = array.sort((a,b) => b > a)
    return arr[0] * arr[1] * arr[2]
}


module.exports = highestProduct;
