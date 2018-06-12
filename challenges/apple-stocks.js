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

function bestProfit(prices) {
  if (!Array.isArray(prices) || prices.length < 2) return 0;
  return prices.reduce((acc, e) => {
    if (e < acc.low) acc.low = e;
    else if (e > acc.high) acc.high = e;
    if (acc.high - acc.low > acc.best) {
      acc.best = acc.high - acc.low;
      acc.high = 0;
    }
    return acc;
  }, { low: Infinity, high: 0, best: 0 }).best;
}

module.exports = bestProfit;
