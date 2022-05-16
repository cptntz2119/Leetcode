/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
 // let maxDiff = 0;
 //  for (let i = 0; i < prices.length; i++) {
 //    for (let j = i + 1; j < prices.length; j++) {
 //      if (prices[j] - prices[i] > maxDiff) {
 //        maxDiff = prices[j] - prices[i];
 //      }
 //    }
 //  }
 //  return maxDiff;
    let max = 0, buy = prices[0]
    
    for (let i = 1; i < prices.length; i++) {
        max = Math.max(max, prices[i] - buy);
        buy = Math.min(buy, prices[i]);
    }
    
    return max
};