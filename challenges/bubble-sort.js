// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {
  let changed = true;
  while (changed) {
    changed = false;
    for (let i = 1; i < array.length; i++) {
      if (array[i] < array[i - 1]) {
        const temp = array[i];
        array[i] = array[i - 1];
        array[i - 1] = temp;
        changed = true;
      }
    }
  }
  return array;
}

module.exports = bubbleSort;
