/**
 * @param {character[][]} matrix
 * @return {number}
 */

// 84 ms
var maximalSquare = function(matrix) {
  const n = matrix.length;
  if (n === 0) return 0;
  const m = matrix[0].length;
  const max = Math.min(n, m);

  let current = matrix;
  let next = null;
  let changed = false;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (current[i][j] === '1') {
        changed = true;
      }
    }
  }
  if (!changed) return 0;

  let c = 1;

  while (changed && c < max) {
    changed = false;
    next = new Array(n).fill(null).map(_ => new Array(m).fill('0'));
    for (let i = 0; i < n - c; i++) {
      for (let j = 0; j < m - c; j++) {
        if (
          current[i][j] === '1' &&
          current[i + 1][j] === '1' &&
          current[i][j + 1] === '1' &&
          current[i + 1][j + 1] === '1'
        ) {
          next[i][j] = '1';
          changed = true;
        }
      }
    }
    current = next;
    if (changed) c++;
    // console.log(current, c);
  }
  return c * c;
};

// best sol from web
var maximalSquare = function(matrix) {
  const MAX_ROW = matrix ? matrix.length : 0;
  const MAX_COL = MAX_ROW > 0 ? matrix[0].length : 0;
  if (MAX_ROW == 0 || MAX_COL == 0) return 0;
  let left = 0;
  let maxLen = 0;
  let dp = [];
  let nextDP = [];
  for (let i = 0; i < MAX_COL; i++) {
    dp[i] = nextDP[i] = 0;
  }
  for (let r = 0; r < MAX_ROW; r++) {
    for (let c = 0; c < MAX_COL; c++) {
      let upper = dp[c];
      let upperLeft = c > 0 ? dp[c - 1] : 0;
      let current = 0;
      if (matrix[r][c] === '1') {
        current = Math.min(Math.min(left, upper), upperLeft) + 1;
      }
      left = nextDP[c] = current;
      maxLen = Math.max(maxLen, current);
    }
    left = 0;
    let tmp = dp;
    dp = nextDP;
    nextDP = tmp;
  }
  return maxLen * maxLen;
};

console.log(
  maximalSquare([
    ['0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0']
  ])
);
// 0

console.log(
  maximalSquare([
    ['1', '0', '1', '0', '0'],
    ['1', '0', '1', '1', '1'],
    ['1', '1', '1', '0', '1'],
    ['1', '0', '0', '1', '0']
  ])
);
// 1

console.log(
  maximalSquare([
    ['1', '0', '1', '0', '0'],
    ['1', '0', '1', '1', '1'],
    ['1', '1', '1', '1', '1'],
    ['1', '0', '0', '1', '0']
  ])
);
// 4

console.log(
  maximalSquare([
    ['1', '0', '1', '0', '0'],
    ['1', '0', '1', '1', '1'],
    ['1', '1', '1', '1', '1'],
    ['1', '0', '1', '1', '1']
  ])
);
// 9
