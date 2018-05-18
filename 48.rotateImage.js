/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  const n = matrix.length;

  let temp = null;

  // from layer
  for (let i = 0; n - 2 * i > 1; i++) {
    // for item in layer
    // console.log('i =', i);
    for (let j = 0; j < n - 2 * i - 1; j++) {
      temp = matrix[i][j + i];
      // console.log(
      //   i,
      //   j + i,
      //   '|',
      //   n - i - 1 - j,
      //   i,
      //   '|',
      //   n - i - 1,
      //   n - i - 1 - j,
      //   '|',
      //   i + j,
      //   n - i - 1
      // );

      matrix[i][j + i] = matrix[n - i - 1 - j][i];
      matrix[n - i - 1 - j][i] = matrix[n - i - 1][n - i - 1 - j];
      matrix[n - i - 1][n - i - 1 - j] = matrix[i + j][n - i - 1];
      matrix[i + j][n - i - 1] = temp;
    }
  }
  // console.log(matrix);
};

rotate([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
// [[7, 4, 1], [8, 5, 2], [9, 6, 3]];

rotate([[5, 1, 9, 11], [2, 4, 8, 10], [13, 3, 6, 7], [15, 14, 12, 16]]);
// [[15, 13, 2, 5], [14, 3, 4, 1], [12, 6, 8, 9], [16, 7, 10, 11]];
