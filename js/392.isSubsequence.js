/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// recursion DP
var isSubsequence = function(s, t) {
  const l1 = s.length;
  const l2 = t.length;
  const helper = (l1, l2) => {
    if (l1 === 0) return true;
    if (l2 === 0) return false;
    if (s[l1] === t[l2]) return helper(l1 - 1, l2 - 1);
    else return helper(l1, l2 - 1);
  };

  return helper(l1, l2);
};

// iteration DP
// 80 ms
var isSubsequence = function(s, t) {
  const l1 = s.length;
  if (l1 === 0) return true;
  const n = t.length;
  let pointer = 0;
  for (let i = 0; i < n; i++) {
    if (s[pointer] === t[i]) pointer++;
    if (pointer === l1) return true;
  }
  return false;
};

console.log(isSubsequence('abc', 'ahbgdc'));
// true

console.log(isSubsequence('axc', 'ahbgdc'));
// false
