/**
 * @param {number[][]} grid
 * @return {number}
 */

const explore = (n, m, i, j, grid, parent, root) => {
  const key = i * m + j;
  // console.log(i, j, root);
  if (parent[key] == null && grid[i][j] === 1) {
    parent[key] = root;
    // explore up
    if (i > 0) {
      explore(n, m, i - 1, j, grid, parent, root);
    }

    // explore left
    if (j > 0) {
      explore(n, m, i, j - 1, grid, parent, root);
    }

    // explore bottom
    if (i + 1 < n) {
      explore(n, m, i + 1, j, grid, parent, root);
    }

    // explore right
    if (j + 1 < m) {
      explore(n, m, i, j + 1, grid, parent, root);
    }
  }
};

// we use DFS to traverse all nodes.
var maxAreaOfIsland = function(grid) {
  const n = grid.length;
  const m = grid[0].length;
  let parent = new Array(n * m);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] === 1) {
        const key = i * m + j;
        if (parent[key] == null) {
          // console.log('discover new island', i, j);
          explore(n, m, i, j, grid, parent, key);
        }
      }
    }
  }
  const counts = {};
  for (let i = 0; i < n * m; i++) {
    const target = parent[i];
    if (target != null) {
      counts[target] = counts[target] ? counts[target] + 1 : 1;
    }
  }
  let max = 0;
  Object.keys(counts).forEach(key => {
    if (counts[key] > max) {
      max = counts[key];
    }
  });
  return max;
};

const grid1 = [
  [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0]
];

const grid2 = [[0, 0, 0, 0, 0, 0, 0, 0]];

const grid3 = [
  [1, 0, 0, 0, 1, 0, 0, 0],
  [1, 0, 0, 0, 1, 0, 0, 0],
  [1, 1, 1, 1, 1, 0, 0, 0]
];

console.log(maxAreaOfIsland(grid1)); // 6

console.log(maxAreaOfIsland(grid2)); // 0

console.log(maxAreaOfIsland(grid3)); // 9
