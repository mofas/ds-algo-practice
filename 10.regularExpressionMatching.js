/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
// recursive DP
// 92 ms
var isMatch = function(s, p) {
  const n = n;
  const m = p.length;
  const cache = {};

  const helper = (i, j, prev) => {
    // console.log(i, j, prev, s.substring(i), p.substring(j));
    if (i === n && j === m) return true;
    if (i > n || j > m) return false;

    if (prev === '' && cache[i + ',' + j] != null) {
      // console.log('trigger', i + ',' + j);
      return cache[i + ',' + j];
    }

    if (p[j] === '.' && helper(i + 1, j + 1, '.')) {
      cache[i + ',' + j] = true;
      return true;
    }

    if (s[i] === p[j] && helper(i + 1, j + 1, s[i])) {
      cache[i + ',' + j] = true;
      return true;
    }

    // we can ignore this cahr when next is *
    if (j < m - 1 && p[j + 1] === '*' && helper(i, j + 2, null)) {
      cache[i + ',' + j] = true;
      return true;
    }

    if (p[j] === '*') {
      // don't repeat
      if (helper(i, j + 1, '')) {
        cache[i + ',' + j] = true;
        return true;
      }
      if (prev === '' && helper(i + 1, j, s[i])) {
        cache[i + ',' + j] = true;
        return true;
      } else if (s[i] === prev || prev === '.') {
        // keep using * to repeat
        if (helper(i + 1, j, prev)) {
          cache[i + ',' + j] = true;
          return true;
        }
        // we don't use '*' anymore
        if (helper(i + 1, j + 1, '')) {
          cache[i + ',' + j] = true;
          return true;
        }
      }
    }
    cache[i + ',' + j] = false;
    return false;
  };

  let ret = helper(0, 0, '');
  return ret;
};

// best sol from web
// 64 ms
var isMatch = function(s, p) {
  const n = s.length;
  const m = p.length;
  let state = new Array(n + 1).fill(0).map(_ => new Array(m + 1));

  function dp(i, j) {
    if (state[i][j] != null) return state[i][j];

    let res;
    if (j == m) {
      res = i === n;
    } else {
      let firstmatch =
        i < n && (s.charAt(i) == p.charAt(j) || p.charAt(j) == '.');
      if (j + 1 < m && p.charAt(j + 1) == '*') {
        res = dp(i, j + 2, s, p) || (firstmatch && dp(i + 1, j));
      } else {
        res = firstmatch && dp(i + 1, j + 1);
      }
    }
    state[i][j] = res;
    return res;
  }

  return dp(0, 0);
};
console.log(isMatch('ab', '.*..'));
// true

console.log(isMatch('abc', 'abc'));
// true

console.log(isMatch('aa', 'a*'));
// true

console.log(isMatch('ab', '.*'));
// true

console.log(isMatch('aab', 'c*a*b'));
// true

console.log(isMatch('aaa', 'ab*a*c*a'));
// true

console.log(isMatch('aa', 'a'));
// false

console.log(isMatch('aa', 'caa'));
// false

console.log(isMatch('mississippi', 'mis*is*p*.'));
// false
