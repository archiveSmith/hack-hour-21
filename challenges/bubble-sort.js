// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {

  let madeSwap;
  do {
    madeSwap = false;
    array.forEach((el, i) => {
      if (i < array.length - 1) {
        if (el > array[i + 1]) {
          let temp = el;
          array.splice(i, 1, array[i + 1]);
          array[i + 1] = temp;
          madeSwap = true;
          return el;
        }
      }
    })
  } while (madeSwap)

  return array;
}

// console.log(bubbleSort([7, 5, 3, 4, 1, 9, 2]))
module.exports = bubbleSort;
