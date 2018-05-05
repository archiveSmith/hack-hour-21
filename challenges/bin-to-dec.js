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

function decToBin(decimal) {
  // catch non integer or fractional
  if ((decimal % 1) !== 0 || typeof decimal !== 'number') throw new Error('decToBin: input must be a whole number');
  const binary = [];
  while (decimal >= 1) {
    binary.unshift(String(decimal % 2));
    decimal = Math.floor(decimal / 2);
  }
  return binary.join('');
}

function decToHex(decimal) {
  // catch non integer or fractional
  if ((decimal % 1) !== 0 || typeof decimal !== 'number') throw new Error('decToHex: input must be a whole number');
  // catch negative
  let negated = false;
  if (decimal < 0) {
    decimal = Math.abs(decimal)
    negated = true;
  }
  // function to return hex letters
  function remToLetter(rem) {
    if (rem === 15) return 'F';
    if (rem === 14) return 'E';
    if (rem === 13) return 'D';
    if (rem === 12) return 'C';
    if (rem === 11) return 'B';
    if (rem === 10) return 'A';
    throw new Error('remToLetter: Argument not an integer 9 - 15');
  }
  const hex = [];
  while (decimal >= 1) {
    const remainder = decimal % 16;
    decimal = Math.floor(decimal / 16);
    // if > 9 we need a letter
    if (remainder > 9) hex.unshift(remToLetter(remainder));
    else hex.unshift(String(remainder));
  }
  if (negated) return hex.unshift('-').join('');
  return hex.join('');
}

module.exports = binToDec;
