// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
      let i = 1;
      while (i++ < array.length) {
        let j = i;
        while (j-- && ) {
          let current = array[j];
          array[j] = array[j - 1];
        }
    }
    return array
}


console.log(insertionSort([7, 4, 8, 10, 2, 39]))

module.exports = insertionSort;