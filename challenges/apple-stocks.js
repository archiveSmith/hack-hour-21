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
 * 
 * input: {array} of stock prices
 * output: {number} indicating max profit
 * approach:
 * - buy at lowest price
 * - sell at highest price
 * - max profit: lowest price - highest price
 * 
 * 
 * let arr1 = [10, 7, 5, 8, 11, 9, 1]
 * buy price != arr1{arr1.length - 1]
 * sell price > buy price
 */

function bestProfit(stock_prices_yesterday) {
// if buy price = sell price return 0
}

module.exports = bestProfit;
