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
    //purchase at low, and sell at high
    //sort the array, but make sure to keep track of the indices
    //
    let stock = [];
    // stock_prices_yesterday.forEach(((e) => { stock[stock_prices_yesterday.indexOf(e)] = e }));
    let copy = stock_prices_yesterday.slice(-1);
    copy.sort((a, b) => { return a - b });
    // let highKey = Object.keys(stock).find(key => stock[key] === value);
    for(let i = 0; i<copy.length; i++){
        let winner = function(j) {return function(){console.log("this is j", copy.slice(j)); compare(copy.slice(j))}();
        }(i);
    };
        console.log(stock);    
    //return Math.max(stock)};
    function compare(array) {
        if (array.length === 0) { return stock }
        if (array[array.length - 1] > array[0]) {
            if (stock_prices_yesterday.indexOf(array[array.length - 1]) > stock_prices_yesterday.indexOf(array[0])) {
                stock.push(array[array.length - 1] - array[0])
            }
            array.shift();
            return compare(array);
        }
    }
}


console.log(bestProfit([40,45,3,25,200,20,560]));

module.exports = bestProfit;
