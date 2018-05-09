/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
    let greatestNums = [];
    //find the three greatest integers in array
    const maxFinder = (array) => {
      if (greatestNums.length < 3) {
      let greatest = (Math.max(...array));
      let sliceIndex = array.indexOf(greatest);
      greatestNums.push(greatest);
      let newArray = array.splice(sliceIndex, 1);
      } else { return greatestNums }
    return maxFinder(array);
    }
    maxFinder(array);
    //compute the sum of the array of 3 greatest integers
    let sum = greatestNums.reduce( (sum, ele) => {return sum * ele} );
    return sum;
  }


module.exports = highestProduct;
