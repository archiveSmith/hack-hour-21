/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 */

// BRUTE FORCE:
// compare all subarrays
// total number of sub arrays is n + n - 1 + n - 2... + n - n where n is array length
// start with each element as a sub array. then each element and its next neighbor until array === subarray


function maxSubarray(arr) {
    return getAllSubArrs(arr).reduce((a, c) => {
        let cr = c.reduce((a, c) => a + c);
        let ar = a.reduce((a, c) => a + c);
        return ar > cr ? a : c;
    });
}

function getAllSubArrs(arr) {
    let resultArrs = [];
    let x = 1;
    let i = 0;
    let j = 1;
    
    while (j <= arr.length) {
        while (j <= arr.length) {
                resultArrs.push(arr.slice(i, j));
                i += 1;
                j += 1;
            }
            i = 0;
            x += 1;
            j = i + x;
        }
    return resultArrs;
}

// let z = [1, 2, 3, 4];
// let u = [1, -2, 3, 10, -4, 7, 2, -5];
// 
// console.log(getAllSubArrs(z));
// console.log(maxSubarray(z));
// 
// console.log(getAllSubArrs(u));
// console.log(maxSubarray(u));

module.exports = maxSubarray;

