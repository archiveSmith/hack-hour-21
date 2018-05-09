/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  let biggest = [];
  for (let i = 0; i < 3; i += 1) {
    array.forEach((ele, index) => {
      if (index === 0) biggest[i] = ele;
      if (ele > biggest[i]) biggest[i] = ele;
    });
    array.splice(array.indexOf(biggest[i]), 1);
    console.log(array);
  }
  return biggest[0] * biggest[1] * biggest[2];
}

module.exports = highestProduct;
