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

function binToDec(binary, index = 0, sum = 0) {
    if (binary.length === 0) return sum;
    const lastVal = Number(binary[binary.length - 1]);
    sum += (lastVal * Math.pow(2, index));
    index += 1
    binary = binary.slice(0 , -1); // remove last element from string
    return binToDec(binary, index, sum);
}

module.exports = binToDec;
