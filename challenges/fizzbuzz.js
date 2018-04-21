// Write a function that returns an array containing the numbers 1 to NUM. 
// Put "fizz" in place of numbers divisble by 3, "buzz" in place of numbers divisble by 5,
// and "fizzbuzz" in place of numbers divisble by both 3 and 5
// fizzbuzz(16);  -> [ 1,
//                     2,
//                     'fizz',
//                     4,
//                     'buzz',
//                     'fizz',
//                     7,
//                     8,
//                     'fizz',
//                     'buzz',
//                     11,
//                     'fizz',
//                     13,
//                     14,
//                     'fizzbuzz',
//                     16 ]
function fizzbuzz(num) {
    nwAr = [];
    for(i=1; i<num+1; i++){
        const fve = i % 5 == 0;
        const tre = i % 3 == 0;

        if(tre && fve){
            nwAr.push('fizzbuzz');
        }
        else if(fve){
            nwAr.push('buzz');
        }
        else if(tre){
            nwAr.push('fizz');
        }
       
        else{
            nwAr.push(i);

        }

    }
    return nwAr;
}
console.log(fizzbuzz(20));