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
//want to sell at highest cost and buy at lowest cost
//highest cost = biggest difference between indice and value, lowest cost = smallest difference (i think??)


function bestProfit(stock_prices_yesterday) {
  let bigNum = 0;
  let lilNum = 1000000;
  let finalNum = 0;
  if (stock_prices_yesterday.length > 0 && !stock_prices_yesterday.some(isNaN)) {
    for (let i = 0; i < stock_prices_yesterday.length; i++){
      if (stock_prices_yesterday[i] > bigNum){
        bigNum = stock_prices_yesterday[i];
      }
    }
    for (let z = 0; z < stock_prices_yesterday.length; z++){
      if (stock_prices_yesterday[z] < lilNum){
        lilNum = stock_prices_yesterday[z];
      }
    }
    finalNum = bigNum - lilNum;
    if (finalNum > 0){
      return finalNum;
    }
  }
  return 0;
}


module.exports = bestProfit;
