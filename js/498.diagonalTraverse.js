/**
 * @param {number[][]} matrix
 * @return {number[]}
 */

// 132ms(28%), 42.4MB(36%)
var findDiagonalOrder = function(matrix) {
  const n = matrix.length;
  if (n === 0) return [];
  const m = matrix[0].length;
  let x = 0;
  let y = 0;
  let ret = [];
  let i = m * n;
  // 0 go top right, 1 go bottom left
  let direction = false;
  while (i > 0) {
    // console.log(y, x);
    // console.log('[', matrix[y][x], ']');
    ret.push(matrix[y][x]);
    if (!direction) {
      x++;
      y--;
      if (x === m) {
        x--;
        y += 2;
        direction = !direction;
      } else if (y < 0) {
        y = 0;
        direction = !direction;
      }
    } else {
      x--;
      y++;
      if (y === n) {
        y--;
        x += 2;
        direction = !direction;
      } else if (x < 0) {
        x = 0;
        direction = !direction;
      }
    }
    i--;
  }

  return ret;
};

// best sol
// 96ms
var findDiagonalOrder = function(matrix) {
  if (matrix.length === 0) return [];
  let res = [];
  let m = matrix.length;
  let n = matrix[0].length;
  let dirs = [[-1, 1], [1, -1]];
  let r = 0,
    c = 0,
    d = 0;
  for (let i = 0; i < m * n; i++) {
    res.push(matrix[r][c]);
    r += dirs[d][0];
    c += dirs[d][1];
    if (r >= m) {
      r = m - 1;
      c = c + 2;
      d = 1 - d;
    }
    if (c >= n) {
      c = n - 1;
      r = r + 2;
      d = 1 - d;
    }
    if (r < 0) {
      r = 0;
      d = 1 - d;
    }
    if (c < 0) {
      c = 0;
      d = 1 - d;
    }
  }
  return res;
};

console.log(findDiagonalOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
// [1,2,4,7,5,3,6,8,9]

console.log(findDiagonalOrder([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]));
// [1,2,5,9,6,3,4,7,10,11,8,12]
