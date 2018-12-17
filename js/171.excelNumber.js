/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
  const n = s.length;
  let ret = 0;

  for (let i = 0; i < n; i++) {
    const seq = s.charCodeAt(i) - 'A'.charCodeAt(0) + 1;
    ret = ret * 26 + seq;
  }

  return ret;
};

// best sol from web
// var titleToNumber = function(s) {
//   // Time: O(n), Space: O(1)
//   var num = 0;
//   for (var i = 0; i < s.length; i++) {
//     num = num * 26 + (s.charCodeAt(i) - 'A'.charCodeAt(0) + 1);
//   }
//   return num;
// };

console.log(titleToNumber('A'));
// 1

console.log(titleToNumber('AB'));
// 28 = 26 + 2

console.log(titleToNumber('ZY'));
// 701
