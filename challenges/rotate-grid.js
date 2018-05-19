/* You are given a NxN grid of elements represented by a 2D array. The ith nested array represents 
 * the ith row in the grid.
 * 
 * Write a function to rotate the grid 90 degrees clockwise. 
 *
 * For example:     sampleGrid before:  [   [1, 2, 3],
 *                                          [4, 5, 6],
 *                                          [7, 8, 9]  ]
 *                  
 *                  rotateGrid(sampleGrid, 3);
 *                  
 *                  sampleGrid after:   [   [7, 4, 1],
 *                                          [8, 5, 2],
 *                                          [9, 6, 3]  ]
 *
 * BONUS: Do this in place
 */

function rotateGrid(grid, n) {
  let row = Array.apply(null, Array(3));
  let rotated = new Array();
  rotated.push(row);
  rotated.push(row);
  rotated.push(row);

  let numI = n;
  let numJ = n;
  let output = [];
  for (let i = 0; i < n; i++) {
    let num = 2;
    for (let j = 0; j < n; j++) {
      console.log(i)
      console.log(j)
      rotated[i][j] = grid[num][i];
      console.log(rotated);
      num--
    }
    let row = rotated.slice(0, 1);
    output[i] = row;
    console.log(output);
  }

  return output;

  // grid[0][0] --> grid[0][2]
  // grid[0][1] --> grid[1][2]
  // grid[0][2] --> grid[2][2]

  // grid[1][0] --> grid[0][1]
  // grid[1][1] --> grid[1][1]
  // grid[1][2] --> grid[2][1]

  // grid[2][0] --> grid[0][0]
  // grid[2][1] --> grid[1][0]
  // grid[2][2] --> grid[2][0]

}

sampleGrid =  [[1, 2, 3],[4, 5, 6],[7, 8, 9]]

console.log(rotateGrid(sampleGrid, 3))

//[[7, 4, 1],[8, 5, 2],[9, 6, 3]]

module.exports = rotateGrid;
