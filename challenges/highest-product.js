/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(a) {
    if (!Array.isArray(a)) return 0;
    if (a.length < 3) return 0;
    
    let max1 = Math.max(...a);
    a.splice(a.indexOf(max1), 1);
    
    let copy = [...a];

    let max2 = Math.max(...a);
    a.splice(a.indexOf(max2), 1);
    
    let max3 = Math.max(...a);
    a.splice(a.indexOf(max3), 1);
    
    let min1 = Math.min(...copy);
    copy.splice(copy.indexOf(min1), 1);
    
    let min2 = Math.min(...copy);
    copy.splice(copy.indexOf(min2), 1);

    return (min1 * min2) > (max2 * max3) ? max1 * min1 * min2 : max1 * max2 * max3;
}


module.exports = highestProduct;

