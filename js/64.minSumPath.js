/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  const m = grid.length;
  const n = grid[0].length;

  const cache = Array(m)
    .fill(0)
    .map(() => Array(n).fill(0));

  cache[m - 1][n - 1] = grid[m - 1][n - 1];

  for (let i = m - 1; i >= 1; i--) {
    cache[i - 1][n - 1] = cache[i][n - 1] + grid[i - 1][n - 1];
  }

  for (let i = n - 1; i >= 1; i--) {
    cache[m - 1][i - 1] = cache[m - 1][i] + grid[m - 1][i - 1];
  }

  for (let i = m - 2; i >= 0; i--) {
    for (let j = n - 2; j >= 0; j--) {
      cache[i][j] = Math.min(cache[i][j + 1], cache[i + 1][j]) + grid[i][j];
    }
  }
  return cache[0][0];
};

console.log(minPathSum([[1, 3, 1], [1, 5, 1], [4, 2, 1]])); // 7

console.log(minPathSum([[0, 1], [1, 0]])); // 7
