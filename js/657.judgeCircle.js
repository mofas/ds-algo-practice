/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
  let left = 0;
  let top = 0;
  const n = moves.length;
  for (let i = 0; i < n; i++) {
    if (moves[i] === 'U') top++;
    if (moves[i] === 'D') top--;
    if (moves[i] === 'L') left++;
    if (moves[i] === 'R') left--;
  }

  return left === 0 && top === 0;
};

console.log(judgeCircle('UD'));
console.log(judgeCircle('LL'));
