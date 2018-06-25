/* Accepts an array of integers and returns an array of all the possible products made by
 * multiplying all but one number. In other words, find all the products of multiplying any
 * array.length-1 numbers in the array.
 *
 * ex: getProducts([1, 7, 3, 4]); ->  [84, 12, 28, 21]
 * this is done via:
 * [7*3*4, 1*3*4, 1*7*4, 1*7*3]
 *
 * do not use division, becuase zero might be in the array and you cannot divide by zero
 * 
 * input: {array} of integers
 * output: {array} of all the possible products made by multiplying all but one number
 * approach:
 * 
    var output = [];
    var leftMult = 1;
    var rightMult = 1;
    for (var i=arr.length - 1; i >= 0; i--) {
        output[i] = rightMult;
        rightMult *= arr[i];
    }
    for (var j=0; j < arr.length; j++) {
        output[j] *= leftMult;
        leftMult *= arr[j];
    }
    return output;
};
 * 
 * 
 */

function getAllProducts(array) {
if (array.length < 2 ) return [0];
const productsUpTo = [];
const products = [];
let currProduct = 1;
for (let i = 0; i < array.length; i++) {
  productsUpTo[i] = currProduct;
  currProduct *= array[i];
}

currProduct = 1;
for(let i = array.length - 1; i >= 0; i--) {
 products[i] = currProduct * productsUpTo[i];
 currProduct = array[i];
}
return products;  
}

module.exports = getAllProducts;
