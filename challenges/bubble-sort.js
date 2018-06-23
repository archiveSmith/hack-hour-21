// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {
  let moved = false;
  array.forEach((ele, index) => {
    let temp = array[index + 1];
    if (temp < ele) {
      array[index + 1] = ele;
      array[index] = temp;
      moved = true;
    }
  });
  if (moved) return bubbleSort(array);
  else return array;
}

// console.log(bubbleSort([5, 4, 3, 1, 2, 8, 9, 15, 12]));

module.exports = bubbleSort;
