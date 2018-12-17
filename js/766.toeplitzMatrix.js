var isToeplitzMatrix = function(matrix) {
  const m = matrix.length;
  const n = matrix[0].length;
  //TODO
  for (let i = 1; i < m; i++) {
    const prevRow = matrix[i - 1];
    const currentRow = matrix[i];
    // only need to compare from i + 1 to n
    for (let j = 1; j < n; j++) {
      if (prevRow[j - 1] !== currentRow[j]) {
        return false;
      }
    }
  }
  return true;
};

console.log(isToeplitzMatrix([[1, 2, 3, 4], [5, 1, 2, 3], [9, 5, 1, 2]])); // true
console.log(isToeplitzMatrix([[1, 2], [2, 2]])); // false
