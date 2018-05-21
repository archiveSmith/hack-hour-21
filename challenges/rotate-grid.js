/* You are given a NxN grid of elements represented by a 2D array. The ith nested array represents 
 * the ith row in the grid.
 * 
 * Write a function to rotate the grid 90 degrees clockwise. 
 *
 * For example:     sampleGrid before:  [   [1, 2, 3],
 *                                          [4, 5, 6],
 *                                          [7, 8, 9]  ]
 *
 * For example:     sampleGrid before:  [   [1, 2, 3, 4],
 *                                          [5, 6, 7, 8],
 *                                          [9, 0, 1, 2],
 *                                          [3, 4, 5, 6]  ]
 *
 * For example:     sampleGrid before:  [   [0, 1, 2, 3, 4],
 *                                          [0, 1, 2, 3, 4],
 *                                          [0, 1, 2, 3, 4],
 *                                          [0, 1, 2, 3, 4],
 *                                          [0, 1, 2, 3, 4]  ]
 * 
 * For example:     sampleGrid before:  [   [0, 1, 2, 3, 4, 5],            all the 0th row els become n indexes, all the n indexes become nth row, all the nth row become 0 index
 *                                          [0, 1, 2, 3, 4, 5],
 *                                          [0, 1, 2, 3, 4, 5],
 *                                          [0, 1, 2, 3, 4, 5],
 *                                          [0, 1, 2, 3, 4, 5],
 *                                          [0, 1, 2, 3, 4, 5]  ]
 *                  
 *                  rotateGrid(sampleGrid, 3);
 *                  
 *                  sampleGrid after:   [   [7, 4, 1],
 *                                          [8, 5, 2],
 *                                          [9, 6, 3]  ]
 *
 * BONUS: Do this in place
 */


// all the 0th row els become n indexes, all the n indexes become nth row, all the nth row become 0 index
// repeat while counter less or equal to n / 2




function rotateGrid(grid, n) {

    let count = 1;
    let frontIndex = 0;
    let backIndex = n - 1;
    let nexts = new Array(n);
    let nextsCopy = new Array(n);
    // while (count++ <= (n / 2)) {
        for (let i = backIndex; i >= 0; i--) {
            nexts[i] = grid[i][backIndex];
            grid[i][backIndex] = grid[frontIndex][i];
        }

        for (let j = backIndex; j >= 0; j--) {
            nextsCopy = Array.from(nexts)
            nextsCopy[j] = grid[backIndex][j];
            grid[backIndex][j] = nexts[j];
        }
           
    // }
    console.log(nextsCopy)
    return grid;

}

module.exports = rotateGrid;

let grid = [[0, 1, 2, 3, 4, 5], [0, 1, 2, 3, 4, 5], [0, 1, 2, 3, 4, 5], [0, 1, 2, 3, 4, 5], [0, 1, 2, 3, 4, 5], [0, 1, 2, 3, 4, 5]]
console.log(rotateGrid(grid, 6))

