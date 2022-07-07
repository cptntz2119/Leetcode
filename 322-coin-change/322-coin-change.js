/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, n) {
   
  //Initialize array from [0 -> n + 1] filled with Infinity
  //Then set 0 index to = 0, this is the 'base case' that our loop looks for.
  const numCoins = Array(n + 1).fill(Infinity);
  numCoins[0] = 0;
  
  //Loop over each coin, then loop over our numCoins array starting at value of coin. 
  //5$ coin can't help us if we're looking for answer = 4.  Then we increment and build up 
  //our numCoins array for each denomination.
  coins.forEach(coin => {
    for (let curTotal = coin; curTotal <= n; curTotal++) {
      numCoins[curTotal] = Math.min(numCoins[curTotal], numCoins[curTotal - coin] + 1);
    }
  })
  
  //Val stored at arr[n] is now the minumum number of coins to reach total = n.
  return numCoins[n] === Infinity ? -1 : numCoins[n] 
};