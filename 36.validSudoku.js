/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  // check row
  for (let i = 0; i < 9; i++) {
    const hash = {};
    for (let j = 0; j < 9; j++) {
      if (board[i][j] !== '.') {
        if (hash[board[i][j]]) return false;
        else hash[board[i][j]] = true;
      }
    }
    // console.log(hash);
  }
  // check col
  for (let i = 0; i < 9; i++) {
    const hash = {};
    for (let j = 0; j < 9; j++) {
      if (board[j][i] !== '.') {
        if (hash[board[j][i]]) return false;
        else hash[board[j][i]] = true;
      }
    }
    // console.log('==', hash);
  }

  // check 3x3 block
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      const hash = {};
      for (let k = 0; k < 3; k++) {
        for (let l = 0; l < 3; l++) {
          if (board[i * 3 + k][j * 3 + l] !== '.') {
            if (hash[board[i * 3 + k][j * 3 + l]]) return false;
            else hash[board[i * 3 + k][j * 3 + l]] = true;
          }
        }
      }
      // console.log(i, j, hash);
    }
  }
  return true;
};

console.log(
  isValidSudoku([
    ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
    ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
    ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
    ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
    ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
    ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
    ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
    ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
    ['.', '.', '.', '.', '8', '.', '.', '7', '9']
  ])
);
// true

console.log(
  isValidSudoku([
    ['8', '3', '.', '.', '7', '.', '.', '.', '.'],
    ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
    ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
    ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
    ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
    ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
    ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
    ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
    ['.', '.', '.', '.', '8', '.', '.', '7', '9']
  ])
);

// false
