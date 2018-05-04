/* You are given an array of integers and a target number. Write a function that returns true if
 * there is a subset of the array that sums up to the target and returns false otherwise. A subset
 * can be any size and the elements do not have to appear consecutively in the array.
 * 
 * subsetSum([3, 7, 4, 2], 5) - > true, 3 + 2 = 5
 * subsetSum([3, 34, 4, 12, 5, 12], 32) -> true, 3 + 12 + 5 + 12 = 32
 * subsetSum([8, 2, 4, 12], 13) -> false
 * subsetSum([8, -2, 1, -3], 6) -> true, 8 + 1 + (-3) = 6
 */

function subsetSum(array, target) {
    let combos = [];
    let usedNums = [];
    function getCombinations(array) {
        let result = [];
        let func = function(prefix, array) {
            for (let i = 0; i < array.length; i++) {
                result.push(prefix + array[i]);
                func(prefix + array[i], array.slice(i + 1));
            }
        }
        func([], array);
        return result;
    }

    let combinations = getCombinations(array);
    for (let i = 0; i < combinations.length; i++) {
        let split = combinations[i].split('');
        let newEl = [];
        for (let j = 0; j < split.length; j++) {
             newEl.push(parseInt(split[j]));
        }
        combinations[i] = newEl;
    }
    
    let result;
    for (let i = 0; i < combinations.length; i++) {
        let sum = combinations[i].reduce( (a, b) => {return a + b});
        if (sum === target) result = true;
    };
    return result;
}
    

module.exports = subsetSum;
