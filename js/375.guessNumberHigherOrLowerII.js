/**
 * @param {number} n
 * @return {number}
 */
// recursive DP
// 1192 ms
var getMoneyAmount = function(n) {
  const cache = {};
  const helper = (from, to) => {
    // console.log('enter', from, to);
    if (from === to) return 0;
    if (from + 1 === to) return from;
    if (from + 2 === to) return from + 1;
    if (cache[from + ',' + to] > 0) return cache[from + ',' + to];
    let ret = Infinity;
    for (let i = from + 1; i < to; i++) {
      ret = Math.min(ret, Math.max(helper(from, i - 1), helper(i + 1, to)) + i);
    }
    cache[from + ',' + to] = ret;
    return ret;
  };
  let ret = helper(1, n);
  return ret;
};

// iterative DP
// 80ms
var getMoneyAmount = function(n) {
  const dp = new Array(n).fill(0).map(_ => new Array(n).fill(null));

  for (let i = 0; i < n; i++) {
    dp[i][i] = 0;
    for (let j = i + 1; j < n; j++) {
      dp[i][j] = i + 1;
    }
    for (let j = i + 2; j < n; j++) {
      dp[i][j] = i + 2;
    }
  }

  for (let r = 2; r < n; r++) {
    for (let i = 0; i + r < n; i++) {
      let j = i + r;
      let max = Infinity;
      for (let k = i + 1; k < j; k++) {
        // console.log(i + 1, k + 1, j + 1);
        max = Math.min(max, Math.max(dp[i][k - 1], dp[k + 1][j]) + k + 1);
      }
      dp[i][j] = max;
    }
  }
  // console.log(dp);
  return dp[0][n - 1];
};

// best sol from web
// 64ms
// var getMoneyAmount = function(n) {
//   const dp = [];
//   for (let i = 0; i <= n + 1; ++i) {
//     dp.push(new Array(n + 2).fill(0));
//   }
//   for (let i = n; i > 0; --i) {
//     for (let j = i + 1; j <= n; ++j) {
//       dp[i][j] = Number.MAX_VALUE;
//       for (let k = i; k <= j; ++k)
//         dp[i][j] = Math.min(Math.max(dp[i][k - 1], dp[k + 1][j]) + k, dp[i][j]);
//     }
//   }
//   return dp[1][n];
// };

// console.log(getMoneyAmount(1));
// // 0

// console.log(getMoneyAmount(2));
// // 1

// console.log(getMoneyAmount(3));
// // 2

// console.log(getMoneyAmount(4));
// // 4 = 3 + 1

// console.log(getMoneyAmount(5));
// // 6 = 4 + 2

// console.log(getMoneyAmount(6));
// // 8 = 3 + 5

console.log(getMoneyAmount(7));
// 10

console.log(getMoneyAmount(10));
// 16

// 0.78sec
console.log(getMoneyAmount(800));
// 5290
