/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  const n = matrix.length;
  if (n === 0) return [];

  const m = matrix[0].length;

  let ret = [];
  // console.log('nxm', n, m);

  for (let i = 0; i * 2 < Math.min(m, n); i++) {
    // left -> right
    for (let j = i; j < m - i; j++) {
      console.log('a', i, j);
      ret.push(matrix[i][j]);
    }

    // top -> bottom
    for (let j = i + 1; j < n - i; j++) {
      // left -> right
      console.log('b', j, m - i - 1);
      ret.push(matrix[j][m - i - 1]);
    }

    // right -> left
    if (n - 2 * i - 1 > 0) {
      for (let j = m - i - 2; j > i - 1; j--) {
        // left -> right
        console.log('c', n - i - 1, j);
        ret.push(matrix[n - i - 1][j]);
      }
    }

    //bottom -> top
    if (i < m - i - 1) {
      for (let j = n - i - 2; j > i; j--) {
        // left -> right
        console.log('d', j, i);
        ret.push(matrix[j][i]);
      }
    }
  }
  return ret;
};

// best sol from web
// var spiralOrder = function(matrix) {
//   if (matrix.length === 0)
//   return [];
//   var height = matrix.length, width = matrix[0].length;
//   var left = 0, up = 0, right = width - 1, down = height - 1;
//   var result = [];
//   while (true) {
//     // up-left to up-right
//     for (var i = left; i <= right; i++)
//       result.push(matrix[up][i]);
//     if (++up > down)
//       break;
//     // upper-right to down-right
//     for (var i = up; i <= down; i++)
//       result.push(matrix[i][right]);
//     if (--right < left)
//       break;
//     // down-right to down-left
//     for (var i = right; i >= left; i--)
//       result.push(matrix[down][i]);
//     if (--down < up)
//       break;
//     // down-left to up left
//     for (var i = down; i >= up; i--)
//       result.push(matrix[i][left]);
//     if (++left > right)
//       break;
//    }
//    return result;
// };

console.log(spiralOrder([[1]]));
// [1]

console.log(spiralOrder([[1, 2, 3]]));
// [1,2,3]

console.log(spiralOrder([[1], [2], [3]]));
// [1,2,3]

console.log(spiralOrder([[1, 2], [3, 4]]));
// [1,2,4,3]

console.log(spiralOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
// [1,2,3,6,9,8,7,4,5]

console.log(spiralOrder([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]));
// [1,2,3,4,8,12,11,10,9,5,6,7]
