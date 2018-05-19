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

  let newGrid = [];

  // basically read columns from the initial grid bottom to top...start at the left column
  // to get the rotated grid
  for (let col=0; col<n; col++){
    let newRow = [];
    for (let row=n-1; row>=0; row--) {
      newRow.push(grid[row][col]);
    }
    newGrid.push(newRow);
  }

  return newGrid;

} 

// sampleGrid = [[1, 2, 3, 4], [5, 6, 7, 8], [9,10,11,12], [13,14,15,16]]
// console.log(rotateGrid(sampleGrid, 4));
// sampleGrid = [[1, 2, 3],[4, 5, 6],[7, 8, 9]]
// console.log(rotateGrid(sampleGrid, 3));
// sampleGrid = [[1, 2],[3, 4]]
// console.log(rotateGrid(sampleGrid, 2));
// sampleGrid = [['a']]
// console.log(rotateGrid(sampleGrid, 1));

module.exports = rotateGrid;
