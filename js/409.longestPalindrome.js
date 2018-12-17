/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
  const hash = new Map();

  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (hash.has(c)) {
      hash.set(c, hash.get(c) + 1);
    } else {
      hash.set(c, 1);
    }
  }
  let hasRemain = false;
  let ret = 0;
  // console.log(hash);
  hash.forEach(d => {
    if (d % 2 === 1) hasRemain = true;
    // js bit operator is slow ....
    // if (d > 1) ret += d & ~1;
    if (d > 1) ret += i - (i % 2);
  });
  return hasRemain ? ret + 1 : ret;
};

// best sol from web
// var longestPalindrome = function(s) {
//   var map = {};
//   s.split('').forEach(function(e) {
//     map[e] = map[e] ? map[e] + 1 : 1;
//   });
//   var sum = 0;
//   for (let e in map) {
//     if (map[e] > 1) {
//       sum += map[e] % 2 == 0 ? map[e] : map[e] - 1;
//     }
//   }
//   return s.length > sum ? sum + 1 : sum;
// };

console.log(longestPalindrome('abccccdd'));
// 7

console.log(longestPalindrome('ccc'));
// 3
