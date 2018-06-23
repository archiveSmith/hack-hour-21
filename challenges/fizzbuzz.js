// Write a function that returns an array containing the numbers 1 to NUM. Put "fizz" in place of numbers divisble by 3, "buzz" in place of numbers divisble by 5, and "fizzbuzz" in place of numbers divisble by both 3 and 5
// fizzbuzz(16);  -> [ 1,
//                     2,
//                     'fizz',
//                     4,
//                     'buzz',
//                     'fizz',
//                     7,
//                     8,
//                     'fizz',
//                     'buzz',
//                     11,
//                     'fizz',
//                     13,
//                     14,
//                     'fizzbuzz',
//                     16 ]

function fizzbuzz(num) {
	function fizzbuzz(num){
	let final = [];
	for (let i = 1; i<=num; i++){
		final.push(i);
	}
	console.log(final);
	function result(){
		return final.map(el => fizz(el));
	}
	function fizz(num){
		if(num%3 === 0 && num%5 !== 0){
			return "fizz";
		}
		if (num%5 === 0 && num%3 !== 0){
			return "buzz";
		}
		if (num%5 === 0 && num%3 === 0){
			return "fizzbuzz";
		}
		else{
			return num;
		};	
	};
	return result();
}

}

module.exports = fizzbuzz;
