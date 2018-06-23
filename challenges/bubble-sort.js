// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {
  if (!array) return [];
  if (array.length <= 1) return array;

  let arr = [...array];

  let temp;
  for (let i = arr.length-2; i >= 0; i--) {
    for (let j=0; j<=i; j++){
      if (arr[j] > arr[j+1]){
        temp = arr[j+1];
        arr[j+1] = arr[j];
        arr[j] = temp;
      }
    }
  }

  return arr;

}

// console.log(bubbleSort([2,3,1,100, -3]));

module.exports = bubbleSort;
