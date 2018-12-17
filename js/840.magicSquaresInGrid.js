/**
 * @param {number[][]} grid
 * @return {number}
 */

var numMagicSquaresInside = function(grid) {
  const n = grid.length;
  const m = grid[0].length;

  const isMagicSquares = (x, y) => {
    if (grid[x][y] !== 5) return false;
    // row
    if (grid[x - 1][y - 1] + grid[x][y - 1] + grid[x + 1][y - 1] !== 15)
      return false;
    if (grid[x - 1][y] + grid[x][y] + grid[x + 1][y] !== 15) return false;
    if (grid[x - 1][y + 1] + grid[x][y + 1] + grid[x + 1][y + 1] !== 15)
      return false;

    // col
    if (grid[x - 1][y - 1] + grid[x - 1][y] + grid[x - 1][y + 1] !== 15)
      return false;
    if (grid[x][y - 1] + grid[x][y] + grid[x][y + 1] !== 15) return false;
    if (grid[x + 1][y - 1] + grid[x + 1][y] + grid[x + 1][y + 1] !== 15)
      return false;

    // diag
    if (grid[x - 1][y - 1] + grid[x][y] + grid[x + 1][y + 1] !== 15)
      return false;
    if (grid[x + 1][y - 1] + grid[x][y] + grid[x - 1][y + 1] !== 15)
      return false;

    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        if (grid[x + i][y + j] > 9 || grid[x + i][y + j] < 1) return false;
      }
    }

    return true;
  };

  let acc = 0;
  for (let i = 1; i < n - 1; i++) {
    for (let j = 1; j < m - 1; j++) {
      if (isMagicSquares(i, j)) acc++;
    }
  }

  return acc;
};

console.log(numMagicSquaresInside([[4, 3, 8, 4], [9, 5, 1, 9], [2, 7, 6, 2]]));
// 1

console.log(numMagicSquaresInside([[1, 8, 6], [10, 5, 0], [4, 2, 9]]));
// 0
