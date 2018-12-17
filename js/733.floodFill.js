/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */

// it is slow
// 232ms
var floodFill = function(image, sr, sc, newColor) {
  const n = image.length;
  const m = image[0].length;
  const targetColor = image[sr][sc];
  if (targetColor === newColor) return image;

  const dfs = (x, y) => {
    if (x < 0 || x >= n || y < 0 || y >= m) return;
    if (image[x][y] === targetColor) {
      image[x][y] = newColor;
      dfs(x + 1, y);
      dfs(x, y + 1);
      dfs(x - 1, y);
      dfs(x, y - 1);
    }
  };

  dfs(sr, sc);

  return image;
};

// the best sol from web
// it is basically the same.
// but only cost 72 ms
// i don't know why
var floodFill = function(image, sr, sc, newColor) {
  let affected = image[sr][sc];
  if (affected === newColor) return image;
  var moveOut = function(row, col) {
    image[row][col] = newColor;

    if (image[row - 1] !== undefined && image[row - 1][col] === affected)
      moveOut(row - 1, col);
    if (image[row + 1] !== undefined && image[row + 1][col] === affected)
      moveOut(row + 1, col);
    if (image[row][col - 1] !== undefined && image[row][col - 1] === affected)
      moveOut(row, col - 1);
    if (image[row][col + 1] !== undefined && image[row][col + 1] === affected)
      moveOut(row, col + 1);
  };
  moveOut(sr, sc);
  return image;
};

console.log(floodFill([[1, 1, 1], [1, 1, 0], [1, 0, 1]], 1, 1, 2));
// [[2,2,2],[2,2,0],[2,0,1]]

console.log(floodFill([[0, 0, 0], [0, 1, 1]], 1, 1, 1));
// [ [ 0, 0, 0 ], [ 0, 1, 1 ] ]
