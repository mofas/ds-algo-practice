/**
 * @param {number} N
 * @return {number}
 */

// The trick of this problem is N > 4800 return 1 immediately

//recursive DP
// 64 ms ...
// using O(n^2) cache is wasteful.
// for 1000
// we only need around 300 col for cache instead of 40*40 = 1600
var soupServings = function(N) {
  if (N >= 4800) return 1;
  const n = Math.ceil(N / 25);
  const cache = {};
  const helper = (A, B) => {
    if (A <= 0 && B <= 0) return 0.5;
    if (A <= 0) return 1;
    if (B <= 0) return 0;
    if (cache[A + ',' + B] >= 0) return cache[A + ',' + B];
    const ret =
      0.25 *
      (helper(A - 4, B) +
        helper(A - 3, B - 1) +
        helper(A - 2, B - 2) +
        helper(A - 1, B - 3));
    cache[A + ',' + B] = ret;
    return ret;
  };
  const ret = helper(n, n);
  console.log(cache);
  return ret;
};

// space is O(n^2), too much for 10^9
// 136 ms
// var soupServings = function(N) {
//   if (N >= 4800) return 1;

//   const unit = N / 25;
//   const n = Math.ceil(unit);
//   let dp = new Array(n + 1).fill(null).map(_ => new Array(n + 1).fill(0));
//   let next = null;

//   dp[n][n] = 1;

//   let ret = 0;
//   let changed = true;
//   while (changed) {
//     changed = false;
//     next = new Array(n + 1).fill(null).map(_ => new Array(n + 1).fill(0));
//     for (let i = n; i >= 0; i--) {
//       for (let j = n; j >= 0; j--) {
//         if (dp[i][j] > 0) {
//           next[Math.max(0, i - 4)][j] += 0.25 * dp[i][j];
//           next[Math.max(0, i - 3)][Math.max(0, j - 1)] += 0.25 * dp[i][j];
//           next[Math.max(0, i - 2)][Math.max(0, j - 2)] += 0.25 * dp[i][j];
//           next[Math.max(0, i - 1)][Math.max(0, j - 3)] += 0.25 * dp[i][j];
//           changed = true;
//         }
//       }
//     }
//     dp = next;
//     // console.log(dp);
//     ret += 0.5 * dp[0][0];
//     dp[0][0] = 0;
//     // A is zero first
//     for (let i = 1; i <= n; i++) {
//       ret += dp[0][i];
//       dp[0][i] = 0;
//       dp[i][0] = 0;
//     }
//   }

//   return ret;
// };

console.log(soupServings(50));
// 0.625

console.log(soupServings(94));
// 0.71875

console.log(soupServings(1000));
// 0.9765650521094358

console.log(soupServings(660295675));
