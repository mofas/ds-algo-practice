/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

// 208ms
var rangeBitwiseAnd = function(m, n) {
  let res = 0xffffffff;
  res &= n;
  res &= m;

  let max = 0;
  let test = n;
  while (test > 0) {
    max++;
    test >>= 1;
  }

  for (let i = 0; i < max; i++) {
    let test = n & ~(1 << i);
    // console.log('===', test.toString(2));
    if (test > m) {
      res &= ~(1 << i);
    }
  }
  return res;
};

// best sol from web
// 188ms
// var rangeBitwiseAnd = function(m, n) {
//   var t = 0;
//   var a = m ^ n;
//   while (a > 0) {
//     a >>= 1;
//     m >>= 1;
//     t++;
//   }
//   m <<= t;
//   return m;
// };

console.log(rangeBitwiseAnd(5, 7));
// 4 101 110 111

console.log(rangeBitwiseAnd(0, 1));
// 0

console.log(rangeBitwiseAnd(0, 2147483647));
// 0

console.log(rangeBitwiseAnd(2147483646, 2147483647));
// 2147483646
