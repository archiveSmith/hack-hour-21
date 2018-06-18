// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort


function insertionSort(array) {
  for (let i = 0; i < array.length; i += 1) {
    const tempArr = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > tempArr) {
      array[j + 1] = array[j];
      j -= 1;
    }
    array[j + 1] = tempArr;
  }
  return array;
}

module.exports = insertionSort;
