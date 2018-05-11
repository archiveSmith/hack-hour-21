/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
    if (array.length < 3 || !Array.isArray(array)) return 0;
    let biggest = [];
    let counter = 0;
    array.forEach(ele => {
      if (ele < 0) counter += 1;
    });
    for (let i = 0; i < 3; i += 1) {
      array.forEach((ele, index) => {
        if (index === 0) biggest[i] = ele;
        if (counter >= 1 && ele > biggest[i]) biggest[i] = ele;
        else if (counter < 1 && ele < biggest[i]) biggest[i] = ele;
      });
      if (counter === 1 || counter === 2) counter = 0;
      array.splice(array.indexOf(biggest[i]), 1);
    }
    console.log(biggest)
    return biggest.reduce((acc, next) => acc * next);
  }

console.log(highestProduct([1, 2, -6, -7, -8, -9, -20]));

module.exports = highestProduct;
