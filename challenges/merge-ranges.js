/**
 * Write a function mergeRanges that takes an array of meeting time ranges and returns an array of condensed ranges.
 *
 * Example:
 * var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]
 *
 * mergeRanges(times); -> [[0, 1], [3, 8], [9, 12]]
 *
 * Do not assume the ranges are in order
 * 
 * 
 * input: {nested array} of time ranges
 * output: {nested array} of condensed time ranges
 * approach: look for overlapping numbers
 * 
 * 1. Sort the intervals based on increasing order of 
    starting time.
 * 2. Push the first interval on to a stack.
 * 3. For each interval do the following
     a. If the current interval does not overlap with the stack top, push it.
     b. If the current interval overlaps with stack top and ending time of current interval is more than that of stack top, update stack top with the ending  time of current interval.
 * 4. At the end stack contains the merged intervals. 
 * 
 */

https://codepen.io/berkin/pen/tfdFs

function mergeRanges(array) {
  // Test if the given set has at least one interval
  if (array.length <= 0)
  return;

  // Create an empty stack of intervals
  var stack = [], last;

  // sort the intervals based on start time
  intervals.sort(function(a,b) {
    return a[0] - b[0];
  });

console.log(intervals);

// push the first interval to stack
stack.push(intervals[0]);

// Start from the next interval and merge if necessary
for (var i = 1, len = intervals.length ; i < len; i++ ) {
 // get interval from last item
 last = stack[stack.length - 1];

 // if current interval is not overlapping with stack top,
 // push it to the stack
 if (last[1] <= intervals[i][0]) {
     stack.push( intervals[i] );
 }

 // Otherwise update the ending time of top if ending of current 
 // interval is more
 else if (last[1] < intervals[i][1]) {
     last[1] = intervals[i][1];     
                 
     stack.pop();
     stack.push(last);
 }
}

console.log(stack);

return;
}

module.exports = mergeRanges;
