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
    //iterate through the row first
    //if the row contains upper level then start looking into the lower level
    //if the row does not contain immediate upper level, then keep looking into the upper level
    //apply the same thing to the 
    let index_x = {};
    x.slice().forEach(el => index_x[x.indexOf(el)] = el)
    let index_y = {};
    y.slice().forEach(el => index_y[y.indexOf(el)] = el)
    let new_x = x.sort();
    let new_y = y.sort();
    for (let y = 1; y < index_y; y++){
        if(index_y[y-1] && index_y[y+1]{
        for (let x = 1; x < index_x; x++){
            if (!index_x[s+1]){
                //evaluate the surrounding: on the left
                if(index_x[s] < index_x[s+1] && s){

                }
            }
        }
        }
    }
}

module.exports = newIntersections;
