/* You are faced by a staircase that is N steps high. You can take 1 or 2 steps at a time. Write
 * a function to calculate how many different ways you can go up the flight of stairs.
 *
 * Example: n === 5. You are 5 steps away from the top. You can take these different ways to the top:
 * 1 + 1 + 1 + 1 + 1
 * 1 + 1 + 1 + 2
 * 1 + 1 + 2 + 1
 * 1 + 2 + 1 + 1
 * 2 + 1 + 1 + 1
 * 1 + 2 + 2
 * 2 + 1 + 2
 * 2 + 2 + 1
 *
 * That is a total of 8 different ways to take 5 steps, given that you can take 1 or 2 steps at a time.
 */

// let n mod 2 to check if number of stairs will be evenly divisible by two
// get the floor of n / 2 to see how many '2 steps' total can be taken
//
// first stair climb will always be all '1 step' increments
// if n > 2, replace 2 '1 steps' with one '2 step'
// get all combinations of 1 and 2 steps
//
// [[1, 1], [1, 1], 1]a
// 
function countStairs(n) {

    let w = [0, 1, 2];
    for (let i = 3; i <= n; i += 1) {
        w[i] = w[i - 2] + w[i - 1];
        console.log(w);
    }

    return w[n];
}

console.log(countStairs(5));

module.exports = countStairs;
