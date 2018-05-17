/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function(prices, fee) {
  const len = prices.len;
  if (len === 0) {
    return 0;
  }

  let profit = 0;
  let min = prices[0];
  let max = prices[0];

  prices.forEach(d => {
    if (d > max) max = d;
    if (d + fee < max) {
      //decide we need to sell
      if (max > min + fee) {
        profit += max - min - fee;
        min = d;
        max = d;
      }
    }
    if (d < min) {
      min = d;
      max = d;
    }
    // console.log(d, min, max, profit);
  });

  if (max > min + fee) {
    profit += max - min - fee;
  }

  return profit;
};

console.log(maxProfit([], 1)); // 0

console.log(maxProfit([4, 3, 2, 1], 0)); // 0

console.log(maxProfit([1, 2, 3], 1)); // 1

console.log(maxProfit([1, 2, 3, 4], 1)); // 2

console.log(maxProfit([1, 4, 2, 5], 1)); // 4

console.log(maxProfit([1, 3, 2, 8, 4, 9], 2)); // 8

console.log(maxProfit([1, 3, 7, 5, 10, 3], 3)); // 6

console.log(maxProfit([4, 5, 2, 4, 3, 3, 1, 2, 5, 4], 1)); // 4
