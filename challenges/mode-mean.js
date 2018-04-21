/*
 * Given an array of numbers, determine if the mode and mean of the array are equivalent
 *
 * Caveats:
 * 	- Math.floor the mean
 * 	- If there are multiple modes, use the max of the modes
 *
 * Return true or false
 *
 */


function modemean(array) {
	let mode = {};
	let modes = [];
	let mean = 0;
	let max = 0;
	array = array.sort();
	console.log(`this is the sorted array ${array}`)
	for(let i = 0; i<array.length; i++){
		if(mode[array[i]] !== null){
			mode[array[i]] ++ 1;
			console.log(mode[array[i]])
		}
		else{
			mode[array[i]] = 1;
		}
		mean += array[i]
	}
	mean = Math.floor(mean/array.length);
	console.log(mean);
	for(let n = 1; n <array.length;n++){
		if(mode[n-1]>mode[n]){
			max = array[n-1]
		}
	}
	console.log(`this is mode: ${mode}`)
	if(max === mean){
		return true
	}
	return false;

};

module.exports = modemean;
