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
  // check for invalid input
  if (stock_prices_yesterday === null || stock_prices_yesterday === undefined) return 0;

  let currBuy = -Infinity;
  let currSell = -Infinity;
  let currMaxProfit = -Infinity;

  // find the lowest price and then the highest price?
  for (let buy=0; buy<stock_prices_yesterday.length; buy++){ // loop through each price
    currBuy = stock_prices_yesterday[buy];
    if (currBuy < 0) return 0;
    for(let sell=buy+1; sell<stock_prices_yesterday.length; sell++){
      currSell = stock_prices_yesterday[sell];
      if (currSell < 0) return 0;
      if ( (currBuy - currSell) > currMaxProfit ) currMaxProfit = currBuy - currSell;
    }
  }

  
  return ( currMaxProfit > 0 ) ? currMaxProfit : 0;

}

// let s = [10, 20, 30, 40, 50, 60, 70, 80, 90];
// let s = [1,2,3,4,-10,-20];
// // s.reverse();

// console.log(bestProfit(s));

module.exports = bestProfit;
