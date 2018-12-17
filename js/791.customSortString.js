/**
 * @param {string} S
 * @param {string} T
 * @return {string}
 */
var customSortString = function(S, T) {
  const bucket = new Array(26).fill(0);
  const sT = S.length;
  const nT = T.length;
  for (let i = 0; i < nT; i++) {
    const idx = T.charCodeAt(i) - 97;
    bucket[idx]++;
  }

  let ret = '';
  for (let i = 0; i < sT; i++) {
    const idx = S.charCodeAt(i) - 97;
    if (bucket[idx] > 0) {
      ret += S[i].repeat(bucket[idx]);
      bucket[idx] = 0;
    }
  }

  for (let i = 0; i < 26; i++) {
    if (bucket[i] > 0) {
      ret += String.fromCharCode(i + 97).repeat(bucket[i]);
    }
  }
  return ret;
};

console.log(customSortString('cba', 'abcdabcd')); // ccbbaadd
