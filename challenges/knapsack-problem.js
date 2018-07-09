/*
  You have a knapsack with a weight limit.
  You are presented with an array of objects, each with its own weight and value.
  Find the maximum value you can fit into your knapsack, given the weight constraint.

  e.g.
  items = [{weight: 1, value : 3}, {weight: 2, value : 4}, {weight: 3, value : 5}];
  solveKnapsack(items, 3); // returns 7 (from items[0] and items[1])
  solveKnapsack(items, 5); // returns 9 (from items[1] and items[2])
*/

function solveKnapsack(items, weightAvailable) {
  // // ratioCache = {};
  // // items.forEach(ele => {
  // //   ratioCache[(ele.value / ele.weight)] = ele;
  // // });
  let maxValue = 0;
  let weightAvailableHere = weightAvailable;
  const ratioCache = items.sort((a, b) => {
    return (b.value / b.weight) - (a.value / a.weight);
  });
  ratioCache.forEach(ele => {
    if (ele.weight <= weightAvailableHere) {
      maxValue += ele.value;
      weightAvailableHere -= ele.weight;
    }
  });
  if (items.slice(1).length > 0) {
    const newMax = solveKnapsack(items.slice(1), weightAvailable);
    if (maxValue < newMax) maxValue = newMax;
  }
  return maxValue;
};

// items = [{weight: 1, value : 3}, {weight: 2, value : 4}, {weight: 3, value : 5}];
// console.log(solveKnapsack(items, 3)); // returns 7 (from items[0] and items[1])
// console.log(solveKnapsack(items, 5)); // returns 9 (from items[1] and items[2])

module.exports = solveKnapsack;
