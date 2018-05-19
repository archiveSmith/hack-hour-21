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
    let rotatedArr = [];
    rotatedArr.push([sampleGrid[2][0], sampleGrid[1][0], sampleGrid[0][0]]);
    rotatedArr.push([sampleGrid[2][1], sampleGrid[1][1], sampleGrid[0][1]]);
    rotatedArr.push([sampleGrid[2][2], sampleGrid[1][2], sampleGrid[0][2]]);
    return rotatedArr;
  }

module.exports = rotateGrid;
