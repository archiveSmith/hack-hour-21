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
  return binary.split('').reduce((acc, e, i, arr) => {
    // if 1, add 2 ^ length of array - index - 1 to the acc & return
    if (e === '1') return (2 ** (arr.length - i - 1)) + acc;
    return acc;
  }, 0);
}

// console.log(binToDec('0')) //   -> 0
// console.log(binToDec('11'))  // -> 3
// console.log(binToDec('100')) // -> 4
// console.log(binToDec('101')) // -> 5
// console.log(binToDec('1010101101')) // -> 5)

module.exports = binToDec;
