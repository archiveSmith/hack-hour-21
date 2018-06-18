// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
   for (let i = 1; i < array.length; i += 1) {
       let value = array[i];
       let j = i - 1;
       while (j >= 0 && array[j] > value) {
           array[j + 1] = array[j];
           j = j - 1;
       }
       array[j + 1] = value
    }
    // console.log(array);
}

// let array = [5, 2, 8, 33, 10];

// insertionSort(array);

module.exports = insertionSort;
