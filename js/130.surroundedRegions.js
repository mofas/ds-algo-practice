/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
// 100 ms
var solve = function(board) {
  const n = board.length;
  if (n === 0) return;
  const m = board[0].length;

  const color = new Array(n).fill(null).map(_ => new Array(m).fill(0));
  // 1 success, 2 fail

  const dfs = (x, y) => {
    if (x === 0 || y === 0 || x === n - 1 || y === m - 1) {
      return board[x][y] === 'X';
    }
    if (board[x][y] === 'X') return true;
    if (color[x][y] === 1) return true;
    if (color[x][y] === 2) return false;
    board[x][y] = '#';
    color[x][y] = 1;
    return dfs(x - 1, y) && dfs(x + 1, y) && dfs(x, y - 1) && dfs(x, y + 1);
  };

  const print = (x, y, t) => {
    if (x === 0 || y === 0 || x === n - 1 || y === m - 1) return;
    if (board[x][y] === '#') {
      if (t === 'O') color[x][y] = 2;
      board[x][y] = t;
      print(x - 1, y, t);
      print(x + 1, y, t);
      print(x, y - 1, t);
      print(x, y + 1, t);
    }
  };

  for (let i = 1; i < n - 1; i++) {
    for (let j = 1; j < m - 1; j++) {
      // console.log('=== start from ', i, j);
      if (board[i][j] === 'O' && color[i][j] === 0) {
        if (dfs(i, j)) print(i, j, 'X');
        else print(i, j, 'O');
      }

      // console.log('=== end ');
    }
  }

  return board;
};

// best sol from web
// it do the opposite fill
// 76 ms
// var solve = function(board) {
//   replace(board, 'O', '$');
//   const n = board.length;
//   const m = board[0] ? board[0].length : 0;

//   // flood fill all the edge $ back to O's
//   for (let i = 0; i < n; i++) {
//     if (board[i][0] === '$') floodFill(board, i, 0, '$', 'O');
//     if (board[i][m - 1] === '$') floodFill(board, i, m - 1, '$', 'O');
//   }
//   for (let j = 0; j < m; j++) {
//     if (board[0][j] === '$') floodFill(board, 0, j, '$', 'O');
//     if (board[n - 1][j] === '$') floodFill(board, n - 1, j, '$', 'O');
//   }

//   replace(board, '$', 'X');
// };

// const floodFill = (board, i, j, targetChar, replaceChar) => {
//   if (i < 0 || j < 0 || i > board.length - 1 || j > board[0].length - 1) return;
//   if (board[i][j] !== targetChar) return;
//   board[i][j] = replaceChar;

//   floodFill(board, i + 1, j, targetChar, replaceChar);
//   floodFill(board, i, j + 1, targetChar, replaceChar);
//   floodFill(board, i - 1, j, targetChar, replaceChar);
//   floodFill(board, i, j - 1, targetChar, replaceChar);
// };

// const replace = (board, targetChar, replaceChar) => {
//   for (let i = 0; i < board.length; i++) {
//     for (let j = 0; j < board[0].length; j++) {
//       if (board[i][j] === targetChar) {
//         board[i][j] = replaceChar;
//       }
//     }
//   }
// };

console.log(
  solve([
    ['X', 'X', 'X', 'X'],
    ['X', 'O', 'O', 'X'],
    ['X', 'X', 'O', 'X'],
    ['X', 'O', 'X', 'X']
  ])
);

// [
//   ['X', 'X', 'X', 'X'],
//   ['X', 'X', 'X', 'X'],
//   ['X', 'X', 'X', 'X'],
//   ['X', 'O', 'X', 'X']
// ];

console.log(
  solve([
    ['O', 'X', 'X', 'O', 'X'],
    ['X', 'O', 'O', 'X', 'O'],
    ['X', 'O', 'X', 'O', 'X'],
    ['O', 'X', 'O', 'O', 'O'],
    ['X', 'X', 'O', 'X', 'O']
  ])
);
// [
//   ['O', 'X', 'X', 'O', 'X'],
//   ['X', 'X', 'X', 'X', 'O'],
//   ['X', 'X', 'X', 'O', 'X'],
//   ['O', 'X', 'O', 'O', 'O'],
//   ['X', 'X', 'O', 'X', 'O']
// ];
console.log(
  solve([
    ['O', 'O', 'O', 'O', 'X', 'X'],
    ['O', 'O', 'O', 'O', 'O', 'O'],
    ['O', 'X', 'O', 'X', 'O', 'O'],
    ['O', 'X', 'O', 'O', 'X', 'O'],
    ['O', 'X', 'O', 'X', 'O', 'O'],
    ['O', 'X', 'O', 'O', 'O', 'O']
  ])
);
