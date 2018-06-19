// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
      let temp;
      let prev = array[i - 1];
      let curr = array[i];
        if (array[i] < array[i - 1]) {
            temp = prev;
            prev = curr;
            curr = temp;
        }
    }
    return array;
}

// console.log(insertionSort([3, 7, 4, 2]));


module.exports = insertionSort;