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
    for (let i = 1; i < n + 1; i += 1) {
        let stair = '';
        for (let j = 0; j < n - i; j += 1) {
            stair += ' ';
        }
        for (let k = 0; k < i; k += 1) {
            stair += '*';
        }
        console.log(stair);
    }
}


module.exports = drawStairs;
