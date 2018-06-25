/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 input: {array} of integers
 output: {number} highest product from three of the integers
 
 */

function highestProduct(array) {
//   let biggestInter1 = array.reduce((acc, curr) => Math.max(acc, curr), 1);
let maxNums = [];   
const maxFinder = (array) => {
  if (maxNums.length < 3) {
  let maximum = Math.max(...array);
  maxNums.push(maximum);
  let index = array.indexOf(maximum);
  let newArr= array.splice(index,1);
  return maxFinder(array)
  }
  else return maxNums;
}

let sum = maxNums.reduce((acc,curr) => {acc * curr});
return sum;

}


module.exports = highestProduct;
