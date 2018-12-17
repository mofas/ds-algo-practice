/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */

// sol from discussion board
// it actually create number to compare!!!
// 60ms
// beats 100%
var kthSmallest = function(matrix, k) {
  const n = matrix.length;

  let lo = matrix[0][0];
  let hi = matrix[n - 1][n - 1] + 1;
  while (lo < hi) {
    let mid = Math.floor((lo + hi) / 2);
    let count = 0;
    let j = n - 1;
    let max = lo;
    for (let i = 0; i < n; i++) {
      while (j >= 0 && matrix[i][j] > mid) j--;
      count += j + 1;
      if (j >= 0) max = Math.max(max, matrix[i][j]);
    }
    if (count === k) return max;
    else if (count < k) lo = mid + 1;
    else hi = mid;
  }
  return lo;
};

console.log(kthSmallest([[-5]], 1));
// -5

console.log(kthSmallest([[1, 2], [1, 3]], 1));
// 1

console.log(kthSmallest([[1, 2], [1, 3]], 2));
// 1

console.log(kthSmallest([[1, 3, 5], [6, 7, 12], [11, 14, 14]], 3));
// 5

console.log(kthSmallest([[1, 3, 5], [6, 7, 12], [11, 14, 14]], 5));
// 7

console.log(kthSmallest([[1, 6, 11], [2, 10, 17], [3, 15, 20]], 3));
// 3

console.log(kthSmallest([[1, 5, 9], [10, 11, 13], [12, 13, 15]], 8));
// 13

console.log(kthSmallest([[2000000000]], 1));
// 2000000000
