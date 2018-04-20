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

// if n is greater than 100 or less than 1, print error message
// need to... get n, start at 1, next line. 2, next line. 3, etc... until the pyramid is created.
//actually - need to get n and put x amount of white space in front of each asterisk
//white space is related inversely to number of asterisks
//top white space [5] is equal to the number of asterisks at the bottom minus 1
//top white space is n-1... second is n-2, etc. until n=n!

function drawStairs(n) {
    var asterisk = '*';
    var space = '';
    if (n > 100 || n < 1){
        console.log('Error! Your number is bigger than 100 or smaller than 1');
    }
    else {
        for (var i = 0; i < n; i++){
            console.log()
        }
    }
}


module.exports = drawStairs;
