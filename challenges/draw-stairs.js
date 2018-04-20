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
	const start = n;
	let eachLine = '';
	let count = 0;
	eachLine = ("*".repeat(n) + '\b');
	if (n === 1){
		console.log(eachLine)
		return;
	};
	let newString = ("*".repeat(n) + '\b');
	drawStairs(n-1);
	eachLine = ("*".repeat(n)) + '\b';
	console.log(eachLine);
	return;
	//write a recursive function that returns (100-N)spaces and N asterisks
	//base case: when n = 1

}


module.exports = drawStairs;
