/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  const bucket = new Array(26).fill(0);
  const n = s.length;
  let sequence = [];

  for (let i = 0; i < n; i++) {
    const idx = s.charCodeAt(i) - 97;
    if (bucket[idx] === 0) {
      sequence.push(s[i]);
    }
    bucket[idx]++;
  }

  for (let i = 0; i < sequence.length; i++) {
    if (bucket[sequence[i].charCodeAt(0) - 97] === 1) {
      return s.indexOf(sequence[i]);
    }
  }
  return -1;
};

// best sol from web
// var firstUniqChar = function(s) {
//   const letters = 'abcdefghijklmnopqrstuvwxyz';
//   let res = s.length;
//   for (let c of letters) {
//     let lInd = s.indexOf(c);
//     if (lInd != -1 && lInd == s.lastIndexOf(c) && res > lInd) {
//       res = lInd;
//     }
//   }
//   return s.length == res ? -1 : res;
// };

console.log(firstUniqChar('leetcode')); // 0

console.log(firstUniqChar('loveleetcode')); // 2
