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
  let line = Array(n).fill(' ');
  line[n] = '\n';
  for (let i = n-1; i >= 0; i--) {
      line[i] = '*';
      console.log(line.join(''));
  }
}



module.exports = drawStairs;
