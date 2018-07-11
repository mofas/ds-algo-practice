/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
var shortestCompletingWord = function(licensePlate, words) {
  const hash = {};
  licensePlate
    .toLowerCase()
    .split('')
    .forEach(k => {
      if (/[a-z]/i.test(k)) {
        if (hash[k]) hash[k]++;
        else hash[k] = 1;
      }
    });
  let ret = null;
  for (let i = 0; i < words.length; i++) {
    const d = words[i];
    const currentHash = {};
    words[i].split('').forEach(k => {
      if (currentHash[k]) currentHash[k]++;
      else currentHash[k] = 1;
    });
    let valid = true;
    const arr = Object.keys(hash);
    if (arr.length > Object.keys(currentHash).length) continue;
    for (let i = 0; i < arr.length; i++) {
      const key = arr[i];
      if (!currentHash[key] || hash[key] > currentHash[key]) {
        valid = false;
        break;
      }
    }
    if (valid) {
      if (!ret || ret.length > words[i].length) ret = words[i];
    }
  }
  return ret;
};

// best sol from web
// const freqCount = lcWords => {
//   const freqs = new Uint16Array(26);
//   for (let i = 0; i < lcWords.length; ++i) {
//     const code = lcWords.codePointAt(i);
//     // a to z
//     if (code >= 97 && code <= 122) {
//       ++freqs[code - 97];
//     }
//   }
//   return freqs;
// };

// /**
//  * @param {string} licensePlate
//  * @param {string[]} words
//  * @return {string}
//  */
// const shortestCompletingWord = (licensePlate, words) => {
//   let ans = null;
//   const lpFreqs = freqCount(licensePlate.toLowerCase());
//   words.forEach(w => {
//     if (ans && ans.length <= w.length) return;
//     const freq = freqCount(w);
//     for (let i = 0; i < 26; ++i) if (freq[i] < lpFreqs[i]) return;
//     if (ans === null || ans.length > w.length) ans = w;
//   });
//   return ans;
// };

console.log(
  shortestCompletingWord('1s3 PSt', ['step', 'steps', 'stripe', 'stepple'])
);
// 'steps'

console.log(
  shortestCompletingWord('1s3 456', ['looks', 'pest', 'stew', 'show'])
);
// 'pest'
