/**
 * @param {string[]} words
 * @return {number}
 */
// 92ms
var maxProduct = function(words) {
  const n = words.length;
  const wordsBit = words.map(d => {
    let bits = 0;
    for (let i = 0; i < d.length; i++) {
      const bit = d.charCodeAt(i) - 97;
      bits |= 1 << bit;
    }
    return bits;
  });
  let res = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if ((wordsBit[i] & wordsBit[j]) === 0) {
        // console.log(words[i], words[j]);
        res = Math.max(res, words[i].length * words[j].length);
      }
    }
  }
  return res;
};

// best sol from web
// 68ms
// just the same algor
// var maxProduct = function(words) {
//   var processed = [];
//   for (var i = 0; i < words.length; i++) {
//     processed.push(compute(words[i]));
//   }
//   var result = [];
//   var max = 0;
//   for (i = 0; i < words.length; i++) {
//     for (var j = i + 1; j < words.length; j++) {
//       if ((processed[i] & processed[j]) === 0) {
//         var cur = words[i].length * words[j].length;
//         if (cur > max) max = cur;
//       }
//     }
//   }
//   return max;
// };

// function compute(word) {
//   var val = 0;
//   var base = 'a'.charCodeAt(0);
//   for (i = 0; i < word.length; i++) {
//     val |= 1 << (word.charCodeAt(i) - base);
//   }
//   return val;
// }

console.log(maxProduct(['abcw', 'baz', 'foo', 'bar', 'xtfn', 'abcdef']));
// 16 "abcw", "xtfn".

console.log(maxProduct(['a', 'ab', 'abc', 'd', 'cd', 'bcd', 'abcd']));
// 4 "ab" "cd"

console.log(maxProduct(['a', 'aa', 'aaa', 'aaaa']));
// 0
