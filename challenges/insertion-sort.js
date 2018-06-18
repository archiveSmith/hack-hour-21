// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
  if (!array) return undefined;
  if (array.length === 1) return array;

  let workingArray = [...array]; // make a copy
  let currVal;
  for (let i = 1; i < workingArray.length; i++) {
    currVal = workingArray[i];
    for (let j=i-1; j>=0; j--){
      if (currVal < workingArray[j]) { 
        // swap places
        workingArray[j+1] = workingArray[j];
        workingArray[j] = currVal;
      }
    }
  }
  return workingArray;
}

// console.log(insertionSort([2,1,8]));
// console.log(insertionSort([100, -3, 2,1,8, -10]));


module.exports = insertionSort;