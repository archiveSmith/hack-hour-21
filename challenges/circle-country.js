/**
 *  Circle Country is a country that contains several circular-shaped districts.
 *  Some districts may be situated inside other districts, but their borders do not intersect or touch.
 *  Tyus is a resident of Circle Country. When he travels between two locations, he always tries to cross the fewest number of district borders as possible.
 *
 *  You are given an array x, an array y, and an array r
 *
 *    - (x[i],y[i]) are the coordinates of the i-th circle's center and r[i] is its radius
 *
 *  In addition to the arrays, you are also given the numbers start_x, start_y, end_x, and end_y
 *
 *    - (start_x, start_y) are Tyus' starting coordinates and (end_x, end_y) are Tyus' destination coordinates
 *
 *
 *  Write an efficient algorithm for finding the minimum number of district borders Tyus must cross in order to get from
 *  (start_x, start_y) to (end_x, end_y)
 *
 *  Constraints:
 *    - x, y and r will each contain the same number of elements
 *    - (start_x, start_y) and (end_x, end_y) will never lie on a circle's border
 *    - no circle borders intersect/touch (but they can be nested)
 *
 */



// Assume that the only circles we have to count are the circles that starting point and 
// ending points are within.


function circleCountry(x, y, r, start_x, start_y, end_x, end_y) {
  let circlesWeAreIn=0;
  
  let dist;
  let start_loc_inside = false;
  for (let i = 0; i < r.length; i++) {
    start_loc_inside = false;
    distFromCircleCenter = Math.floor(Math.hypot((start_x - x[i]), (start_y - y[i])));
    if ( distFromCircleCenter < r[i] ) {
      circlesWeAreIn++;
      start_loc_inside = true;
    }
    distFromCircleCenter = Math.floor(Math.hypot((end_x - x[i]), (end_y - y[i])));
    if ( distFromCircleCenter < r[i] ) {
      
      if (!start_loc_inside) {
        circlesWeAreIn++;
       } else {
        // so we don't double count if the start and end points are in the same circle
        circlesWeAreIn--;
       }
    }
  }  

  return circlesWeAreIn;

}

// let start_x = 5;
// let start_y = 5;
// // let end_x = 10;
// // let end_y = 10;

// let end_x = 6;
// let end_y = 6;

// let x=[5,10];
// let y=[5,10];
// let r = [2,2];

// console.log(circleCountry(x,y,r,start_x, start_y, end_x, end_y));

module.exports = circleCountry;
