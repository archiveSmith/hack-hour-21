// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort

function insertionSort(array) {
  if (array.length <= 1) return array;
  let i = 1;
  while (i < array.length) {
    let x = i;
    while (x > 0 && array[x] < array[x - 1]) {
      let temp = array[x];
      array[x] = array[x - 1];
      array[x - 1] = temp;
      x -= 1;
    }
    i += 1;
  }
  return array;
}

// console.log(insertionSort([3, 5, 1, 11, 9, 8, 4, 4]));

module.exports = insertionSort;