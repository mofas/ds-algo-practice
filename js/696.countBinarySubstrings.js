/**
 * @param {string} s
 * @return {number}
 */

// first version, too slow
// var countBinarySubstrings = function(s) {
//   const n = s.length;
//   if (n === 0) return 0;

//   const scanForward = i => {
//     let c = 1;
//     let startChar = s[i];
//     let reversed = false;
//     let j = i + 1;
//     while (j < n && j + c <= n) {
//       if (s[j] === startChar && !reversed) c++;
//       if (s[j] === startChar && reversed) return false;
//       if (s[j] !== startChar) {
//         c--;
//         if (c === 0) {
//           return true;
//         }
//         reversed = true;
//       }
//       j++;
//     }

//     return false;
//   };

//   let ret = 0;
//   for (let i = 0; i < n - 1; i++) {
//     if (scanForward(i)) ret++;
//   }

//   return ret;
// };

// another version...
// expand from center
var countBinarySubstrings = function(s) {
  const n = s.length;

  const expandCheck = i => {
    let step = 1;
    const leftChar = s[i];
    const rightChar = s[i + 1];
    while (
      i - step >= 0 &&
      i + step < n &&
      s[i - step] === leftChar &&
      s[i + step + 1] === rightChar
    ) {
      step++;
    }
    // console.log(i, step);
    return step;
  };

  let ret = 0;
  for (let i = 0; i < n - 1; i++) {
    if (s[i] !== s[i + 1]) ret += expandCheck(i);
  }

  return ret;
};

// best sol from web
// var countBinarySubstrings = function(s) {
//   var curL = 1;
//   var prevL = 0;
//   var cnt = 0;
//   var len = s.length;
//   for (let i = 1; i < len; i++) {
//     if (s[i] == s[i - 1]) {
//       curL++;
//     } else {
//       prevL = curL;
//       curL = 1;
//     }
//     if (prevL >= curL) cnt++;
//   }
//   return cnt;
// };

console.log(countBinarySubstrings('00110011')); // 6
// 0011 01 1100 10 0011 01

console.log(countBinarySubstrings('001101')); // 4
// // 0011 01 10 01

console.log(countBinarySubstrings('10101')); // 4

console.log(countBinarySubstrings('0000001')); // 1

console.log(countBinarySubstrings('11100110111010100')); // 11
// // 1    2  3    4  6  7    10 11  12 13  14
// // 1100 10 0011 01 10 01   10 01  10 01  10
