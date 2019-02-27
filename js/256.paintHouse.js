/**
 * @param {number[][]} costs
 * @return {number}
 */

// DP
// 64ms(52%), 35.6MB(28%)
var minCost = function(costs) {
  let accCostTable = [0, 0, 0];
  for (const cost of costs) {
    let next = [0, 0, 0];
    next[0] = cost[0] + Math.min(accCostTable[1], accCostTable[2]);
    next[1] += cost[1] + Math.min(accCostTable[0], accCostTable[2]);
    next[2] += cost[2] + Math.min(accCostTable[0], accCostTable[1]);
    accCostTable = next;
  }
  return Math.min(...accCostTable);
};

console.log(minCost([[17, 2, 17]]));
// 2

console.log(minCost([[17, 2, 17], [16, 16, 5], [14, 3, 19]]));
// 10

console.log(minCost([[3, 5, 3], [6, 17, 6], [7, 13, 18], [9, 10, 18]]));
// 26
