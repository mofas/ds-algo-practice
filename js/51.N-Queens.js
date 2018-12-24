const putQueen = (state, n, x, y) => {
  let copy = state.map(d => d.slice());
  copy[y][x] = 1;
  //vertical
  for (let i = y + 1; i < n; i++) {
    copy[i][x] = -1;
  }
  // bottom-right diag
  for (let i = 1; i < n; i++) {
    if (x + i >= n || y + i >= n) break;
    copy[y + i][x + i] = -1;
  }
  //bottom-left
  for (let i = 1; i < n; i++) {
    if (x - i < 0 || y + i >= n) break;
    copy[y + i][x - i] = -1;
  }
  return copy;
};

// console.log(
//   putQueen([[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]], 4, 2, 0)
// );
// console.log(
//   putQueen([[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]], 4, 0, 1)
// );
/**
 * @param {number} n
 * @return {string[][]}
 */
// 84ms
var solveNQueens = function(n) {
  // initial board
  const init_stat = new Array(n).fill(null).map(_ => Array(n).fill(0));
  const cands = [];
  const helper = (state, i) => {
    if (i === n) {
      cands.push(state);
    } else {
      for (let j = 0; j < n; j++) {
        if (state[i][j] === 0) {
          const next = putQueen(state, n, j, i);
          helper(next, i + 1);
        }
      }
    }
  };

  helper(init_stat, 0);

  const ret = cands.map(cand => {
    return cand.map(d => {
      return d
        .map(dd => {
          if (dd === 1) return 'Q';
          return '.';
        })
        .join('');
    });
  });
  return ret;
};

console.log(solveNQueens(4));
// [
//   [
//     '.Q..', // Solution 1
//     '...Q',
//     'Q...',
//     '..Q.'
//   ],
//   [
//     '..Q.', // Solution 2
//     'Q...',
//     '...Q',
//     '.Q..'
//   ]
// ];

console.log(solveNQueens(5));
