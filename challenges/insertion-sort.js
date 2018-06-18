// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort

function insertionSort(array) {
  array.forEach((ele, index) => {
    if (index > 0) {
      let previous = index - 1;
      if (ele < array[previous]) {
        console.log(previous);
        while (ele < array[previous]) {
          let temp = array[previous + 1];
          array[previous + 1] = array[previous];
          // array[previous] = temp;
          previous -= 1;
        }
        array[previous + 1] = ele;
      }
    }
  });
  return array;
}

// console.log(insertionSort([3, 5, 1, 2, 7, 9, 8, 100, 50, 47, 29, 101]));

module.exports = insertionSort;
