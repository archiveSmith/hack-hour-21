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
  if (numRows===1) return [[1]];
  if (numRows===2) return [[1], [1,1]];
  if (numRows===3) return [[1], [1,1], [1,2,1]];

  let triangle = [[1], [1,1], [1,2,1]];

  // Since we process upto numRow=3 above...the code above is for numRows 4 and greater
  for (let p_rows=2; p_rows<numRows-1; p_rows++){
    // look at the prev row and add up pairs
    let prev_row = triangle[p_rows];
    let curr_row=[1]; // each row in the triangle is bound by 1's.  This is the left 1.
    for(let row_i=0; row_i<prev_row.length-1; row_i++){
      curr_row.push(prev_row[row_i] + prev_row[row_i+1]);
    }
    curr_row.push(1) // adding the right 1 to end the row
    triangle.push(curr_row);
  }

  return triangle;
}

console.log(pascalTriangle(10));


module.exports = pascalTriangle;
