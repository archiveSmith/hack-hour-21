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
    let binInput = binary.split('');
    let inBinArr = [];
    for (let i = 0; i < binInput.length; i++) {
        let temp = parseInt(binInput[i]);
        inBinArr[i] = temp;
    }
    inBinArr.reverse();

    let numArr = [1, 2, 4, 8, 16, 32, 64, 128, 256];

    let dec = 0;
    for (let i = inBinArr.length - 1; i >= 0; i--) {
        //console.log(inNumArr[i]);
        if (inBinArr[i] === 1) {
            dec += numArr[i];
        }
    }
    return dec;
}

console.log(binToDec('0101'));
console.log(binToDec('100'));

module.exports = binToDec;
