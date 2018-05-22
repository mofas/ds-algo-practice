/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

const calculateNeigh = (board, i, j, n, m) => {
  let ret = 0;
  if (i > 0) {
    if (board[i - 1][j] === 1) ret++;
    if (j > 0) {
      if (board[i - 1][j - 1] === 1) ret++;
    }
    if (j < m - 1) {
      if (board[i - 1][j + 1] === 1) ret++;
    }
  }

  if (j > 0) {
    if (board[i][j - 1] === 1) ret++;
  }

  if (i < n - 1) {
    if (board[i + 1][j] === 1) ret++;
    if (j > 0) {
      if (board[i + 1][j - 1] === 1) ret++;
    }
    if (j < m - 1) {
      if (board[i + 1][j + 1] === 1) ret++;
    }
  }

  if (j < m - 1) {
    if (board[i][j + 1] === 1) ret++;
  }

  return ret;
};

var gameOfLife = function(board) {
  const n = board.length;
  const m = board[0].length;

  const ret = Array(n)
    .fill(0)
    .map(() => Array(m).fill(0));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      const c = calculateNeigh(board, i, j, n, m);
      if (board[i][j] === 1) {
        if (c === 2 || c === 3) {
          ret[i][j] = 1;
        } else {
          ret[i][j] = 0;
        }
      } else {
        if (c === 3) {
          ret[i][j] = 1;
        }
      }
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      board[i][j] = ret[i][j];
    }
  }
  console.log(board);
};

// // [ [0, 0, 0, 0],
// //   [0, 1, 1, 0],
// //   [0, 1, 1, 0],
// //   [0, 0, 0, 0]
// // ]
// gameOfLife([[0, 0, 0, 0], [0, 1, 1, 0], [0, 1, 1, 0], [0, 0, 0, 0]]);

// // [ [0, 0, 0, 0],
// //   [1, 1, 1, 0],
// //   [0, 0, 0, 0],
// //   [0, 0, 0, 0]
// // ]
// gameOfLife([[0, 0, 0, 0], [1, 1, 1, 0], [0, 0, 0, 0], [0, 0, 0, 0]]);
// // [ [0, 1, 0, 0],
// //   [0, 1, 0, 0],
// //   [0, 1, 0, 0],
// //   [0, 0, 0, 0]
// // ]

// // [ [1, 1, 0, 0],
// //   [1, 0, 0, 0],
// //   [0, 0, 0, 1],
// //   [0, 0, 1, 1]
// // ]
// gameOfLife([[1, 1, 0, 0], [1, 0, 0, 0], [0, 0, 0, 1], [0, 0, 1, 1]]);
// // [ [1, 1, 0, 0],
// //   [1, 1, 0, 0],
// //   [0, 0, 1, 1],
// //   [0, 0, 1, 1]
// // ]
// gameOfLife([[1, 1, 0, 0], [1, 1, 0, 0], [0, 0, 1, 1], [0, 0, 1, 1]]);

// gameOfLife([[]]);
// gameOfLife([[0, 1]]);

gameOfLife([
  [0, 1, 0, 0, 1, 1, 0],
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 0, 0, 0, 0, 1],
  [1, 1, 0, 0, 1, 0, 0]
]);

// [
//   [1, 1, 0, 0, 0, 0, 1],
//   [0, 0, 0, 1, 0, 0, 1],
//   [0, 0, 0, 0, 0, 0, 1],
//   [1, 1, 0, 0, 0, 0, 0]
// ];
