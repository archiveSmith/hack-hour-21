/* You are given a string that represents a binary number
 *
 * Write a function that converts the binary string to a decimal number
 *
 * Example:
* 	binToDec('0')   -> 0
             '1'    -> 1
             '10'   -> 2
 * 	binToDec('11')  -> 3
 * 	binToDec('100') -> 4
 * 	binToDec('101') -> 5
 *  binToDec('0101') -> 5
 *
 * 1 * 2^0 1
 * 1 * 2^1 2
 * 1 * 2^2 4
 * 1 * 2^3 8
 * 1 * 2^4 16
 * 1 * 2^5 32
 * 1 * 2^6 64
 * 1 * 2^7 128
 * 1 * 2^8 256
 * 
 * parseInt() -> str to int
 * 
 * Extension:
 * Write a function that converts a decimal number to binary (then maybe hexadecimal)
 */

function binToDec(binary) {

}

module.exports = binToDec;
