/**
 *
 * You are given an array x and an array y that represent the coordinates of several OLD points
 * 
 *   - x is the array of x-coordinates and y is the array of y-coordinates 
 *   - (x[i], y[i]) correspond to coordinates of the i'th OLD point
 *
 * Write an algorithm to find the number of NEW points that can be placed 
 * such that there are OLD points above, below, to the left, and to the right of the NEW point
 *
 *   - 'OLD directly above NEW' means the NEW x-coordinate = OLD x-coordinate & NEW y-coordinate < OLD y-coordinate
 *
 * Constraints and Notes:
 *
 * 	 - x and y will contain the same number of elements
 *   - if a new point is bounded by old points and lands on an old point, then count it
 * 	 
 */

function newIntersections(x, y) {
  const checkBounded = (a, b, x, y) => {
    let up = false;
    let down = false;
    let left = false;
    let right = false;
    for (let i = 0; i < x.length; i += 1) {
      if (x[i] - 1 === a && y[i] === b) up = true;
      if (x[i] + 1 === a && y[i] === b) down = true;
      if (x[i] === a && y[i] - 1 === b) left = true;
      if (x[i] === a && y[i] + 1 === b) right = true;
    }
    return up && down && left && right;
  };

  let count = 0;
  for (let i = 0; i < x.length; i += 1) {
    if (checkBounded(x[i] - 1, y[i], x, y)) count += 1;
    if (checkBounded(x[i] + 1, y[i], x, y)) count += 1;
    if (checkBounded(x[i], y[i] - 1, x, y)) count += 1;
    if (checkBounded(x[i], y[i] + 1, x, y)) count += 1;
  }
  return count;
}

module.exports = newIntersections;
