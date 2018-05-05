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
    const lastVal = Number(binary.substring(binary.length - 1, binary.length));
    if (lastVal === 1) sum += Math.pow(2, index);
    index += 1
    binary = binary.slice(0 , -1); // remove last element from string
    return binToDec(binary, index, sum);
}

console.log(binToDec('0'));     //  -> 0
console.log(binToDec('11'));    // -> 3
console.log(binToDec('100'));   // -> 4
console.log(binToDec('101'));   // -> 5
console.log(binToDec('0101'));  // -> 5

module.exports = binToDec;
