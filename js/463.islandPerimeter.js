/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
  const n = grid.length;
  if (n === 0) return 0;
  const m = grid[0].length;

  let ret = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j]) {
        let coastLength = 4;
        if (i > 0) {
          if (grid[i - 1][j]) coastLength--;
        }
        if (i < n - 1) {
          if (grid[i + 1][j]) coastLength--;
        }
        if (j > 0) {
          if (grid[i][j - 1]) coastLength--;
        }
        if (j < m - 1) {
          if (grid[i][j + 1]) coastLength--;
        }
        ret += coastLength;
      }
    }
  }
  return ret;
};

// best sol from web
// var islandPerimeter = function(grid) {
//   var perimeter = 0;
//   var n = grid.length;
//   var m = grid[0].length;

//   for (var i = 0; i < n; i++) {
//     for (var j = 0; j < m; j++) {
//       if (grid[i][j] == 1) {
//         if (i == 0 || grid[i - 1][j] == 0) perimeter++;
//         if (i == n - 1 || grid[i + 1][j] == 0) perimeter++;
//         if (j == 0 || grid[i][j - 1] == 0) perimeter++;
//         if (j == m - 1 || grid[i][j + 1] == 0) perimeter++;
//       }
//     }
//   }
//   return perimeter;
// };

console.log(
  islandPerimeter([[0, 1, 0, 0], [1, 1, 1, 0], [0, 1, 0, 0], [1, 1, 0, 0]])
);
// 16
