/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

var uniquePathsWithObstacles = function(obstacleGrid) {
  const n = obstacleGrid.length;
  if (n === 0) return 0;
  const m = obstacleGrid[0].length;
  const cache = new Array(n).fill(0).map(() => new Array(m).fill(0));

  // edge case
  if (obstacleGrid[n - 1][m - 1]) {
    return 0;
  }
  cache[n - 1][m - 1] = 1;

  // bottom row
  for (let i = m - 2; i >= 0; i--) {
    if (obstacleGrid[n - 1][i]) {
      cache[n - 1][i] = 0;
    } else {
      cache[n - 1][i] = cache[n - 1][i + 1];
    }
  }

  // right col
  for (let i = n - 2; i >= 0; i--) {
    if (obstacleGrid[i][m - 1]) {
      cache[i][m - 1] = 0;
    } else {
      cache[i][m - 1] = cache[i + 1][m - 1];
    }
  }

  for (let i = n - 2; i >= 0; i--) {
    for (let j = m - 2; j >= 0; j--) {
      if (obstacleGrid[i][j]) {
        cache[i][j] = 0;
      } else {
        cache[i][j] = cache[i + 1][j] + cache[i][j + 1];
      }
    }
  }
  // console.log(cache);
  return cache[0][0];
};

// best sol from web
// it compress the grid

// var uniquePathsWithObstacles = function(obstacleGrid) {
//   const m = obstacleGrid.length, n = obstacleGrid[0].length;
//   const paths = new Array(m).fill(0);

//   paths[0] = 1;
//   for (let j = 0; j < n; j++) {
//     for (let i = 0; i < m; i++) {
//       if (obstacleGrid[i][j]) {
//         paths[i] = 0;
//       } else if (i > 0) {
//         paths[i] += paths[i-1];
//       }
//     }
//   }

//   return paths[m-1];
// };

console.log(uniquePathsWithObstacles([[0, 0, 0], [0, 1, 0], [0, 0, 0]])); // 2

console.log(uniquePathsWithObstacles([[0, 0, 0], [0, 1, 0], [0, 1, 0]])); // 1

console.log(uniquePathsWithObstacles([[0, 0, 0], [0, 1, 1], [0, 0, 0]])); // 1

console.log(uniquePathsWithObstacles([[0, 0, 0], [1, 0, 0], [0, 0, 0]])); // 1
