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
    var spaces = n - 1;
    var stars = 1;
    while(stars <= n) {
        console.log(' '.repeat(spaces) + '*'.repeat(stars));
        spaces--;
        stars++;
    }
}


drawStairs(115)

module.exports = drawStairs;
