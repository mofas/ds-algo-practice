/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

// 680ms
// brute force
var searchMatrix = function(matrix, target) {
  const n = matrix.length;
  if (n === 0) return false;
  const m = matrix[0].length;
  let maxRow = n;
  let maxCol = m;

  for (let i = 0; i < maxRow; i++) {
    if (matrix[i][0] > target) break;

    for (let j = 0; j < maxCol; j++) {
      // console.log(i, j, maxRow, maxCol);
      if (matrix[i][j] === target) return true;
      if (matrix[i][j] > target) {
        if (maxCol > j) maxCol = j;
        break;
      }
    }
  }
  return false;
};

// best sol from web
// 80 ms
var searchMatrix = function(matrix, target) {
  if (matrix.length === 0) return false;
  const rowSize = matrix.length;
  const columnSize = matrix[0].length;
  let column = columnSize - 1;
  let row = 0;
  while (column >= 0 && row < rowSize) {
    let current = matrix[row][column];
    if (current === target) {
      return true;
    } else if (target > current) {
      row += 1;
    } else if (target < current) {
      column -= 1;
    }
  }
  return false;
};

const matrix = [
  [1, 4, 7, 11, 15],
  [2, 5, 8, 12, 19],
  [3, 6, 9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
];

console.log(searchMatrix([[-1, 3]], -1));
// true

console.log(searchMatrix(matrix, 5));
// true

console.log(searchMatrix(matrix, 22));
// true

console.log(searchMatrix(matrix, 20));
// false

console.log(searchMatrix(matrix, 25));
// false

console.log(searchMatrix(matrix, 31));
// false

console.log(searchMatrix([[1, 3, 5]], 4));
// false
