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
    let minIndex = 0;
    let maxIndex = 1;
    let currMin = 0;
    let maxProfit = 0;
    
    for (let i = 1; i < stock_prices_yesterday.length; i++) {
      
      if ( stock_prices_yesterday[i] < stock_prices_yesterday[currMin] ) {
        currMin = i;
      }
      
      if ( stock_prices_yesterday[maxIndex] - stock_prices_yesterday[i] < stock_prices_yesterday[i] - stock_prices_yesterday[currMin] ) {
        maxIndex = i;
        minIndex = currMin;
      }
      
    }
    maxProfit = stock_prices_yesterday[maxIndex] - stock_prices_yesterday[minIndex];
   
    if (maxProfit < 0) return 0;
    return maxProfit;
  
  }
module.exports = bestProfit;
