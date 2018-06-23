// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort

function bubbleSort(array) {
  for (let i = 0; i < array.length - 1; i += 1) {
    for (let j = 0; j < array.length - i; j += 1) {
      if (array[j] > array[j + 1]) {
        let temp = array[j + 1];
        array[j + 1] = array[j];
        array[j] = temp;
      }
    }
  }
  return array;
}

// console.log(bubbleSort([5,3,3,6,1,8,9,6,2]));

module.exports = bubbleSort;
