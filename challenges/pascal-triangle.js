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
  const triangle = [[1]];
  for (let i = triangle.length - 1; i <= numRows - 2; i += 1) {
    const row = [];
    for (let j = 0; j <= triangle[i].length; j += 1) {
      if (j === 0) row[0] = 1;
      else if (j === triangle[i].length) row[j] = 1;
      else row[j] = triangle[i][j - 1] + triangle[i][j];
    }
    triangle.push(row);
  }
  return triangle;
}

module.exports = pascalTriangle;
