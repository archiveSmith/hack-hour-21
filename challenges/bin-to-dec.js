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
    binTab = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512];
    let output = 0;
    binary = binary.split('').reverse();
    for(let i = binary.length-1; i >= 0; i--){
        console.log(binary[i])
        if(binary[i] === '1'){
            output = output + binTab[i];
        }
    }
    return output;

}

console.log(binToDec('101101'))


function decToBin(decimal, output = []) {
    binTab = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512];
    if (decimal === 0){
        for(let j = output.length; j > 0; j--){
            if(output[j] === "1"){
                return output.slice(0, j+1).join('');
            }

        }
        
    }
    else{
        for(let i = 0; i < binTab.length; i++){
                output.push("0");
            if(binTab[i] > decimal){
                output[i-1] = "1";
                return decToBin(decimal-binTab[i-1], output);
            }
        }
    }


    }

    console.log(decToBin(44))


function decToHexa(decimal, output = []){
    if (decimal < 16){
        console.log(output)
        output.unshift(decimal);
        console.log(output);
        return output.join('');
    }
    else {
        output[0] =+ 1
        //output.push(Math.floor(decimal/16));
        console.log(output);
        decimal = decimal % 16;
        console.log(decimal);
        decToHexa(decimal, output);
    }
}


console.log(decToHexa(7669))


module.exports = binToDec;
