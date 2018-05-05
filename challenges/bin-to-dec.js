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
    let length = binary.length;
    let pow = length - 1;
    // console.log("length", length);
    let arr = [];
    let obj = {};
    for (let i = 0; i < length; i++) {
      arr.push(Math.pow(2, pow));
      pow --;
    }
    
    for (let j = 0; j < arr.length; j++) {
      obj[arr[j]] = binary[j];
    }
    var dec = 0;
    for (var key in obj) {
      if (obj[key] === '1') {
        dec += Number(key);
      }
      // console.log(obj[key], "working?");
      // console.log (key, "...");
      // console.log("YAY?", dec);
    }
    
    // console.log("obj", obj);
    // console.log("arr", arr);
    return dec;
  }

module.exports = binToDec;
