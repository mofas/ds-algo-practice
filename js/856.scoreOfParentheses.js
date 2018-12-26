/**
 * @param {string} S
 * @return {number}
 */
// 48ms
var scoreOfParentheses = function(S) {
  const stack = [];

  for (const c of S) {
    if (c === '(') {
      stack.push('(');
    } else if (c === ')') {
      let ret = 0;
      let val = stack.pop();
      while (val !== '(') {
        ret += val;
        val = stack.pop();
      }
      if (ret === 0) {
        stack.push(1);
      } else {
        stack.push(ret * 2);
      }
    }
  }
  return stack.reduce((x, acc) => x + acc, 0);
};

console.log(scoreOfParentheses('()'));
// 1

console.log(scoreOfParentheses('(())'));
// 2

console.log(scoreOfParentheses('()()'));
// 2

console.log(scoreOfParentheses('(()(()))'));
// 6
