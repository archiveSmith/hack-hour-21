/* You are given a string that represents a binary number
 *
 * Write a function that converts the binary string to a decimal number
 *
 * Example:
* 	binToDec('0')   -> 0
 * 	binToDec('11')  -> 3
 * 	binToDec('100') -> 4
 * 	binToDec('101') -> 5
 *  binToDec('0101') -> 5
 *
 * Extension:
 * Write a function that converts a decimal number to binary (then maybe hexadecimal)
 */

function binToDec(binary) {
    let decimalResult = 0;
    if (binary === '') return decimalResult; 

    let exponent = binary.length-1; // this will be the biggest power that we're dealing with
    let base = 2;
    
    // convert the string into an array
    const bitsArray = binary.split('');

    // shift the array elements out and multiply by 2^pow ...and add to 
    while( bitsArray.length > 0 ){
        decimalResult += bitsArray.shift() * Math.pow(base,exponent--);
    }

    return decimalResult;

}
// console.log('hello');
// console.log( binToDec('1') );
// console.log(binToDec('10'));
// console.log(binToDec('100'));
// console.log(binToDec('1000'));
// console.log(binToDec("010000"));
// console.log(binToDec("1111"));
// console.log(binToDec('11111111'));
// console.log(binToDec("1111111111111111"));

module.exports = binToDec;
