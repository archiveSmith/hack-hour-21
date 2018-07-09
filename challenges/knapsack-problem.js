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
  let maxValue = -Infinity;
  function cloneAndRemove(items, index) {
    return items.reduce((acc, e, i) => {
      console.log(typeof acc.push);
      if (index !== i) acc.push({ weight: items[i].weight, value: items[i].value });
      return acc;
    }, []);
  }
  function permute(items, weightAvailable, currentValue) {
    for (let i = 0; i < items.length; i++) {
      let newCurrentValue = currentValue;
      let newWeightAvailable = weightAvailable;
      const item = items[i];
      if (newWeightAvailable - item.weight >= 0) {
        newCurrentValue += item.value;
        newWeightAvailable -= item.weight;
        if (newCurrentValue > maxValue) maxValue = newCurrentValue;
        permute(cloneAndRemove(items, i), newWeightAvailable, newCurrentValue);
      }
    }
  }
  permute(items, weightAvailable, 0);
  return maxValue;
}

module.exports = solveKnapsack;
