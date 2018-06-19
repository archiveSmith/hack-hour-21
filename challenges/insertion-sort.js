// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
    for(let i = 0; i < array.length; i++){
        if(array[i] < array[i-1]){
            console.log(array[i])
            for(let j = i; j >= 0; j--){
                if(array[i] >= array[j-1] && array[i] < array[j]){
                    console.log(array[j])
                    let moved = array[i];
                    array.splice(i, 1);
                    console.log(array)
                    array.splice(j, 0, moved);
                }
                if(j === 0){
                    console.log(array[i])
                    let moved = array[i];
                    array.splice(i, 1);
                    console.log(array)
                    array.splice(0, 0, moved);
                    console.log(array)

                }
            }
        }
    }
    return array;

}
let list = [67, 8, 66, 5, 43, 322, 27, 40, 14, 23]
console.log(insertionSort(list))
module.exports = insertionSort;