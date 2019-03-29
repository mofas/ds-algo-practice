/**
 * @param {string} s
 * @return {string[]}
 */
// https://leetcode.com/problems/remove-invalid-parentheses/discuss/75028/Short-Python-BFS
// Runtime: 116 ms, faster than 53.09%
// Memory Usage: 41.7 MB, less than 38.64%
const isValid = s => {
  let sc = 0;
  for (const ch of s) {
    if (ch === '(') {
      sc++;
    } else if (ch === ')') {
      sc--;
      if (sc < 0) return false;
    }
  }
  return sc === 0;
};

var removeInvalidParentheses = function(s) {
  let level = [s];
  while (true) {
    const valids = level.filter(isValid);
    if (valids.length) {
      return valids;
    }
    let nextLevel = [];
    for (const s of level) {
      for (let i = 0; i < s.length; i++) {
        if (s[i] === ')' || s[i] === '(') {
          nextLevel.push(s.substring(0, i) + s.substring(i + 1));
        }
      }
    }
    // console.log(nextLevel);
    // filter duplicated
    level = [...new Set(nextLevel)];
  }
  return level;
};

// best sol
// 60ms
var removeInvalidParentheses = function(s) {
  const ans = [];
  dfs(s, 0, 0, ['(', ')'], ans);
  return ans;
};

function dfs(s, start, last_update, pair, ans) {
  let stack = 0;
  for (var i = start; i < s.length; i++) {
    if (s[i] === pair[0]) stack++;
    if (s[i] === pair[1]) stack--;
    if (stack >= 0) continue;
    for (var j = last_update; j <= i; j++) {
      if (s[j] === pair[1] && (j === last_update || s[j - 1] !== pair[1])) {
        dfs(s.substring(0, j) + s.substring(j + 1), i, j, pair, ans);
      }
    }
    return;
  }
  const str = s
    .split('')
    .reverse()
    .join('');
  if (pair[0] === '(') {
    dfs(str, 0, 0, [')', '('], ans);
  } else {
    ans.push(str);
  }
}

console.log(removeInvalidParentheses('()())()'));
// ['()()()', '(())()'];

console.log(removeInvalidParentheses('(a)())()'));
// ['(a)()()', '(a())()'];

console.log(removeInvalidParentheses(')('));
// ['']

console.log(removeInvalidParentheses(')d))'));
// ['d']
