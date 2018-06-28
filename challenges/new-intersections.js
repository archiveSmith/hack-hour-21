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

function newIntersections(x, y){
    //as iterating through the array, check if the surrounding is occupied
    //{'3': 1, '4': 1}
    let sorted_x = {};
    x.slice().forEach(el => sorted_x[x.indexOf(el)] = el)
    let sorted_y = {};
    y.slice().forEach(el => sorted_y[y.indexOf(el)] = el)
    let new_x = x.sort();
    let new_y = y.sort();
    for (let s = 1; s < sorted_x; s++){
        if (!sorted_x[s+1]){
            //evaluate the surrounding: on the left
            if(sorted_x[s] < sorted_x[s+1] && s)
        }
    }
}

module.exports = newIntersections;
