/**
 * @param {string} s
 * @return {string[]}
 */
// 56ms beat 100%
var generatePalindromes = function(s) {
  if (s.length === 1) return [s];
  const hashMap = {};
  for (const c of s) {
    hashMap[c] = hashMap[c] || 0;
    hashMap[c]++;
  }
  let multOne = false;
  let centerChar = null;
  for (const ch in hashMap) {
    if (hashMap[ch] % 2 === 1) {
      if (multOne) return [];
      else {
        multOne = 1;
        centerChar = ch;
      }
    }
  }

  if (centerChar) {
    hashMap[centerChar]--;
  }

  let raw = [];
  for (const ch in hashMap) {
    if (hashMap[ch] > 0) {
      const n = hashMap[ch] >> 1;
      for (let i = 0; i < n; i++) {
        raw.push(ch);
      }
    }
  }

  // permutation
  const len = raw.length;
  const ret = [];
  const swap = (arr, i, j) => {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  };

  const helper = (arr, pos) => {
    if (pos === len - 1) {
      ret.push(arr);
      return;
    }
    for (let k = pos; k < len; k++) {
      if (pos !== k && arr[pos] === arr[k]) continue;
      swap(arr, pos, k);
      helper(arr.slice(), pos + 1);
    }
  };
  helper(raw, 0);

  return ret.map(d => {
    if (centerChar) return d.join('') + centerChar + d.reverse().join('');
    else return d.join('') + d.reverse().join('');
  });
};

console.log(generatePalindromes('aabb'));
// ['abba', 'baab']

console.log(generatePalindromes('abc'));
// []

console.log(generatePalindromes('aabcbc'));
// ['abccba', 'acbbca', 'baccab', 'bcaacb', 'cabbac', 'cbaabc'];

console.log(generatePalindromes('aabcb'));
// ['abcba', 'bacab'];

console.log(generatePalindromes('aaaca'));
// ['aacaa'];

console.log(generatePalindromes('a'));
// ['a'];

console.log(generatePalindromes('aaa'));
// ['aaa'];
