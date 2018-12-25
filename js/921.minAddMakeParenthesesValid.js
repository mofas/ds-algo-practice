/**
 * @param {string} S
 * @return {number}
 */
// 60ms
var minAddToMakeValid = function(S) {
  let ret = 0;
  let stack = 0;
  for (const c of S) {
    if (c === '(') {
      stack++;
    } else if (c === ')' && stack > 0) {
      stack--;
    } else if (c === ')') {
      ret++;
    }
  }
  return ret + stack;
};

console.log(minAddToMakeValid('())'));
// 1

console.log(minAddToMakeValid('((('));
// 3

console.log(minAddToMakeValid('()'));
// 0

console.log(minAddToMakeValid('()))(('));
// 4
