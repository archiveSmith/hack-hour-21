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
    let index = 1;
    while(index <= n ){
     console.log(" ".repeat(n-index) + "*".repeat(index))
     index += 1;
    }
}

drawStairs(100)



module.exports = drawStairs;
