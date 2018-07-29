/**
 * @param {number} N
 * @param {number[][]} mines
 * @return {number}
 */

// nearly brute force
// 2240ms
var orderOfLargestPlusSign = function(N, mines) {
  const rowHash = {};
  const colHash = {};

  for (let i = 0; i < mines.length; i++) {
    const [row, col] = mines[i];
    rowHash[row] = rowHash[row] || [];
    colHash[col] = colHash[col] || [];
    rowHash[row].push(col);
    colHash[col].push(row);
  }

  let order = Math.ceil(N / 2);
  let max = 0;
  while (order >= 0) {
    for (let i = order - 1; i < N - order + 1; i++) {
      for (let j = order - 1; j < N - order + 1; j++) {
        // console.log('in ', order, '->', i, j);
        let currentMax = order;
        if (rowHash[i]) {
          rowHash[i].forEach(d => {
            currentMax = Math.min(currentMax, Math.abs(j - d));
          });
          // console.log('check i', rowHash[i], currentMax);
        }
        if (colHash[j]) {
          colHash[j].forEach(d => {
            currentMax = Math.min(currentMax, Math.abs(i - d));
          });
          // console.log('check j', colHash[j], currentMax);
        }
        max = currentMax;
        if (max === order) return max;
      }
    }
    order--;
    if (max > order) return max;
  }
  return 0;
};

// the concise and good performance sol from web
// looklike stand DP
// it is actually the mutation of discussion board answer
// 380ms
var orderOfLargestPlusSign = function(N, mines) {
  const mine = new Set();
  for (let m of mines) {
    mine.add(m[0] * N + m[1]);
  }
  const dp = new Array(N).fill(0).map(_ => new Array(N).fill(0));

  let count = 0;
  for (let i = 0; i < N; ++i) {
    count = 0;
    for (let j = 0; j < N; ++j) {
      if (mine.has(i * N + j)) {
        count = 0;
      } else {
        count++;
      }
      dp[i][j] = count;
    }

    count = 0;
    for (let j = N - 1; j >= 0; --j) {
      if (mine.has(i * N + j)) {
        count = 0;
      } else {
        count++;
      }
      dp[i][j] = Math.min(dp[i][j], count);
    }
  }

  let ans = 0;
  for (let j = 0; j < N; ++j) {
    count = 0;
    for (let i = 0; i < N; ++i) {
      if (mine.has(i * N + j)) {
        count = 0;
      } else {
        count++;
      }
      dp[i][j] = Math.min(dp[i][j], count);
    }

    count = 0;
    for (let i = N - 1; i >= 0; --i) {
      if (mine.has(i * N + j)) {
        count = 0;
      } else {
        count++;
      }
      dp[i][j] = Math.min(dp[i][j], count);
      ans = Math.max(dp[i][j], ans);
    }
  }
  return ans;
};

// my implementation for discussion board answer
// 192 ms
var orderOfLargestPlusSign = function(N, mines) {
  const dp = new Array(N).fill(0).map(_ => new Array(N).fill(N));

  mines.forEach(([x, y]) => {
    dp[x][y] = 0;
  });

  for (let i = 0; i < N; i++) {
    let k = N - 1;
    let l = 0,
      r = 0,
      u = 0,
      d = 0;
    for (let j = 0; j < N; j++) {
      l = dp[i][j] == 0 ? 0 : l + 1;
      r = dp[i][k] == 0 ? 0 : r + 1;
      u = dp[j][i] == 0 ? 0 : u + 1;
      d = dp[k][i] == 0 ? 0 : d + 1;
      dp[i][j] = Math.min(dp[i][j], l);
      dp[i][k] = Math.min(dp[i][k], r);
      dp[j][i] = Math.min(dp[j][i], u);
      dp[k][i] = Math.min(dp[k][i], d);
      k--;
      // console.log(dp);
    }
  }
  // console.log(dp);

  let ret = 0;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      ret = Math.max(ret, dp[i][j]);
    }
  }
  return ret;
};

console.log(orderOfLargestPlusSign(5, []));
// 3

// console.log(orderOfLargestPlusSign(5, [[4, 2]]));
// // 2

// console.log(orderOfLargestPlusSign(2, []));
// // 1

// console.log(orderOfLargestPlusSign(1, [[0, 0]]));
// // 0
