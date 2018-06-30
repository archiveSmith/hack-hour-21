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
  let triangle = [[1]];
  let line;
  for (let i = 0; i < numRows; i++) {
    line = [1];
    for (let j = 1; j < triangle[i].length; j++) {
      line[j] = triangle[i][j] + triangle[i][j-1];
    }
    line.push(1);
    triangle.push(line);
  }
  return triangle;
}

module.exports = pascalTriangle;


// also to work on later......