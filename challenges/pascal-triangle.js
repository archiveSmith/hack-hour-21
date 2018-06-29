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
  const triangle = [];
  // check for edge cases
  if (numRows < 1 || typeof numRows !== 'number') return triangle;
  for (let i = 0; i < numRows; i += 1) {
    // create a row for each numRow
    triangle.push([]);
    for (let j = 0; j < i + 1; j += 1) {
      // if its the first or last item of the array, push 1
      if (j === 0) triangle[i].push(1)
      else if (j === i) triangle[i].push(1)
      // otherwise push the added values from above
      else {
        // define what to push to inner array and then push it
        let newItem = triangle[i - 1][j - 1] + triangle[i - 1][j];
        triangle[i].push(newItem);
      }
    }
  }
  return triangle;
}

// console.log(pascalTriangle(6));

module.exports = pascalTriangle;
