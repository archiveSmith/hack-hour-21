/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  //separate array into positive and negative
  //perform 2 operations:
  //1. multiple highest 3 positives
  //2. multiple highest pos and 2 highest neg
  //return the max of the two
  let positive = { 'max': -Infinity, 'mid': 1, 'low': 1 };
  let negative = { 'max': Infinity, 'mid' : 1, 'low' : 1 };
  array.forEach(a => {
    if(a > 0){
    console.log("here is a", a)
    if (a >= positive.max && positive.max === -Infinity) {
      positive.max = a;
    }
    else if (a >= positive.max && positive.max !== -Infinity) {
      positive.low = positive.mid;
      positive.mid = positive.max;
      positive.max = a;
    }
    else if (a >= positive.mid && a < positive.max) {
      positive.low = positive.mid;
      positive.mid = a;
    }
    else if (a <= positive.mid && a >= positive.low){
      positive.low = a;
    } 
  }
  else{
    if(a <= negative.max && negative.max === Infinity){
      negative.max = a;
    }
    else if (a <= negative.max && negative.max !== Infinity) {
      negative.low = negative.mid;
      negative.mid = negative.max;
      negative.max = a;
    }
    else if (a <= negative.mid && a > negative.max) {
      negative.low = negative.mid;
      negative.mid = a;
    }
    else if (a >= negative.mid && a <= negative.low){
      negative.low = a;
    } 
  }
   })
  return Math.max(positive.max * positive.mid * positive.low, negative.max * negative.mid * positive.max)
};

// console.log(highestProduct([1,5,8,9,-10]));

module.exports = highestProduct;
