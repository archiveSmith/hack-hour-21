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
  let stairs = [];
  for (let i = n; i > 0; i -= 1) {
    stairs[i - 1] = [];
    for (let j = 0; j < i; j += 1) {
      stairs[i - 1].push("*");
    }
  }
  let str = "";
  for (let k = 0; k < stairs.length; k += 1) {
    for (let l = n; l > k + 1; l -= 1) {
      str += " ";
    }
    if (k + 1 === stairs.length) {
      str += stairs[k];
    } else str += stairs[k] + "\n";
  }

  return str.replace(/\,/g, "");
}

module.exports = drawStairs;
