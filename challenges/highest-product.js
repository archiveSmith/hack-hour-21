/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
    let length = array.length;
    //Loop through the array and check which index 
    let abs = array.map(x => {return Math.abs(x)});
    console.log(abs);
    let max = Math.max(...abs);
    let multiparr = [];
    for(let i = 0; i < 3; i++){
        let negacount = multiparr.reduce((a, b) => {if (b < 0) return a++}, 0);
        console.log(negacount);
        let poscount = multiparr.reduce((a, b) => {if(b > 0) return a++}, 0);
        if(array[abs.indexOf(max)] < 0 && negacount > 1){
            continue;
        }
        console.log(multiparr);
        if(array[abs.indexOf(max)] > 0 && negacount === 1 && multiparr.length === 2){
            multiparr.push(max);
            
            abs.splice(indexOf(max));
            max = Math.max(...abs);
            i = 1;
        }
        if(multiparr.length === 4 && negacount === 1){
            multiparr = multiparr.filter (x => {
                return x > 0;
            })
        }

        else{
            multiparr.push(max);
            console.log(max)
            abs.splice(abs.indexOf(max));
            max = Math.max(...abs);
        }
    }
    console.log(multiparr);
    return multiparr.reduce((a, b) => {
        a = a * b;
        return a;

    })

}





let Input = [1, -4, 3, -6, -57, 0];
console.log(highestProduct(Input))



module.exports = highestProduct;
