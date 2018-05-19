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
    //create 2D array with the n
    //map the first elements of each row to the first row
    let x = new Array(n);
    for (let i = 0; i < n; i++) {
        x[i] = new Array(n)
    }
    for (let s = 0 ; s < n; s++){
        for (let f = 0 ; f< n; f ++){
            x[s][f] = grid[n-f-1][s]
        }
    }
    return x;

}
// sampleGrid = [[1,2,3],[4,5,6],[7,8,9]];
// console.log(rotateGrid(sampleGrid, 3));
module.exports = rotateGrid;
