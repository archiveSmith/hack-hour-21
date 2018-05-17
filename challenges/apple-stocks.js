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

function bestProfit(stock_prices_yesterday) {
  if (!Array.isArray(stock_prices_yesterday)) return 0;
  let min = Infinity;
  let minIndex = 0;
  let max = -Infinity;
  let maxIndex = 0;
  let maxProfit = -Infinity;
  for (let i = 0; i < stock_prices_yesterday.length; i++) {
    let curr = stock_prices_yesterday[i];

    if (min === Infinity) {
      min = curr;
    }

    else if (curr > max) {
      max = curr;
      maxIndex = i;
    }

    else if (curr < min && i < maxIndex) {
      min = curr;
      minIndex = i;
    }

    let profit = max - min;
    if (profit > maxProfit) maxProfit = profit;

  }
  return maxProfit === 0 ? 0 : maxProfit;

}

module.exports = bestProfit;
