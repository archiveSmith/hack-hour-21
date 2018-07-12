/*
  You have a knapsack with a weight limit.
  You are presented with an array of objects, each with its own weight and value.
  Find the maximum value you can fit into your knapsack, given the weight constraint.

  e.g.
  items = [{weight: 1, value : 3}, {weight: 2, value : 4}, {weight: 3, value : 5}];
  solveKnapsack(items, 3); // returns 7 (from items[0] and items[1])
  solveKnapsack(items, 5); // returns 9 (from items[1] and items[2])
*/


// This can be solved using Dynamic programming...
// Start with weightAvailabe as 0 and then go up to the input.


function solveKnapsack(items, weightAvailable) {
  let table = []; // this is where, we're storing intermediate results

  for (let i=0; i<items.length; i++){
    for (let w=0; w<=weightAvailable; w++){
      
    }
  }

};

module.exports = solveKnapsack;
