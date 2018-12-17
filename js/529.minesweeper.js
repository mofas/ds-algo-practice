/**
 * @param {character[][]} board
 * @param {number[]} click
 * @return {character[][]}
 */
// 120 ms
var updateBoard = function(board, click) {
  const n = board.length;
  const m = board[0].length;

  const calculateNeighMine = (x, y) => {
    let acc = 0;
    if (x > 0) {
      if (board[x - 1][y] === 'M') acc++;
      if (y > 0) {
        if (board[x - 1][y - 1] === 'M') acc++;
      }
      if (y < m - 1) {
        if (board[x - 1][y + 1] === 'M') acc++;
      }
    }
    if (x < n - 1) {
      if (board[x + 1][y] === 'M') acc++;
      if (y > 0) {
        if (board[x + 1][y - 1] === 'M') acc++;
      }
      if (y < m - 1) {
        if (board[x + 1][y + 1] === 'M') acc++;
      }
    }
    if (y > 0) {
      if (board[x][y - 1] === 'M') acc++;
    }
    if (y < m - 1) {
      if (board[x][y + 1] === 'M') acc++;
    }
    return acc;
  };

  if (board[click[0]][click[1]] === 'M') {
    board[click[0]][click[1]] = 'X';
  } else if (board[click[0]][click[1]] === 'E') {
    const visited = {};
    const stack = [click];
    while (stack.length) {
      const [x, y] = stack.pop();

      if (visited[`${x},${y}`]) continue;
      // console.log('in loop', x, y);
      visited[`${x},${y}`] = true;
      if (board[x][y] === 'E') {
        const nm = calculateNeighMine(x, y);
        // console.log('nm', x, y, nm);
        if (nm > 0) {
          board[x][y] = String(nm);
        } else {
          board[x][y] = 'B';
          if (x > 0) {
            stack.push([x - 1, y]);
            if (y > 0) {
              stack.push([x - 1, y - 1]);
            }
            if (y < m - 1) {
              stack.push([x - 1, y + 1]);
            }
          }
          if (x < n - 1) {
            stack.push([x + 1, y]);
            if (y > 0) {
              stack.push([x + 1, y - 1]);
            }
            if (y < m - 1) {
              stack.push([x + 1, y + 1]);
            }
          }
          if (y > 0) {
            stack.push([x, y - 1]);
          }
          if (y < m - 1) {
            stack.push([x, y + 1]);
          }
        }
      }
    }
  }
  return board;
};

// best sol from web
// var updateBoard = function(board, click) {
//   const i = click[0];
//   const j = click[1];
//   if (board[i][j] === 'M') {
//     board[i][j] = 'X';
//     return board;
//   }

//   dfs(board, i, j);

//   return board;
// };

// function dfs(board, i, j) {
//   if (
//     i < 0 ||
//     j < 0 ||
//     i === board.length ||
//     j === board[0].length ||
//     board[i][j] !== 'E'
//   ) {
//     return;
//   }

//   // Count num of mines around board[i][j]
//   let mines = countMines(board, i, j);

//   if (mines === 0) {
//     board[i][j] = 'B';
//   } else {
//     board[i][j] = mines + '';
//     return;
//   }

//   dfs(board, i - 1, j); // top
//   dfs(board, i + 1, j); // bottom
//   dfs(board, i, j - 1); // left
//   dfs(board, i, j + 1); // right

//   dfs(board, i - 1, j - 1); // top-left
//   dfs(board, i - 1, j + 1); // top-right
//   dfs(board, i + 1, j - 1); // bottom-left
//   dfs(board, i + 1, j + 1); // bottom-right
// }

// function countMines(board, i, j) {
//   let mines = 0;

//   // top-left
//   if (
//     i - 1 >= 0 &&
//     j - 1 >= 0 &&
//     (board[i - 1][j - 1] === 'M' || board[i - 1][j - 1] === 'X')
//   ) {
//     mines++;
//   }
//   // top-mid
//   if (i - 1 >= 0 && (board[i - 1][j] === 'M' || board[i - 1][j] === 'X')) {
//     mines++;
//   }
//   // top-right
//   if (
//     i - 1 >= 0 &&
//     j + 1 < board[0].length &&
//     (board[i - 1][j + 1] === 'M' || board[i - 1][j + 1] === 'X')
//   ) {
//     mines++;
//   }
//   // left
//   if (j - 1 >= 0 && (board[i][j - 1] === 'M' || board[i][j - 1] === 'X')) {
//     mines++;
//   }
//   // right
//   if (
//     j + 1 < board[0].length &&
//     (board[i][j + 1] === 'M' || board[i][j + 1] === 'X')
//   ) {
//     mines++;
//   }
//   // bottom-left
//   if (
//     i + 1 < board.length &&
//     j - 1 >= 0 &&
//     (board[i + 1][j - 1] === 'M' || board[i + 1][j - 1] === 'X')
//   ) {
//     mines++;
//   }
//   // bottom-mid
//   if (
//     i + 1 < board.length &&
//     (board[i + 1][j] === 'M' || board[i + 1][j] === 'X')
//   ) {
//     mines++;
//   }
//   // bottom-right
//   if (
//     i + 1 < board.length &&
//     j + 1 < board[0].length &&
//     (board[i + 1][j + 1] === 'M' || board[i + 1][j + 1] === 'X')
//   ) {
//     mines++;
//   }

//   return mines;
// }

console.log(
  updateBoard(
    [
      ['E', 'E', 'E', 'E', 'E'],
      ['E', 'E', 'M', 'E', 'E'],
      ['E', 'E', 'E', 'E', 'E'],
      ['E', 'E', 'E', 'E', 'E']
    ],
    [3, 0]
  )
);
// [
//   ['B', '1', 'E', '1', 'B'],
//   ['B', '1', 'M', '1', 'B'],
//   ['B', '1', '1', '1', 'B'],
//   ['B', 'B', 'B', 'B', 'B']
// ];

console.log(
  updateBoard(
    [
      ['B', '1', 'E', '1', 'B'],
      ['B', '1', 'M', '1', 'B'],
      ['B', '1', '1', '1', 'B'],
      ['B', 'B', 'B', 'B', 'B']
    ],
    [1, 2]
  )
);

// [
//   ['B', '1', 'E', '1', 'B'],
//   ['B', '1', 'X', '1', 'B'],
//   ['B', '1', '1', '1', 'B'],
//   ['B', 'B', 'B', 'B', 'B']
// ];

console.log(
  updateBoard(
    [
      ['E', 'E', 'E', 'E', 'E'],
      ['E', 'E', 'M', 'E', 'E'],
      ['E', 'E', 'E', 'E', 'E'],
      ['E', 'E', 'E', 'E', 'E']
    ],
    [1, 2]
  )
);

// [
//   ['E', 'E', 'E', 'E', 'E'],
//   ['E', 'E', 'X', 'E', 'E'],
//   ['E', 'E', 'E', 'E', 'E'],
//   ['E', 'E', 'E', 'E', 'E']
// ];
