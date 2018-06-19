// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let j = i - 1;
    while (j >= 0 && array[j] > array[i]) {
      let temp = arr[j];
      array[j] = array[i];
    }
    array[i] = temp;
  }
}

let test = [6, 3, 2, 5, 4, 1];
console.log(insertionSort(test));

module.exports = insertionSort;