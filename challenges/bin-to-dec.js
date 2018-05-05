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
//convert string to array
//loop backwards through array
//add that number * 2 ^ whatever power it needs (increments backwards) to zero
//return the final number

function binToDec(binary) {
    const binaryArray = binary.split('');
    let final = 0;
    let exponent = 0;
    for (let i = binaryArray.length - 1; i >= 0; i--){
      final = final + binaryArray[i] * Math.pow(2, exponent);
      exponent++;
    }
    return final;
  }

module.exports = binToDec;
