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

// 1 2 3 4 5 6 7 8 9
// 7 4 1 8 5 2 9 6 3
// 1[3] 2[6] 3[9]
// 4[2] 5[5] 6[8]
// 7[1] 8[3] 9[7]

function rotateGrid(grid, n) {
  let newGrid = new Array(n * n);
  let count = 0;
  let newN = 0;
  grid = grid.reduce((acc, next) => acc.concat(next));

  while (newN < n) {
    for (let i = 0; i < n; i += 1) {
      newGrid[n * (i + 1) - 1 - newN] = grid[count];
      count += 1;
    }
    newN += 1;
  }
  let newNewGrid = new Array(n);
  for (let i = 0; i < n; i += 1) {
    newNewGrid[i] = newGrid.splice(0, n);
  }
  return newNewGrid;
  //   let arrs = [];
  //   for (let i = 0; i < n; i += 1) {
  //     arr[i] = new Array(n);
  //   }

  // [n/2, n/2] center of array with odd n
  // Math.ceil(n/2);
  // 3 - 2, 5 - 3, 7 - 4, 9 - 5
  // top moves right, right moves down, down moves left, left moves top
  // start outside, move in until reaching [n/2, n/2]
  // recursion, subtract one from n each time
  //   if (n === Math.ceil(grid.length / 2)) return grid;
  //   for (let i = 0; i < grid.length; i += 1) {
  //       grid[i].forEach(ele => {

  //       });
  //   }
}

module.exports = rotateGrid;
