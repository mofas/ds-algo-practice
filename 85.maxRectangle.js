/**
 * @param {character[][]} matrix
 * @return {number}
 */

// half brute force
// O(n^3)
// 212ms
var maximalRectangle = function(matrix) {
  const n = matrix.length;
  if (n === 0) return 0;
  const m = matrix[0].length;

  // each cell represent left, top, max area
  const dp = new Array(n).fill(0).map(_ => new Array(m).fill([0, 0, 0]));

  let maxArea = 0;

  if (matrix[0][0] === '1') {
    dp[0][0] = [1, 1, 1];
    maxArea = 1;
  } else {
    dp[0][0] = [0, 0, 0];
  }

  for (let i = 1; i < n; i++) {
    if (matrix[i][0] === '1') {
      dp[i][0] = [1, dp[i - 1][0][1] + 1, dp[i - 1][0][1] + 1];
      maxArea = Math.max(maxArea, dp[i - 1][0][1] + 1);
    } else {
      dp[i][0] = [0, 0, 0];
    }
  }

  for (let j = 1; j < m; j++) {
    if (matrix[0][j] === '1') {
      dp[0][j] = [dp[0][j - 1][0] + 1, 1, dp[0][j - 1][0] + 1];
      maxArea = Math.max(maxArea, dp[0][j - 1][0] + 1);
    } else {
      dp[0][j] = [0, 0, 0];
    }
  }

  // console.log(dp);
  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      if (matrix[i][j] === '1') {
        const left = dp[i][j - 1][0];
        const top = dp[i - 1][j][1];
        let localMaxArea = Math.max(left, top);

        let minHeight = top + 1;
        let minWidth = left + 1;

        for (let k = 1; k <= left; k++) {
          minHeight = Math.min(minHeight, dp[i][j - k][1]);
          const area = (k + 1) * minHeight;
          if (area > localMaxArea) localMaxArea = area;
        }

        for (let k = 1; k <= top; k++) {
          minWidth = Math.min(minWidth, dp[i - k][j][0]);
          const area = (k + 1) * minWidth;
          if (area > localMaxArea) localMaxArea = area;
        }

        dp[i][j] = [left + 1, top + 1, localMaxArea];
        if (localMaxArea > maxArea) maxArea = localMaxArea;
      }
    }
  }
  // console.log(dp);
  return maxArea;
};

// the best sol from web
// also the DP sol in discussion board
// 72ms
// var maximalRectangle = function(matrix) {
//   if (matrix.length == 0) return 0;

//   let [m, n] = [matrix.length, matrix[0].length];
//   let height = new Array(n).fill(0);
//   let left = new Array(n).fill(0);
//   let right = new Array(n).fill(n);

//   let max = 0;
//   for (let row of matrix) {
//     for (let i = 0; i < row.length; i++) {
//       height[i] = row[i] == '1' ? height[i] + 1 : 0;
//     }

//     let cur = 0;
//     for (let i = 0; i < row.length; i++) {
//       if (row[i] == '0') {
//         cur = i + 1;
//         left[i] = 0;
//       } else {
//         left[i] = Math.max(left[i], cur);
//       }
//     }

//     cur = n;
//     for (let i = n - 1; i >= 0; i--) {
//       if (row[i] == '0') {
//         cur = i;
//         right[i] = n;
//       } else {
//         right[i] = Math.min(right[i], cur);
//       }
//     }

//     for (let i = 0; i < row.length; i++) {
//       max = Math.max(max, height[i] * (right[i] - left[i]));
//     }
//   }
//   return max;
// };

console.log(maximalRectangle([['1']]));
// 1

console.log(maximalRectangle([['0', '1']]));
// 1

console.log(
  maximalRectangle([
    ['1', '0', '1', '0', '0'],
    ['1', '0', '1', '1', '1'],
    ['1', '1', '1', '1', '1'],
    ['1', '0', '0', '1', '0']
  ])
);
// 6

console.log(
  maximalRectangle([
    ['1', '0', '1', '1', '0'],
    ['1', '0', '1', '1', '0'],
    ['1', '1', '1', '1', '1'],
    ['1', '0', '1', '1', '0']
  ])
);
// 8

console.log(
  maximalRectangle([
    ['1', '0', '1', '0', '0'],
    ['1', '0', '1', '1', '1'],
    ['1', '1', '1', '1', '1'],
    ['1', '0', '1', '1', '1']
  ])
);
// 9

console.log(
  maximalRectangle([
    ['0', '0', '1', '0'],
    ['1', '1', '1', '1'],
    ['1', '1', '1', '1'],
    ['1', '1', '1', '0'],
    ['1', '1', '0', '0'],
    ['1', '1', '1', '1'],
    ['1', '1', '1', '0']
  ])
);
