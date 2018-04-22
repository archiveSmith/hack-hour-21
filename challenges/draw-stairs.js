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
    var output = "";
  for (var i = 1; i <= n; i++) {
    var row = "";
    for (var j = 1; j <= i; j++) {
        row += "*";
    }
  output += row;
  console.log(row);
}
return output;
}


module.exports = drawStairs;
