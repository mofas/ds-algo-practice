/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  const n = matrix.length;
  if (n === 0) return false;

  const m = matrix[0].length;

  let r = 0;
  let c = 0;

  let from = 0;
  let to = n - 1;
  let mid;

  // search row
  while (from < to) {
    mid = from + Math.floor(to - from);
    if (matrix[mid][0] > target) {
      to = mid - 1;
    } else {
      from = mid;
    }
  }

  r = from;

  from = 0;
  to = m - 1;
  while (from < to) {
    mid = from + Math.floor(to - from);
    if (matrix[r][mid] > target) {
      to = mid - 1;
    } else {
      from = mid;
    }
  }

  c = from;
  // console.log(r, c);
  return matrix[r][c] === target;
};

// best sol
//treating it as a whole sorted list
// var searchMatrix = function(matrix, target) {
//
//   if (matrix == null || matrix.length == 0) {
//       return false;
//   }
//   let start = 0, rows = matrix.length, cols = matrix[0].length;
//   let end = rows * cols - 1;
//   while (start <= end) {
//       let mid = Math.floor((start + end) / 2);
//       if (matrix[Math.floor(mid / cols)][mid % cols] == target) {
//           return true;
//       }
//       if (matrix[Math.floor(mid / cols)][mid % cols] < target) {
//           start = mid + 1;
//       } else {
//           end = mid - 1;
//       }
//   }
//   return false;
// };

console.log(
  searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 50]], 3)
); // true

console.log(
  searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 50]], 13)
); // false
