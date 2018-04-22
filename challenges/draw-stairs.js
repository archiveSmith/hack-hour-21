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
//write a recursive function that returns (100-N)spaces and N asterisks
	//base case: when n = 1

function drawStairs(n) {
	if (n === 1){
		let stars = "*".repeat(n) + '\b';
		console.log(stars);
		return stars;
	}
	let spaces = "";
	for(let s = 0; s<n.length-1; s++){
		spaces = " ".repeat(n)

	}
	// function innerFunc(){
	// 	let spaces = '';
	// 	spaces += " ";
	// 	console.log(spaces);
	// 	return spaces;
	// };
	drawStairs(n-1);
	let stars = spaces + "*".repeat(n) + '\b';
	console.log(stars);
	return;
	

}


module.exports = drawStairs;
