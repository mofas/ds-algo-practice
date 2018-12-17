/**
 * @param {string} S
 * @return {string}
 */
var reorganizeString = function(S) {
  const n = S.length;
  const bucket = new Array(26).fill(0);
  for (const i in S) {
    bucket[S.charCodeAt(i) - 97]++;
  }
  let data = [];
  let max = 0;
  for (const idx in bucket) {
    const count = bucket[idx];
    if (count > max) max = count;
    if (count > 0) {
      const ch = String.fromCharCode(Number(idx) + 97);
      data.push({ ch, count });
    }
  }

  if (max > Math.ceil(n / 2)) {
    return '';
  }

  data.sort((a, b) => b.count - a.count);
  let chars = [];
  for (const d of data) {
    for (let i = 0; i < d.count; i++) {
      chars.push(d.ch);
    }
  }
  // console.log(chars);

  let ret = new Array(n);
  let index = 0;
  for (let i = 0; i < n; i += 2) {
    ret[i] = chars[index++];
  }
  for (let i = 1; i < n; i += 2) {
    ret[i] = chars[index++];
  }

  return ret.join('');
};

console.log(reorganizeString('aaab'));
// ''

console.log(reorganizeString('aaaaabbb'));
// ''

console.log(reorganizeString('aab'));
// aba

console.log(reorganizeString('aaccbb'));
// abacbc

console.log(reorganizeString('aaaabbb'));
// abababa

console.log(reorganizeString('aabbccccc'));
// aba
