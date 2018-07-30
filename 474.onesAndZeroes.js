/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
// recursive DP
// 960ms
var findMaxForm = function(strs, m, n) {
  const len = strs.length;
  const cList = strs.map(str => {
    let zc = 0;
    let oc = 0;
    for (const c of str) {
      if (c === '0') zc++;
      if (c === '1') oc++;
    }
    return [zc, oc];
  });

  // [len][n][m]
  const cache = new Array(len)
    .fill(0)
    .map(_ => new Array(n + 1).fill(0).map(_ => new Array(m + 1).fill(0)));

  const helper = (i, m, n) => {
    if (i === 0) return 0;
    if (cache[i - 1][n][m]) {
      // console.log('trigger');
      return cache[i - 1][n][m];
    }
    const [zc, oc] = cList[i - 1];
    let max = helper(i - 1, m, n);
    if (zc <= m && oc <= n) {
      max = Math.max(max, helper(i - 1, m - zc, n - oc) + 1);
    }
    cache[i - 1][n][m] = max;
    return max;
  };
  return helper(len, m, n);
};

// iterative DP
// 132ms
var findMaxForm = function(strs, m, n) {
  const len = strs.length;
  const cList = strs.map(str => {
    let zc = 0;
    let oc = 0;
    for (const c of str) {
      if (c === '0') zc++;
      if (c === '1') oc++;
    }
    return [zc, oc];
  });

  // [n][m]
  const dp = new Array(m + 1).fill(0).map(_ => new Array(n + 1).fill(0));
  for (let i = 0; i < len; i++) {
    let [zc, oc] = cList[i];
    for (let j = m; j >= zc; j--) {
      for (let k = n; k >= oc; k--) {
        dp[j][k] = Math.max(dp[j][k], dp[j - zc][k - oc] + 1);
      }
    }
  }
  // console.log(dp);
  return dp[m][n];
};

// best sol from web
// 92ms
// it compresses the array to m*n instead of len*m*n
// var findMaxForm = function(strs, m, n) {
//   const dp = new Array(m + 1).fill(0).map(_ => new Array(n + 1).fill(0));
//   for (const str of strs) {
//     let zeros = 0,
//       ones = 0;
//     for (let i = 0; i < str.length; i++) {
//       if (str[i] === '0') {
//         zeros += 1;
//       } else {
//         ones += 1;
//       }
//     }
//     for (let i = m; i >= zeros; i--) {
//       for (let j = n; j >= ones; j--) {
//         dp[i][j] = Math.max(dp[i][j], dp[i - zeros][j - ones] + 1);
//       }
//     }
//   }
//   return dp[m][n];
// };

console.log(findMaxForm(['10', '1', '0'], 1, 1));
// 2

console.log(findMaxForm(['10', '0001', '111001', '1', '0'], 5, 3));
// 4

console.log(findMaxForm(['0000', '1111', '01', '10', '000', '00', '0'], 3, 6));
// 4
