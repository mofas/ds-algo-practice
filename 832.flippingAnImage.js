/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function(A) {
  return A.map(d => d.reverse().map(d => 1 - d));
};

console.log(flipAndInvertImage([[1, 1, 0], [1, 0, 1], [0, 0, 0]]));
// [[1, 0, 0], [0, 1, 0], [1, 1, 1]]

console.log(
  flipAndInvertImage([[1, 1, 0, 0], [1, 0, 0, 1], [0, 1, 1, 1], [1, 0, 1, 0]])
);
// [[1, 1, 0, 0], [0, 1, 1, 0], [0, 0, 0, 1], [1, 0, 1, 0]]
