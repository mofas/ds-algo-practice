/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  const n = grid.length;
  if (n === 0) return 0;

  const m = grid[0].length;
  let ret = 0;

  const explore = (i, j) => {
    if (grid[i][j] === '1') {
      grid[i][j] = '#';
      if (i > 0) {
        explore(i - 1, j);
      }
      if (j > 0) {
        explore(i, j - 1);
      }
      if (i + 1 < n) {
        explore(i + 1, j);
      }
      if (j + 1 < m) {
        explore(i, j + 1);
      }
    }
  };
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] === '1') {
        ret++;
        explore(i, j);
      }
    }
  }
  return ret;
};

console.log(
  numIslands([
    ['1', '1', '1', '1', '0'],
    ['1', '1', '0', '1', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '0', '0', '0']
  ])
);
// 1

console.log(
  numIslands([
    ['1', '1', '0', '0', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '1', '0', '0'],
    ['0', '0', '0', '1', '1']
  ])
);
// 3
