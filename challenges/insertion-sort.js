// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort
/**
 * input: unsorted {array}
 * output: sorted {array}
 * approach:
 * - insertion sort algorithm
 * - use i to iterate to loop through an unsorted array
 * - use j to iterate 
 * - save array[i] to a variable
 * - loop back through sorted
 * - check for bounds j > 0
 * - if, the saved elem, array[i] < j, then array[j+1] = array[j]
 * - if above condition not met, then keep the saved item at the same position
 * 
 * time complexity (in place sort)
 * 
 */

function insertionSort(array) {
  //loop thru unsorted
  for (let i = 1; i < array.length; i += 1) {
    // save the first item in unsorted
    let placeMe = array[i];
    let j = i - 1;
    // loop backward thru sorted
    while (j >= 0 && placeMe < array[j]) {
      array[j + 1] = array[j];
      j -= 1;
    }
    // put the save item back
    array[j + 1] = placeMe;
  }
  return array;
}

console.log(insertionSort([2,4,3,6,1]))


module.exports = insertionSort;