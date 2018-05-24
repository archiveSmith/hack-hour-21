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

// function binToDec(binary) {
// let decColl = [];
// let sum = 0;
// let dec = binary.split("");
// dec.forEach((task) => {decColl.push(indexOf(task))})

// let reversed = decColl.reverse();
// };

function decToBin(number){
    
}

module.exports = binToDec;


// let dec = binary.split("")
//    let decColl = [];
//    let sum = 0;
//    for(let i = 0; i < dec.length; i++){
//        decColl.push(Math.pow(2,i));
//    }
//    let reversed = decColl.reverse();
//    for(let d = dec.length -1; d >= 0; d--){
//     //    console.log("this is the collection", decColl);
//     //    console.log(typeof dec[d])
//         if(dec[d] == '1'){
//         sum += reversed[d]
//    }
// }
// return sum;