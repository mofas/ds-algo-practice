/**
 * @param {number[]} cost
 * @return {number}
 */

const getMin = (cost, cache, index) => {
  // console.log(index);
  if (cache[index]) {
    return cache[index];
  } else if (index <= 1) {
    return cost[index];
  } else {
    const currentCost = index < cost.length ? cost[index] : 0;
    const ret =
      Math.min(getMin(cost, cache, index - 1), getMin(cost, cache, index - 2)) +
      currentCost;
    cache[index] = ret;
    return ret;
  }
};

var minCostClimbingStairs = function(cost) {
  const len = cost.length;
  const cache = {};
  return getMin(cost, cache, len);
};

console.log(minCostClimbingStairs([10, 15])); // 10

console.log(minCostClimbingStairs([10, 15, 20])); // 15

console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1])); // 6

console.log(minCostClimbingStairs([1, 2, 3, 5, 10, 1])); // 8
