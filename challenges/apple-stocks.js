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
  const arr = stock_prices_yesterday;
  if (!Array.isArray(arr)) return 0;
  // let subs = arr.reduce((acc, val) => acc.concat(acc.map(ele => [val, ...ele])), [[]]);
  // pair first price with all other prices, shift first price, compare new first price with all remaining prices
  // calculate highest profit with all the arrays of two numbers
  let pairs = [];
  let length = arr.length;
  for (let i = 0; i < length; i += 1) {
    let temp = arr[0];
    arr.shift();
    arr.forEach(ele => {
      pairs.push([temp, ele]);
    });
  }
  // console.log(pairs);
  // pairs.forEach(ele => ele = ele[1] - ele[0]);
  return pairs.reduce((acc, next) => {
    let profit = next[1] - next[0];
    if (profit > acc) return profit;
    else return acc;
  }, 0);
}

// const stocks = [500, 200, 300, 600, 100, 700, 1000, 50, 700, 20, 65, 900];
// console.log(bestProfit(stock));

module.exports = bestProfit;
