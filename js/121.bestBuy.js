/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let min = Infinity;
  let max = -Infinity;
  let diff = 0;
  prices.forEach(d => {
    if (d > max) {
      max = d;
    }
    if (d < min) {
      if (max > min) {
        if (max - min > diff) diff = max - min;
      }
      min = d;
      max = d;
    }
  });

  if (max - min > diff) diff = max - min;

  return diff;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 5
console.log(maxProfit([7, 6, 4, 3, 1])); // 0

console.log(maxProfit([7, 8, 10, 1, 3, 2, 5, 9])); // 8
