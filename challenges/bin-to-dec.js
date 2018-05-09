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

 //split and then hardcode correlation of array indecices with binary values

 function binToDec(binary) {
    const bin = binary.split('').map(x => parseInt(x));
    let counter = 0;

    for (let i = 0, d = 1; i < bin.length; i++) {
      if (bin[bin.length - 1 - i]) counter += d
      d *= d * 2;
    }
    return counter;
}

module.exports = binToDec;
