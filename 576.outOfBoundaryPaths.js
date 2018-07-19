/**
 * @param {number} m
 * @param {number} n
 * @param {number} N
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
// (30, 24, 18, 26, 12) take 1.28 sec
// var findPaths = function(m, n, N, i, j) {
//   if (N === 0) return 0;

//   const calculateOutBoundPossibility = (x, y) => {
//     let acc = 0;
//     if (x === 0) acc++;
//     if (y === 0) acc++;
//     if (x === m - 1) acc++;
//     if (y === n - 1) acc++;
//     return acc;
//   };

//   const dp = {};
//   // because board is symmetric
//   const getCache = (x, y, remain) => {
//     let newX = x;
//     let newY = y;
//     if (x > m / 2) newX = m - x - 1;
//     if (y > n / 2) newY = n - y - 1;
//     return dp[`${newX},${newY},${remain}`];
//   };

//   const setCache = (x, y, remain, c) => {
//     let newX = x;
//     let newY = y;
//     if (x > m / 2) newX = m - x - 1;
//     if (y > n / 2) newY = n - y - 1;
//     dp[`${newX},${newY},${remain}`] = c;
//   };

//   const dfs = (x, y, remain) => {
//     let cacheVal = null;
//     if ((cacheVal = getCache(x, y, remain))) return cacheVal;
//     // console.log('ttt', x, y, remain);
//     let ret = calculateOutBoundPossibility(x, y);
//     if (remain > 1) {
//       if (x > 0) ret += dfs(x - 1, y, remain - 1);
//       if (y > 0) ret += dfs(x, y - 1, remain - 1);
//       if (x < m - 1) ret += dfs(x + 1, y, remain - 1);
//       if (y < n - 1) ret += dfs(x, y + 1, remain - 1);
//     }
//     if (ret >= 1000000007) {
//       ret %= 1000000007;
//     }

//     setCache(x, y, remain, ret);
//     return ret;
//   };

//   let ret = dfs(i, j, N);
//   //return it after mod 109 + 7.
//   return ret;
// };

// DP
// (30, 24, 18, 26, 12) take 0.08 sec
var findPaths = function(m, n, N, i, j) {
  if (N === 0) return 0;

  const calculateOutBoundMove = table => {
    let acc = 0;
    for (let i = 0; i < m; i++) {
      acc += table[i][0];
      acc += table[i][n - 1];
    }
    for (let i = 0; i < n; i++) {
      acc += table[0][i];
      acc += table[m - 1][i];
    }
    return acc % 1000000007;
  };
  let ret = 0;

  let table = new Array(m).fill(null).map(_ => new Array(n).fill(0));
  table[i][j] = 1;
  let next = null;

  const updateTable = (x, y, orginial, next) => {
    if (x > 0) next[x - 1][y] += table[x][y] %= 1000000007;
    if (y > 0) next[x][y - 1] += table[x][y] %= 1000000007;
    if (x < m - 1) next[x + 1][y] += table[x][y] %= 1000000007;
    if (y < n - 1) next[x][y + 1] += table[x][y] %= 1000000007;
  };

  for (let k = 0; k < N; k++) {
    // update ret
    ret += calculateOutBoundMove(table);
    ret %= 1000000007;
    next = new Array(m).fill(null).map(_ => new Array(n).fill(0));
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        // update table
        updateTable(i, j, table, next);
      }
    }
    table = next;
  }

  return ret;
};

// best sol from web
// var findPaths = function(m, n, N, i, j) {
//   var startx = i,
//     starty = j,
//     count = 0,
//     dir = [[0, -1], [0, 1], [1, 0], [-1, 0]],
//     dp = new Array(m),
//     mod = Math.pow(10, 9) + 7;
//   for (var i = 0; i < m; i++) dp[i] = new Array(n).fill(0);

//   dp[startx][starty] = 1;

//   for (var k = 0; k < N; k++) {
//     // reset a matrix to store next state
//     var next = new Array(m);
//     for (var i = 0; i < m; i++) next[i] = new Array(n).fill(0);

//     for (var i = 0; i < m; i++) {
//       for (var j = 0; j < n; j++) {
//         if (dp[i][j] === 0) continue;
//         // check 4 directions
//         for (var d = 0; d < 4; d++) {
//           var x = i + dir[d][0];
//           var y = j + dir[d][1];
//           if (x < 0 || x >= m || y < 0 || y >= n) {
//             count = (count + dp[i][j]) % mod;
//             continue;
//           }
//           next[x][y] = (next[x][y] + dp[i][j]) % mod;
//         }
//       }
//     }
//     dp = next;
//   }
//   return count;
// };

console.log(findPaths(3, 8, 0, 2, 0));
// 0

console.log(findPaths(2, 2, 2, 0, 0));
// 6

console.log(findPaths(1, 3, 3, 0, 1));
// 12

console.log(findPaths(8, 50, 23, 5, 26));
// 914783380

console.log(findPaths(36, 5, 50, 15, 3));
// 390153306

console.log(findPaths(30, 24, 18, 26, 12));
// 139671408

console.log(findPaths(30, 24, 23, 26, 12));
// 355074438
