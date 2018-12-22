/**
 * @param {string} s
 * @return {string[][]}
 */

// 76ms
const isPalin = s => {
  let from = 0;
  let to = s.length - 1;
  while (from < to) {
    if (s[from] != s[to]) return false;
    from++;
    to--;
  }
  return true;
};
// console.log(isPalin('aa'));
// console.log(isPalin('abcba'));
// console.log(isPalin('abba'));
// console.log(isPalin('abbba'));
// //
// console.log(isPalin('aabb'));
// console.log(isPalin('abc'));
// console.log(isPalin('ab'));

var partition = function(s) {
  const ret = [];

  const helper = (s, arr) => {
    if (s === '') {
      ret.push(arr);
    }
    for (let i = 0; i < s.length; i++) {
      const subStr = s.substring(i);
      if (isPalin(subStr)) {
        let remain = s.substring(0, i);
        helper(remain, [subStr].concat(arr));
      }
    }
  };
  helper(s, []);
  return ret;
};

// best sol
// 68ms
// var partition = function(s) {
//   let ans = [];
//   _partition(ans, [], s, 0);
//   return ans;
// };

// var _partition = function(ans, tmp, s, pos) {
//   if (pos === s.length) {
//     ans.push(tmp.slice());
//     return;
//   }

//   for (let j = 1; j <= s.length; j++) {
//     if (pos + j <= s.length) {
//       let candidate = s.substring(pos, pos + j);
//       if (isPalindrome(candidate)) {
//         tmp.push(candidate);
//         _partition(ans, tmp, s, pos + j);
//         tmp.pop();
//       }
//     }
//   }
// };

// var isPalindrome = function(s) {
//   for (let i = 0; i < Math.floor(s.length / 2); i++) {
//     if (s[i] !== s[s.length - 1 - i]) {
//       return false;
//     }
//   }
//   return true;
// };

console.log(partition('aab'));
