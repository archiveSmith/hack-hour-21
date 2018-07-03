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
  // 0 1 1 2 3 5 8
  cache = { 0: 0, 1: 1 };
  const newFunc = (x) => {
    if (x < 1) return 0;
    if (cache[x]) return cache[x];
    return (cache[x] = countStairs(x - 1) + countStairs(x - 2));
  };
  let y = n + 1;
  return newFunc(y);
}

console.log(countStairs(5));

module.exports = countStairs;
