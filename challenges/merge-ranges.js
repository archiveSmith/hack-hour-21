/**
 * Write a function mergeRanges that takes an array of meeting time ranges and returns an array of condensed ranges.
 *
 * Example:
 * var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]
 *
 * mergeRanges(times); -> [[0, 1], [3, 8], [9, 12]]
 *
 * Do not assume the ranges are in order
 */


function mergeRanges(array) {

var swapped;

do {
  swapped = false;
  
  for( var i = 0; i < array.length - 1; i++){
    if(array[i][0] > array[i+1][0]) {
      var temp = array[i];
      array[i] = array[i + 1];
      array[i+1] = temp;
      swapped = true;
    }
  }
  } while(swapped)

//console.log(array)

var newAry = [];

for( var j = 0; j < array.length-1; j++){
  
  //console.log(array[j][1], array[j+1][0])
  
  if(array[j][1] >= array[j+1][0]){
    newAry.push([array[j][0],array[j+1][1]])
    j++
  } else {
    newAry.push(array[j])
  }
}

// console.log(newAry)
return newAry
}

module.exports = mergeRanges;
