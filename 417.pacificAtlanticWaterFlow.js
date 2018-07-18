/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */

// beat 100%
// 92ms
var pacificAtlantic = function(matrix) {
  const n = matrix.length;
  if (n === 0) return [];
  const m = matrix[0].length;
  let ret = [];
  const pacHash = new Array(n).fill(null).map(_ => new Array(m).fill(false));
  const atlHash = new Array(n).fill(null).map(_ => new Array(m).fill(false));

  const dfs = (x, y, hashMap, prev, isPac) => {
    if (x < 0 || x >= n || y < 0 || y >= m) return;
    if (hashMap[x][y]) return;

    const current = matrix[x][y];
    if (current >= prev || hashMap[x][y]) {
      hashMap[x][y] = true;
      dfs(x + 1, y, hashMap, current, isPac);
      dfs(x - 1, y, hashMap, current, isPac);
      dfs(x, y + 1, hashMap, current, isPac);
      dfs(x, y - 1, hashMap, current, isPac);
    }
  };

  for (let i = 0; i < n; i++) {
    dfs(i, 0, pacHash, 0, true);
    dfs(i, m - 1, atlHash, 0, false);
  }

  for (let i = 0; i < m; i++) {
    dfs(0, i, pacHash, 0, true);
    dfs(n - 1, i, atlHash, 0, false);
  }

  // console.log(pacHash);
  // console.log(atlHash);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (pacHash[i][j] && atlHash[i][j]) ret.push([i, j]);
    }
  }

  return ret;
};

console.log(
  pacificAtlantic([
    [1, 2, 2, 3, 5],
    [3, 2, 3, 4, 4],
    [2, 4, 5, 3, 1],
    [6, 7, 1, 4, 5],
    [5, 1, 1, 2, 4]
  ])
);
// [[0, 4], [1, 3], [1, 4], [2, 2], [3, 0], [3, 1], [4, 0]]
