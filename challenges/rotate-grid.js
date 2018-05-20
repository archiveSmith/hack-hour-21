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
    let l = grid.length;
    let a = new Array;

    for (let i = 0; i < l; i += 1) {
        a.push(new Array(l));
    }

    for (let i = 0; i < l; i += 1) {
        for (let j = 0; j < l; j += 1) {
            a[j][l - 1 - i] = grid[i][j];
        }
    }
    return a
}

let g = [ [1, 2, 3],
[4, 5, 6],
[7, 8, 9] ]


console.log(rotateGrid(g));


module.exports = rotateGrid;
