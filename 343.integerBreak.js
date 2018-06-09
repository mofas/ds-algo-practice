/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
  let ret = 1;
  if (n === 2) return 1;
  if (n === 3) return 2;
  if (n === 4) return 4;
  while (n >= 5) {
    ret *= 3;
    n -= 3;
  }
  ret *= n;

  return ret;
};

console.log(integerBreak(2));
// 1

console.log(integerBreak(10));
// 36 = 3*3*4

console.log(integerBreak(12));
// 81 = 3*3*3*3

console.log(integerBreak(13));
// 108 = 3*3*3*4

console.log(integerBreak(14));
// 162 = 3*3*3*3*2

console.log(integerBreak(15));
// 243 = 3*3*3*3*3

console.log(integerBreak(16));
// 324 = 3*3*3*3*4

console.log(integerBreak(18));
// 729 = 3 ^ 6
