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
    let dec;
    let bArr = binary.split('').map(x => Number(x));

    while (bArr[0] === 0) {
        bArr.shift();
    };

    for (let i = 0; i < bArr.length - 1; i += 1) {
        if (i === 0) {
            dec = (bArr[i] * 2) + bArr[i + 1];
        } else {
            dec = (dec * 2) + bArr[i + 1];
        }
    }
    return dec;
}

function decToBin(dec) {
    if (dec === 0) {
        return '0';
    }
    let bin = []
    while (dec > 0) {
        bin.unshift(dec % 2);
        dec = Math.floor(dec / 2);
    }
    return bin.join('');
}

module.exports = binToDec;
