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
	let mean = 0;
	let maxmode = 0;
	array.sort();
	console.log(array);
	// console.log(`this is the sorted array ${array}`)
	for(let i = 0; i<array.length; i++){
		var kk = array[i];
		if(mode[kk] !== NaN){
			console.log(mode[array[i]]);
			mode[kk] ++ ;
		}
		else{
			mode[kk] = 1;
		}
		mean += array[i];
	}
	mean = Math.floor(mean/array.length);
	console.log(`this is our mean: ${mean}`)
	console.log(`now give us the modeeee ${mode}`)
	// console.log(mean);
	let keys = Object.keys(mode);
	console.log(`this is our key ${keys}`)
	let values = Object.values(mode);
	console.log(`this is our value ${values}`)
	let collection = [];
	let max = Math.max(...values);
	console.log(`here is max: ${max}`)
	let idx = values.indexOf(max);
	while (idx !== -1) {
		collection.push(idx);
		idx = values.indexOf(max, idx + 1)
		console.log(`this is our idx : ${idx}`)
	}
	let winner = collection[collection.length - 1];
	console.log(`this is our winner: ${winner}`)
	// console.log(`this is mode: ${mode}`)
	if(winner === mean){
		return true
	}
	return false;

};

module.exports = modemean;
