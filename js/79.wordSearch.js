/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

// we need to do something like DFS.
// very slow version
var exist = function(board, word) {
  const n = board.length;
  const m = board[0].length;
  const ws = word.length;

  if (ws === 0) return true;
  if (n === 0) return false;

  const explore = (visited, i, j, index) => {
    const t = word[index];
    // console.log(i, j, index, visited);

    visited[`${i}_${j}`] = true;

    if (i > 0 && board[i - 1][j] === t && !visited[`${i - 1}_${j}`]) {
      if (index === ws - 1) return true;
      const ret = explore(Object.assign({}, visited), i - 1, j, index + 1);
      if (ret) return true;
    }
    if (j > 0 && board[i][j - 1] === t && !visited[`${i}_${j - 1}`]) {
      if (index === ws - 1) return true;
      const ret = explore(Object.assign({}, visited), i, j - 1, index + 1);
      if (ret) return true;
    }
    if (i < n - 1 && board[i + 1][j] === t && !visited[`${i + 1}_${j}`]) {
      if (index === ws - 1) return true;
      const ret = explore(Object.assign({}, visited), i + 1, j, index + 1);
      if (ret) return true;
    }
    if (j < m - 1 && board[i][j + 1] === t && !visited[`${i}_${j + 1}`]) {
      if (index === ws - 1) return true;
      const ret = explore(Object.assign({}, visited), i, j + 1, index + 1);
      if (ret) return true;
    }

    return false;
  };

  const startChar = word[0];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (board[i][j] === startChar) {
        if (ws === 1) return true;
        const visited = {};
        if (explore(visited, i, j, 1)) return true;
      }
    }
  }

  return false;
};

// best sol from web
// using # to flag visited char and reset it after search is so brilliant

// var exist = function(board, word) {
//   var r = board.length;
//   var c = board[0].length;

//   for (var i = 0; i < r; i++) {
//     for (var j = 0; j < c; j++) {
//       if (board[i][j] !== word[0]) continue;
//       if (findword(i, j, word, 0)) {
//         return true;
//       }
//     }
//   }
//   return false;

//   function findword(row, col, str, pos_str) {
//     var str_len = str.length;
//     if (str_len === pos_str) {
//       return true;
//     }
//     if (row >= r || col >= c || row < 0 || col < 0) {
//       return false;
//     }
//     if (board[row][col] !== str[pos_str]) {
//       return false;
//     }

//     board[row][col] = '#';
//     var ans =
//       findword(row + 1, col, str, pos_str + 1) ||
//       findword(row, col + 1, str, pos_str + 1) ||
//       findword(row - 1, col, str, pos_str + 1) ||
//       findword(row, col - 1, str, pos_str + 1);

//     board[row][col] = str[pos_str];
//     return ans;
//   }
// };

const board = [
  ['A', 'B', 'C', 'E'],
  ['S', 'F', 'C', 'S'],
  ['A', 'D', 'E', 'E']
];

console.log(exist([['A']], 'A')); // true

console.log(exist(board, 'ABFSADEE')); // true

console.log(exist(board, 'ABCCED')); // true

console.log(exist(board, 'SEE')); // true

console.log(exist(board, 'SEEE')); // false

console.log(exist(board, 'ABCB')); // false

console.log(exist(board, 'ABFSAB')); // false
