/**
 * @param {number[][]} triangle
 * @return {number}
 */

// easy dp
var minimumTotal = function(triangle) {
  const n = triangle.length;
  const base = triangle[n - 1].length;

  const cost = Array(n)
    .fill(0)
    .map(() => []);

  for (let i = 0; i < base; i++) {
    cost[n - 1][i] = triangle[n - 1][i];
  }

  for (let i = n - 2; i >= 0; i--) {
    for (let j = 0; j <= i; j++) {
      cost[i][j] =
        Math.min(cost[i + 1][j], cost[i + 1][j + 1]) + triangle[i][j];
    }
  }
  return cost[0][0];
};

console.log(minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]])); // 11
