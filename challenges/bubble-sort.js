// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort

function bubbleSort(array) {
  let swapped = false;
  for (let i = 1; i < array.length; i++) {
    let temp;
    if ( array[i] < array[i - 1] ) {
      temp = array[i - 1];
      array[i - 1] = array[i];
      array[i] = temp;
      swapped = true;
    } 
  }
  if ( swapped !== false ) {
    return bubbleSort(array);
  } else return array;
}

module.exports = bubbleSort;
