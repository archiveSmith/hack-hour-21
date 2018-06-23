// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
    //base case: when the array length is one return the sorted array against the pivot number
    //choose a pivot number to be compared to
    //claim variable i to point to the pivot number, and j is the number ahead of i
    //while j is smaller than the length of the array, compare i and j, move i forward if the sorted list grows
    //move the pivot number to between i and j
    // if (array === undefined) return true;
    // let pivot = 0
    // let i = pivot;
    // let j = 1;
    // let tem;
    // while(j <= array.length -1){
    //     if(array[j] < array[pivot]){
    //         let temp = array[i + 1];
    //         array[i+1] = array[j];
    //         array[j] = temp;
    //         i += 1;
    //         j += 1;
    //     }
    //     else if (array[j] === array[pivot]){
    //         i = j;
    //         j += 1;
    //     }
    //     else {
    //         j +=1;
    //     }
    // }
    // console.log("here is i", i);
    // tem= array[pivot];
    // array[pivot] = array[i];
    // array[i] = tem;
    // console.log("HERE", array)
    // console.log("NEW ARRAY LEFT", array[0, i])
    // insertionSort(array[0,array[i]]) && insertionSort(array[array[i]+1, array.length])
    
    // return array;
    /* new solution */
    // place 
}

let arr = [ 4, 5, 7, 9, 1, 2];
console.log(insertionSort(arr));

module.exports = insertionSort;