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

function mergeRanges(array) {

    const resultArr = [];
    const rangeDict = [];
    let isOverlap = false;

    // compar array a to other arrays b where a[0] is smaller than b[0]  and a[1] is larger than b[0]
    array.forEach((rangeA, i) => {
        array.slice(i + 1).forEach(rangeB => {
            if (!rangeDict.includes(rangeB)) {
                if (rangeA[0] < rangeB[0] && rangeA[1] > rangeB[0]) {
                    resultArr.push([rangeA[0], rangeB[1]]);
                    rangeDict.push(rangeA);
                    rangeDict.push(rangeB);
                    isOverlap = true;
                }
                if (rangeB[0] < rangeA[0] && rangeB[1] >= rangeA[0]) {
                    resultArr.push([rangeB[0], rangeA[1]]);
                    rangeDict.push(rangeA);
                    rangeDict.push(rangeB);
                    isOverlap = true;
                }
            }
        });
        // if arrayA does not meet this condition, push into resultArray
        if (!isOverlap) {
            resultArr.push(rangeA);
            isOverlap = false;
        }
    });
    return resultArr;
}

// var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]

// console.log(mergeRanges(times)); 
// -> [[0, 1], [3, 8], [9, 12]]
module.exports = mergeRanges;
