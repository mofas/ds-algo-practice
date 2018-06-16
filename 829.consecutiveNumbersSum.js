/**
 * @param {number} N
 * @return {number}
 */

// brute force
// slow
// last case cost 0.5sec
// var consecutiveNumbersSum = function(N) {
//   let ret = 1;
//   let div = 1;
//   let min = N;
//   let check = 0;
//   // console.log('enter', N);
//   while (min > 0) {
//     div++;
//     min = Math.floor(N / div) - Math.floor((div - 1) / 2);
//     if (min < 1) return ret;
//     check = 0;
//     for (let i = 0; i < div; i++) {
//       check += min + i;
//     }
//     // console.log('===', div, min, check);
//     if (check === N) ret++;
//   }

//   return ret;
// };

// the last case cost 0. 06sec
var consecutiveNumbersSum = function(N) {
  let ret = 1;
  let div = 1;
  let avg = N;
  let min = N;
  let check = 0;
  // console.log('enter', N);
  while (min > 0) {
    div++;
    avg = Math.floor(N / div);
    min = avg - Math.floor((div - 1) / 2);
    if (min < 1) return ret;
    check = avg * div;
    if (div % 2 === 0) check += div / 2;
    // console.log('target', N, '===', div, min, 'avg', avg, check);
    if (check === N) ret++;
  }

  return ret;
};

console.log(consecutiveNumbersSum(5));
// 2

console.log(consecutiveNumbersSum(6));
// 2  (6, 1 2 3)

console.log(consecutiveNumbersSum(7));
// 2  (7, 3 4)

console.log(consecutiveNumbersSum(8));
// 1  (8)

console.log(consecutiveNumbersSum(9));
// 3 (9, 4 5, 2 3 4)

console.log(consecutiveNumbersSum(10));
// 2 (10, 1 2 3 4)

console.log(consecutiveNumbersSum(15));
// 4

console.log(consecutiveNumbersSum(465011614));
// 4
