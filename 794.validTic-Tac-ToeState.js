/**
 * @param {string[]} board
 * @return {boolean}
 */
var validTicTacToe = function(board) {
  const newBoard = board.map(d => d.split(''));

  let firstC = 0;
  let secondC = 0;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (newBoard[i][j] === 'X') firstC++;
      else if (newBoard[i][j] === 'O') secondC++;
    }
  }

  if (firstC !== secondC && firstC !== secondC + 1) {
    return false;
  }

  const player = ['X', 'O'];
  const streak = [0, 0];

  for (let t = 0; t < 2; t++) {
    for (let i = 0; i < 3; i++) {
      // row
      if (
        newBoard[i][0] === player[t] &&
        newBoard[i][1] === player[t] &&
        newBoard[i][2] === player[t]
      ) {
        streak[t]++;
      }
      // col
      if (
        newBoard[0][i] === player[t] &&
        newBoard[1][i] === player[t] &&
        newBoard[2][i] === player[t]
      ) {
        streak[t]++;
      }
    }
    // diagonal
    if (
      newBoard[0][0] === player[t] &&
      newBoard[1][1] === player[t] &&
      newBoard[2][2] === player[t]
    ) {
      streak[t]++;
    }
    if (
      newBoard[0][2] === player[t] &&
      newBoard[1][1] === player[t] &&
      newBoard[2][0] === player[t]
    ) {
      streak[t]++;
    }
  }

  // cannot both win
  if (streak[0] && streak[1]) return false;

  // early ending
  if (firstC + secondC < 9) {
    if (streak[0] >= 1 && firstC !== secondC + 1) return false;
    if (streak[1] >= 1 && firstC !== secondC) return false;
  } else {
    // player2 cannot win in the end
    if (streak[1] >= 1) return false;
  }

  return true;
};

console.log(validTicTacToe(['O  ', '   ', '   ']));
// false

console.log(validTicTacToe(['XOX', ' X ', '   ']));
// false

console.log(validTicTacToe(['XXX', '   ', 'OOO']));
// false

console.log(validTicTacToe(['XXX', 'XOO', 'OO ']));
// false

console.log(validTicTacToe(['OXX', 'XOX', 'OXO']));
// false

console.log(validTicTacToe(['OXX', 'XOX', 'XOO']));
// false

console.log('========');

console.log(validTicTacToe(['OXX', 'XOX', 'OOX']));
// true

console.log(validTicTacToe(['XOX', 'O O', 'XOX']));
// true
