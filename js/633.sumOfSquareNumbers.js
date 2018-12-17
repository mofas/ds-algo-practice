/**
 * @param {number} c
 * @return {boolean}
 */

// half brute force
// var judgeSquareSum = function(c) {
//   const n = Math.sqrt(c);
//   if (n * n === c) return true;
//   for (let i = 1; i <= n; i++) {
//     for (let j = n; j >= i; j--) {
//       const result = i * i + j * j;
//       if (result === c) return true;
//       else if (result < c) break;
//     }
//   }
//   return false;
// };

// best sol from web
var judgeSquareSum = function(c) {
  const rad = Math.sqrt(c);
  for (let i = 0; i <= rad; i++) {
    let j = Math.floor(Math.sqrt(c - i * i));
    if (i * i + j * j == c) {
      return true;
    }
  }

  return false;
};

console.log(judgeSquareSum(4));
// true

console.log(judgeSquareSum(5));
// true

console.log(judgeSquareSum(8));
// true

console.log(judgeSquareSum(13));
// true

console.log(judgeSquareSum(100));
// true

console.log(judgeSquareSum(64));
// true

console.log(judgeSquareSum(40));
// true

console.log(judgeSquareSum(42));
// false

console.log(judgeSquareSum(66));
// false

console.log(judgeSquareSum(9987234));
