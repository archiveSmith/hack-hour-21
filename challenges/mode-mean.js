/*
 * Given an array of numbers, determine if the mode and mean of the array are equivalent
 *
 * Caveats:
 * 	- Math.floor the mean
 * 	- If there are multiple modes, use the max of the modes
 *
 * Return true or false
 *
 */


function modemean(array) {
    let mean = array.reduce((a, b) =>{
        a = a + (b/array.length);
        return a;
    })
    console.log(mean);
    newAr = [];
    check = [];
    array.forEach(x => {

        if(check.includes(x)){
            newAr.forEach(y => {
                if(y[0] === x){
                    y[1] += 1;
                }
            })
        }
        else {
            check.push(x);
            locarr = [];
            locarr.push(x, 1)
            newAr.push(locarr);
        }

    })

    let mode = newAr.reduce((a, b, c) =>{
        if (b[1] > a[1]){
            a = b;
        }
        else if(b[1] === a[1]){
            if(b[0] > a[0]){
                a = b;
            }
        }
        return a;
        
    }, [0, 0]);

    mode = mode [0];
    console.log(mode);
    if(mode === mean){
        return true;
    }
    else{
        return false;
    }

}



module.exports = modemean;
