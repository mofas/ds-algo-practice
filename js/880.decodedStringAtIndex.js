// /**
//  * @param {string} S
//  * @param {number} K
//  * @return {string}
//  */
// var decodeAtIndex = function(S, K) {
//   let currentStr = '';

//   const appendRepeatStr = currentRepeat => {
//     let repeatNum = Number(currentRepeat);
//     let newStr = currentStr;
//     while (repeatNum > 1) {
//       if (newStr.length >= K) {
//         currentStr = newStr;
//         return true;
//       }
//       newStr += currentStr;
//       repeatNum--;
//     }
//     currentStr = newStr;
//     return false;
//   };

//   for (let i = 0; i < S.length; i++) {
//     const ch = S[i];
//     if (ch.match(/[a-z]/i)) {
//       currentStr += ch;
//     } else {
//       if (appendRepeatStr(ch)) return currentStr[K - 1];
//     }
//   }
//   return currentStr[K - 1];
// };

// https://leetcode.com/problems/decoded-string-at-index/discuss/156747/C%2B%2BPython-O(N)-Time-O(1)-Space
var decodeAtIndex = function(S, K) {
  let N = 0;
  let i = 0;
  for (; N < K; i++) {
    const ch = S[i];
    if (/\d/.test(ch)) {
      N = N * Number(ch);
      // console.log('tri', N);
    } else {
      N = N + 1;
    }
  }
  while (i--) {
    const ch = S[i];
    if (/\d/.test(ch)) {
      N /= Number(ch);
      K %= N;
    } else {
      if (K === N || K === 0) return ch;
      N -= 1;
    }
  }
};

console.log(decodeAtIndex('leet2code3', 10));
// 'o'

console.log(decodeAtIndex('ha22', 5));
// 'h'

console.log(decodeAtIndex('a2345678999999999999999', 1));
// 'a'

console.log(decodeAtIndex('abc', 1));
// 'a'

console.log(decodeAtIndex('a2b3c4d5e6f7g8h9', 3));
// 'b'

console.log(decodeAtIndex('a2b3c4d5e6f7g8h9', 9));
// 'b'

console.log(decodeAtIndex('vzpp636m8y', 2920));
// 'z'

// // TLE
console.log(decodeAtIndex('y959q969u3hb22odq595', 222280369));
// 'y'
