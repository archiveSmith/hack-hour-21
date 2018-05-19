/**
 * We have our lists of orders sorted numerically already, in arrays.
 * Write a functin to merge our arrays of orders into one sorted array.
 * These may be of different lengths.
 *
 * var my_array = [3,4,6,10,11,15,21];
 * var another_array = [1,5,8,12,14,19];
 *
 * mergeArrays(my_array, another_array); -> [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19, 21]
 * 
 * BONUS: 
 * Complete in O(n) time  
 *
 */

function mergeArrays(arr1, arr2) {
    let newArray = [];
    if (arr1.length >= arr2.length){
        for(let i = 0; i< arr2.length; i++){
            newArray.push(Math.min(arr1[i],arr2[i]));
            newArray.push(Math.max(arr1[i],arr2[i]));
        }
        // console.log(arr1[arr1.length-1]);
        // console.log("this is the new array", newArray);
        // console.log("this is the sliced array",arr1.slice(arr2.length, arr1.length))
        newArray = newArray.concat(arr1.slice(arr2.length, arr1.length))
        // console.log("heres the new Array", newArray);

    }else{
        for(let i = 0; i < arr1.length; i++){
            newArray.push(Math.min(arr1[i],arr2[i]));
            newArray.push(Math.max(arr1[i],arr2[i]))
        }
        newArray = newArray.concat(arr2.slice(arr1.length, arr2.length))
    }
    return newArray;

}

module.exports = mergeArrays;

var my_array = [3,4,6,10,11,15,21];
var another_array = [1,5,8,12,14,19];

console.log(mergeArrays(my_array, another_array));
