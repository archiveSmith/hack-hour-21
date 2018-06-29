// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {
    let swap = true;
    while (swap) {
        swap = false;
        for (let a = 0; a < array.length - 1; a++) {
            if (array[a] > array[a + 1]) {
                let temp = array[a]
                array[a] = array[a + 1];
                array[a + 1] = temp;
                swap = true
                // console.log("BUBBLE SORTING",array);
            }
            else {
                continue
            }
        }
    }
    return array;

}
// let arr = [2,3,6,1,2,7];
// console.log(bubbleSort(arr));

module.exports = bubbleSort;
