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
 * 
 * input: {nested array}
 * output: {nested array} 
 */

function rotateGrid(grid, n) {
    const output = JSON.parse(JSON.stringify(grid));
    for (let r = 0; r < n; r += 1) {
        for (let c = 0; c < n; c +=1) {
            output[c][Math.abs(r - (n-1))] = grid[r][c];
        }
    }
    return output;
}

const sampleGrid = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(rotateGrid(sampleGrid,3));

module.exports = rotateGrid;
