/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(a) {
    let m1 = Math.max(...a);
    a.splice(a.indexOf(m1), 1);
    let m2 = Math.max(...a);
    a.splice(a.indexOf(m2), 1);
    let m3 = Math.max(...a);
    a.splice(a.indexOf(m3), 1);
    return m1 * m2 * m3;
}


module.exports = highestProduct;

