/**
 * @param {string} s
 * @return {number[]}
 */

// https://leetcode.com/problems/find-permutation/discuss/96624/1-liner-and-5-liner-visual-explanation
var findPermutation = function(s) {
  const len = s.length;
  const ret = new Array(len + 1).fill(0).map((_, i) => i + 1);
  let i = 0;
  while (i < len) {
    let from = i;
    while (s[i] === 'D') {
      i++;
    }

    // reverse range
    const reverseArr = ret.slice(from, i + 1).reverse();
    // console.log(from, i, reverseArr);
    for (let j = 0; j < i - from + 1; j++) {
      ret[from + j] = reverseArr[j];
    }
    i++;
  }
  return ret;
};

console.log(findPermutation('D'));
// [2, 1]

console.log(findPermutation('I'));
// [1, 2]

console.log(findPermutation('DI'));
// [2, 1, 3]

console.log(findPermutation('DD'));
// [3, 2, 1]

console.log(findPermutation('DDII'));
// [3,2,1,4,5]

console.log(findPermutation('DIDI'));
// [2,1,4,3,5]

console.log(findPermutation('DDDII'));
// [4,3,2,1,5,6]
