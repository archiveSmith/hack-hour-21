/* Write a function that console logs a staircase of any given height where 1 <= N <= 100.
 The staircase must climb up from left to right. The last line should only consist of asterisks,
 without any leading/trailing spaces.
 
 For example:     
 drawStairs(6) ->          
     *
    **
   ***
  ****
 *****
******

*/

function drawStairs(n) {
    let str;

    for (var level = n; level>=1; level--) { // top level only has one star.
        str = "";
        for (var stars=1; stars<=n; stars++){
            if (stars >= level) {
                str += '*';
            } else {
                str += ' ';
            }
        }
        console.log(str);
    }
    console.log("");

}


module.exports = drawStairs;
