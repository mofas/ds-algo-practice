/**
 * @param {number} n
 * @return {number}
 */

// too slow
// the last case cost 14 sec
// var trailingZeroes = function(n) {
//   let fact2 = 0;
//   let fact5 = 0;

//   for (let i = 1; i <= n; i++) {
//     let r = i;
//     while (r % 2 === 0) {
//       r /= 2;
//       fact2++;
//     }
//     while (r % 5 === 0) {
//       r /= 5;
//       fact5++;
//     }
//   }

//   return Math.min(fact2, fact5);
// };

// however, we know fact5 is much fewer than fact2
// so we only need to calculate the number of fact5
var trailingZeroes = function(n) {
  let fact5 = 0;

  let r = n;
  while (r / 5 >= 1) {
    fact5 += Math.floor(r / 5);
    r = Math.floor(r / 5);
  }

  return fact5;
};

console.log(trailingZeroes(3));
// 0

console.log(trailingZeroes(5));
// 1

console.log(trailingZeroes(10));
// 2

console.log(trailingZeroes(50));
// 12

console.log(trailingZeroes(2147483647));
// 536870902
