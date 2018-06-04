// Write a function "countTwos" that takes a number as an argument, n. The function will return the number of 2s encountered when counting from 1 to n (inclusive). 
// For example: countTwos(3) should be 1 because there are no 2s in the number one. There is One 2 in the number two and no 2s in the number three.
// Each 2 should be counted. For instance,  the number 2222 has four 2s. 

// countTwos(1);  -> 0
// countTwos(3);  -> 1
console.log(countTwos(13)); 
//console.log(countTwos(1000));
//countTwos(11420);


function countTwos(num) {
    
    let sum = 0;
    for (let i = 0; i< num; i++){
        let stringNum = i.toString();
        let arrayNum = stringNum.split("");
        // console.log(stringNum);
        // console.log(arrayNum);
        for(let a = 0; a < arrayNum.length; a++){
            if (arrayNum[a] === '2'){
                sum += 1;
            }
        }
        
    }
    return sum;


}

module.exports = countTwos;
