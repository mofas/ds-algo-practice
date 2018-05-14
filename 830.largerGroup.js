/**
 * @param {string} S
 * @return {number[][]}
 */
var largeGroupPositions = function(s) {
  const ret = [];
  let start = 0;
  let i = 0,
    len = s.length;
  for (; i < len - 1; i++) {
    if (s[i] !== s[i + 1]) {
      if (i - start >= 2) {
        ret.push([start, i]);
      }
      start = i + 1;
    }
  }

  if (len > start + 2) {
    ret.push([start, len - 1]);
  }
  return ret;
};

console.log(largeGroupPositions('abbxxxxzzy')); // [[3, 6]]

console.log(largeGroupPositions('abc')); // []

console.log(largeGroupPositions('abcdddeeeeaabbbcd')); // [[3,5],[6,9],[12,14]]

console.log(largeGroupPositions('aa')); // []

console.log(largeGroupPositions('aaa')); // [[0,2]]
