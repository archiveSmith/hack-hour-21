/*
  Construct Pascal's Triangle up to n levels deep, starting from n = 1. Each row
  is represented as an array of numbers.

  https://en.wikipedia.org/wiki/Pascal%27s_triangle

  e.g.
  pascalTriangle(1):
  [[1]]

  pascalTriangle(2):
  [
    [1],
    [1, 1]
  ]

  pascalTriangle(3) :
  [
    [1],
    [1,1],
    [1,2,1]
  ]

  pascalTriangle(6) :
  [
    [1],
    [1,1],
    [1,2,1],
    [1,3,3,1],
    [1,4,6,4,1],
    [1,5,10,10,5,1]
  ]
*/

function pascalTriangle(numRows) {
  //starting with number 1 and the sum of previous array at index of i and index i-1
  //for 
  //keep numRows counter decreased
  let result = [];
  let counter = 0;
  for (n = 0; n < numRows; n++){
    let newrow = [];
    for (r = 0; r <= n; r++){
      if( !result[n-1] || r === 0 || r === n){
        newrow.push(1);
      }else{
      newrow.push(result[n-1][r] + result[n -1][r - 1])//taking previous row and plus 1
      }
    }
    result.push(newrow);
}
return result;
}

// console.log(pascalTriangle(6));

module.exports = pascalTriangle;
