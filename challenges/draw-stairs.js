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


input: {number} that determines height 1 <= n <= 100
output:
other info: 
- climb up from left to right
- last line should only consist of asterisk w/ not leading/trailing spaces.

approach: 
- loop through input number of times
- height = width; starting number = input
- unshift to add asterisk to the front

*/

function drawStairs(n) {
    var height = n;
    var width = n;
    var staircase = '';
    for (var i = n; i > 0; i--) {
        for ()
        staircase += '*'
    }
    return staircase;
}

console.log(drawStairs(3));
module.exports = drawStairs;
