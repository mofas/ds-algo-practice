/**
 * @param {number} N
 * @param {number} K
 * @param {number} r
 * @param {number} c
 * @return {number}
 */

// recursive DP
// 1104 ms
// var knightProbability = function(N, K, r, c) {
//   const cache = {};

//   const helper = (x, y, chance, remainMove) => {
//     if (x < 0 || x >= N || y < 0 || y >= N) return chance;
//     if (remainMove === 0) return 0;

//     if (cache[`${x},${y},${remainMove}`])
//       return cache[`${x},${y},${remainMove}`];

//     let ret =
//       helper(x + 1, y - 2, chance * 0.125, remainMove - 1) +
//       helper(x + 2, y - 1, chance * 0.125, remainMove - 1) +
//       helper(x + 2, y + 1, chance * 0.125, remainMove - 1) +
//       helper(x + 1, y + 2, chance * 0.125, remainMove - 1) +
//       helper(x - 1, y + 2, chance * 0.125, remainMove - 1) +
//       helper(x - 2, y + 1, chance * 0.125, remainMove - 1) +
//       helper(x - 2, y - 1, chance * 0.125, remainMove - 1) +
//       helper(x - 1, y - 2, chance * 0.125, remainMove - 1);

//     cache[`${x},${y},${remainMove}`] = ret;
//     return ret;
//   };
//   const ret = helper(r, c, 1, K);
//   return 1 - ret;
// };

// iterate DP
// 72 ms
var knightProbability = function(N, K, r, c) {
  let dp = new Array(N).fill(0).map(_ => new Array(N).fill(0));
  dp[r][c] = 1;

  let next = null;

  const isValid = (x, y) => {
    if (x < 0 || x >= N || y < 0 || y >= N) return false;
    return true;
  };

  for (let k = 0; k < K; k++) {
    next = new Array(N).fill(0).map(_ => new Array(N).fill(0));
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        if (dp[i][j] > 0) {
          if (isValid(i + 1, j - 2)) next[i + 1][j - 2] += dp[i][j] * 0.125;
          if (isValid(i + 2, j - 1)) next[i + 2][j - 1] += dp[i][j] * 0.125;
          if (isValid(i + 2, j + 1)) next[i + 2][j + 1] += dp[i][j] * 0.125;
          if (isValid(i + 1, j + 2)) next[i + 1][j + 2] += dp[i][j] * 0.125;
          if (isValid(i - 1, j + 2)) next[i - 1][j + 2] += dp[i][j] * 0.125;
          if (isValid(i - 2, j + 1)) next[i - 2][j + 1] += dp[i][j] * 0.125;
          if (isValid(i - 2, j - 1)) next[i - 2][j - 1] += dp[i][j] * 0.125;
          if (isValid(i - 1, j - 2)) next[i - 1][j - 2] += dp[i][j] * 0.125;
        }
      }
    }
    dp = next;
    // console.log(dp);
  }

  let ret = 0;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      ret += dp[i][j];
    }
  }

  return ret;
};

console.log(knightProbability(3, 2, 0, 0));
// 0.0625

console.log(knightProbability(25, 32, 15, 8));
// 0.43454235832035326
