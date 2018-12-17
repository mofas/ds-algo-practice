/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var transpose = function(A) {
  const n = A.length;
  const m = A[0].length;
  const ret = new Array(m).fill(null).map(_ => new Array(n).fill(0));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      ret[j][i] = A[i][j];
    }
  }
  return ret;
};

console.log(transpose([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
// [[1, 4, 7], [2, 5, 8], [3, 6, 9]];

console.log(transpose([[1, 2, 3], [4, 5, 6]]));
// [[1, 4], [2, 5], [3, 6]];
