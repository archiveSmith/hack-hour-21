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

/* brute force */
function mergeRanges(array) {

  let mergedTimes = []; // this is what we are returning

  let merged = false;
  let mergedSlot = [];

  if ( !array ) return [];
  if ( array.length <= 1) return array;

  mergedTimes.push(array[0]);

  for (let t=1; t<array.length; t++) {
    let time = array[t];    
    //loop through our retArr to see if we need to merge with any existing elements
   
    for (let mt=0; mt<mergedTimes.length; mt++) {
      let mTime = mergedTimes[mt];
      // console.log(mTime);
      mergedSlot = [];
      merged = false;

      // if both slots are within an existing range
      if ( time[0] >= mTime[0] && time[1] <= mTime[1] ) {
        mergedSlot[0] = mTime[0];
        mergedSlot[1] = mTime[1];
        merged = true;
      }

      // if left slot is within existing range and right slot is outside 
      if ( time[0] >= mTime[0] && time[0] <= mTime[1] && time[1] > mTime[1] ) {
        mergedSlot[0] = mTime[0];
        mergedSlot[1] = time[1];
        merged = true;
      }

      // if left slot is outside and right slow is within existing range
      if ( time[0] < mTime[0] && time[1] <= mTime[0] && time[1] <= mTime[1]) {
        mergedSlot[0] = time[0];
        mergedSlot[1] = mTime[1];
        merged = true;
      }
      
      if ( merged ) { // add it to our merged array
        // console.log(mergedSlot);
        mergedTimes[mt]= mergedSlot; // replace the slot
        break;
      }
    
    }

    if ( !merged ) { // add it to our merged array
      mergedTimes.push(time);
    }



  }
  
  return mergedTimes;
  
}

// var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]];
// var times = [[3, 5], [4, 8]];
// var times = [[4, 8], [5, 6]];
// var times = [[10,12], [9,10]]
// console.log(mergeRanges(times));


module.exports = mergeRanges;
