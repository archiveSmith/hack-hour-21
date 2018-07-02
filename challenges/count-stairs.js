/* You are faced by a staircase that is N steps high. You can take 1 or 2 steps at a time. Write
 * a function to calculate how many different ways you can go up the flight of stairs.
 *
 * Example: n === 5. You are 5 steps away from the top. You can take these different ways to the top:
 * 1 + 1 + 1 + 1 + 1
 * 1 + 1 + 1 + 2
 * 1 + 1 + 2 + 1
 * 1 + 2 + 1 + 1
 * 1 + 2 + 2
 * 2 + 1 + 1 + 1
 * 2 + 1 + 2
 * 2 + 2 + 1
 *
 * That is a total of 8 different ways to take 5 steps, given that you can take 1 or 2 steps at a time.
 */

function countStairs(n) {
  let counter = 0;
  // recursive function which will take in an array of steps taken thus far
  function takeSteps(stepsTaken = []) {
    // add up the steps taken
    const sum = stepsTaken.reduce((acc, e) => acc + e, 0);
    // base case 1: array reduces to n, increase counter & return
    if (sum === n) {
      counter += 1;
      return;
    }
    // base case 2: array reduces to > n, return
    if (sum > n) return;
    // push 1 into copy of array and call recursion
    takeSteps([...stepsTaken, 1]);
    // push 2 into copy of array and call recursion
    takeSteps([...stepsTaken, 2]);
  }
  // initial call
  takeSteps();
  return counter;
}

module.exports = countStairs;
