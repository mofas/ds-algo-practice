/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  const n = strs.length;
  if (n === 0) return '';

  let min = Infinity;

  strs.forEach(d => {
    if (min > d.length) min = d.length;
  });

  let ret = '';
  let t = strs[0];
  for (let i = 0; i < min; i++) {
    for (let j = 0; j < n; j++) {
      if (t[i] !== strs[j][i]) {
        return ret;
      }
    }
    ret += t[i];
  }

  return ret;
};

console.log(longestCommonPrefix(['flower', 'flow', 'flight'])); // 'fl'

console.log(longestCommonPrefix(['dog', 'racecar', 'car'])); // ''
