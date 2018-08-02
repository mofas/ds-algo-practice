/**
 * @param {number[][]} matrix
 */
// 72ms
var NumMatrix = function(matrix) {
  const n = matrix.length;
  if (n === 0) {
    this.sumMatrix = [];
    return;
  }
  const m = matrix[0].length;
  this.sumMatrix = new Array(n).fill(0).map(_ => new Array(m).fill(0));
  this.sumMatrix[0][0] = matrix[0][0];

  for (let i = 1; i < m; i++) {
    this.sumMatrix[0][i] = this.sumMatrix[0][i - 1] + matrix[0][i];
  }
  for (let i = 1; i < n; i++) {
    this.sumMatrix[i][0] = this.sumMatrix[i - 1][0] + matrix[i][0];
  }

  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      this.sumMatrix[i][j] =
        this.sumMatrix[i][j - 1] +
        this.sumMatrix[i - 1][j] -
        this.sumMatrix[i - 1][j - 1] +
        matrix[i][j];
    }
  }
  // console.log(this.sumMatrix);
};

/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
  const a = this.sumMatrix[row2][col2];
  let b = 0;
  let c = 0;
  let d = 0;
  if (row1 > 0) {
    b = this.sumMatrix[row1 - 1][col2];
  }
  if (col1 > 0) {
    c = this.sumMatrix[row2][col1 - 1];
  }
  if (row1 > 0 && col1 > 0) {
    d = this.sumMatrix[row1 - 1][col1 - 1];
  }
  return a - b - c + d;
};

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = Object.create(NumMatrix).createNew(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */

let mat = new NumMatrix([
  [3, 0, 1, 4, 2],
  [5, 6, 3, 2, 1],
  [1, 2, 0, 1, 5],
  [4, 1, 0, 1, 7],
  [1, 0, 3, 0, 5]
]);

console.log(mat.sumRegion(2, 1, 4, 3));
// 8

console.log(mat.sumRegion(1, 1, 2, 2));
// 11

console.log(mat.sumRegion(1, 2, 2, 4));
// 12

mat = new NumMatrix([[-1]]);

console.log(mat.sumRegion(0, 0, 0, 0));
// -1
