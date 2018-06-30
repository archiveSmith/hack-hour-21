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
  if (numRows < 1) return [];
  const rows = [[1]];
  if (numRows === 1) return rows;
  rows.push([1, 1]);
  if (numRows === 2) return rows;
  for (let i = 3; i <= numRows; i += 1) {
    const copy = rows[rows.length - 1].slice();
    for (let j = 0; j < copy.length - 1; j += 1) {
      copy[j] = copy[j] + copy[j + 1];
    }
    copy.unshift(1);
    rows.push(copy);
  }
  return rows;
}

// console.log(pascalTriangle(5));

module.exports = pascalTriangle;
