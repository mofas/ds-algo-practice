/**
 * @param {number[][]} board
 * @return {number}
 */

// 96ms
const serialize = board => board.map(d => d.join('')).join('');
const copyBoard = board => board.map(d => d.slice());
const nextStatus = board => {
  let zeroX, zeroY;
  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[i][j] === 0) {
        zeroX = i;
        zeroY = j;
        break;
      }
    }
  }
  // console.log(zeroX, zeroY);
  let ret = [];
  let newBoard = copyBoard(board);
  newBoard[zeroX][zeroY] = newBoard[1 - zeroX][zeroY];
  newBoard[1 - zeroX][zeroY] = 0;
  ret.push(newBoard);

  if (zeroY === 0 || zeroY === 2) {
    newBoard = copyBoard(board);
    newBoard[zeroX][zeroY] = newBoard[zeroX][1];
    newBoard[zeroX][1] = 0;
    ret.push(newBoard);
  } else {
    newBoard = copyBoard(board);
    newBoard[zeroX][zeroY] = newBoard[zeroX][0];
    newBoard[zeroX][0] = 0;
    ret.push(newBoard);

    newBoard = copyBoard(board);
    newBoard[zeroX][zeroY] = newBoard[zeroX][2];
    newBoard[zeroX][2] = 0;
    ret.push(newBoard);
  }
  // console.log(ret);
  return ret;
};

var slidingPuzzle = function(board) {
  const initHash = serialize(board);
  if (initHash === '123450') return 0;

  const queue = [[board, 0]];
  const seen = new Set([initHash]);

  while (queue.length > 0) {
    const [status, move] = queue.shift();
    const statusList = nextStatus(status);
    for (let i = 0; i < statusList.length; i++) {
      const d = statusList[i];
      const hash = serialize(d);
      if (hash === '123450') return move + 1;
      if (!seen.has(hash)) {
        queue.push([d, move + 1]);
        seen.add(hash);
      }
    }
    // console.log(seen);
  }

  return -1;
};

console.log(slidingPuzzle([[1, 2, 3], [4, 0, 5]]));
// 1

console.log(slidingPuzzle([[1, 2, 3], [5, 4, 0]]));
// -1

console.log(slidingPuzzle([[4, 1, 2], [5, 0, 3]]));
// 5

console.log(slidingPuzzle([[3, 2, 4], [1, 5, 0]]));
// 14
