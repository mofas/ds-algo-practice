/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
  const n = matrix.length;
  const m = matrix[0].length;
  const rowMap = new Set();
  const colMap = new Set();
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (matrix[i][j] === 0) {
        rowMap.add(i);
        colMap.add(j);
      }
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (rowMap.has(i) || colMap.has(j)) {
        matrix[i][j] = 0;
      }
    }
  }
  console.log(matrix);
};

// best sol from web
// var setZeroes = function(matrix) {
//   if (!matrix.length || !matrix[0].length) return;
//   let row = matrix.length;
//   let col = matrix[0].length;
//   let firstRow = false;
//   let firstCol = false;
//   for (let i = 0; i < row; i++) {
//     for (let j = 0; j < col; j++) {
//       if (matrix[i][j] === 0) {
//         matrix[0][j] = 0;
//         matrix[i][0] = 0;
//         i === 0 ? (firstRow = true) : null;
//         j === 0 ? (firstCol = true) : null;
//       }
//     }
//   }
//   for (let i = 1; i < row; i++) {
//     for (let j = 1; j < col; j++) {
//       if (matrix[i][0] === 0 || matrix[0][j] === 0) {
//         matrix[i][j] = 0;
//       }
//     }
//   }
//   if (firstRow) {
//     for (let i = 1; i < col; i++) {
//       matrix[0][i] = 0;
//     }
//   }

//   if (firstCol) {
//     for (let i = 1; i < row; i++) {
//       matrix[i][0] = 0;
//     }
//   }
// };

setZeroes([[1, 1, 1], [1, 0, 1], [1, 1, 1]]);
// [
//   [1,0,1],
//   [0,0,0],
//   [1,0,1]
// ]

setZeroes([[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]]);
// [
//   [0,0,0,0],
//   [0,4,5,0],
//   [0,3,1,0]
// ]
