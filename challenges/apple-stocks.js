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
  // Guard clauses
  if (!Array.isArray(stock_prices_yesterday)) return 0;
  if (stock_prices_yesterday.length < 2) return 0;
  if (stock_prices_yesterday.length === 2) return stock_prices_yesterday[1] > stock_prices_yesterday[0] ? stock_prices_yesterday[1] - stock_prices_yesterday[0] : 0;

  // Loop for local maxes and local mins
  const localMaxes = {};
  const localMins = {};
  // First value local min or max
  stock_prices_yesterday[1] > stock_prices_yesterday[0] ? localMins[0] = stock_prices_yesterday[0] : localMaxs[0] = stock_prices_yesterday[0];
  for (let i = 1; i < stock_prices_yesterday.length - 1; i += 1) {
    if (stock_prices_yesterday[i] > stock_prices_yesterday[i - 1] && stock_prices_yesterday[i] > stock_prices_yesterday[i + 1]) {
      localMaxes[i] = stock_prices_yesterday[i];
    } else if (stock_prices_yesterday[i] < stock_prices_yesterday[i - 1] && stock_prices_yesterday[i] < stock_prices_yesterday[i + 1]) {
      localMins[i] = stock_prices_yesterday[i];
    }
  }
  // Last value local min or max
  stock_prices_yesterday[stock_prices_yesterday.length - 1] > stock_prices_yesterday[stock_prices_yesterday.length - 2] ? 
    localMaxes[stock_prices_yesterday.length - 1] = stock_prices_yesterday[stock_prices_yesterday.length - 1]
    : localMins[stock_prices_yesterday.length - 1] = stock_prices_yesterday[stock_prices_yesterday.length - 1];
  // Loop through mins and check profit
  console.log('maxes', localMaxes);
  console.log('mins', localMins);
  let profit = 0;
  for (let min in localMins) {
    for (let max in localMaxes) {
      if (Number(min) < Number(max) && localMaxes[max] > localMins[min]) {
        if (localMaxes[max] - localMins[min] > profit) profit = localMaxes[max] - localMins[min];
      } 
    }
  }
  return profit;
}

module.exports = bestProfit;
