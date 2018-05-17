/**
 *  I have an array stock_prices_yesterday where:
 *
 *    - The indices are the time in minutes past trade opening time, which was 9:30am local time
 *    - The values are the prices in dollars of Apple stock at the time
 *
 *  For example, the stock cost $500 at 10:30am, so stock_prices_yesterday[60] = 500;
 *
 *  Write an efficient algorithm for computing the best profit I could have made from 1 purchase
 *  and 1 sale of 1 Apple stock yesterday
 *
 *  Return 0 if no profit is possible OR if input is invalid.
 */

// you cannot buy in the future and sell in the past so the lower value must have a lower index and a higher value must have a higher index

// Solution 1:
// start at [0] and iterate to the end of the array. save the max difference as 'maxDiff' if the value at [0] is less than the other itterated values.
// repeate iteration for all values

function bestProfit(stock_prices_yesterday) {
    if (!Array.isArray(stock_prices_yesterday)) {
        return 0;
    }



    let maxDiff = 0;
    for (let i = 0; i < stock_prices_yesterday.length; i += 1) {
        for (let j = i + 1; j < stock_prices_yesterday.length; j += 1) {
            if (stock_prices_yesterday[j] - stock_prices_yesterday[i] > maxDiff) {
                maxDiff = stock_prices_yesterday[j] - stock_prices_yesterday[i];
            }
        }
    }
    return maxDiff;
}




let arr = [1, 2348, 42, 535, 234, 67, 2323, 656, 854, 32432, 543, 212, 788, 2];

console.log(bestProfit(arr));

module.exports = bestProfit;
