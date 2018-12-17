/**
 * @param {number[][]} M
 * @return {number[][]}
 */
var imageSmoother = function(M) {
  const n = M.length;
  const m = M[0].length;

  let ret = new Array(n).fill(null).map(_ => new Array(m).fill(null));

  const smoother = (x, y) => {
    let neCount = 1;
    let sum = M[x][y];
    if (x > 0) {
      neCount++;
      sum += M[x - 1][y];
      if (y > 0) {
        neCount++;
        sum += M[x - 1][y - 1];
      }
      if (y < m - 1) {
        neCount++;
        sum += M[x - 1][y + 1];
      }
    }
    if (y > 0) {
      neCount++;
      sum += M[x][y - 1];
    }
    if (x < n - 1) {
      neCount++;
      sum += M[x + 1][y];
      if (y > 0) {
        neCount++;
        sum += M[x + 1][y - 1];
      }
      if (y < m - 1) {
        neCount++;
        sum += M[x + 1][y + 1];
      }
    }
    if (y < m - 1) {
      neCount++;
      sum += M[x][y + 1];
    }
    // console.log(x, y, '===', sum, neCount);
    return Math.floor(sum / neCount);
  };

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      ret[i][j] = smoother(i, j);
    }
  }

  return ret;
};

console.log(imageSmoother([[1, 1, 1], [1, 0, 1], [1, 1, 1]]));
// [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
