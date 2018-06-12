/**
 * @param {number} n
 * @return {number}
 */

// top-down DP
// slow
// var numSquares = function(n) {
//   let base = 1;
//   let squareNums = [];
//   while (base * base < n) {
//     squareNums.push(base * base);
//     base++;
//   }
//   const len = squareNums.length;

//   const helper = (i, len) => {
//     if (len === 1) return i;
//     if (i === 0) return 0;

//     let min = helper(i, len - 1);
//     let move = 0;
//     while (i >= squareNums[len - 1]) {
//       i -= squareNums[len - 1];
//       move++;
//       min = Math.min(min, helper(i, len) + move);
//     }
//     return min;
//   };

//   return helper(n, len);
// };

// bottom-top DP
// still slow
// the last case costs 5 sec
// var numSquares = function(n) {
//   let base = 1;
//   let squareNums = [];
//   while (base * base <= n) {
//     squareNums.push(base * base);
//     base++;
//   }
//   const len = squareNums.length;

//   const table = new Array(n + 1).fill(0).map(d => new Array(len).fill(0));

//   for (let i = 0; i <= n; i++) {
//     table[i][0] = i;
//   }
//   for (let i = 1; i <= n; i++) {
//     for (let j = 1; j < len; j++) {
//       if (i >= squareNums[j]) {
//         table[i][j] = Math.min(
//           table[i][j - 1],
//           table[i - squareNums[j]][j] + 1
//         );
//       } else {
//         table[i][j] = table[i][j - 1];
//       }
//     }
//   }
//   // console.log(table);

//   return table[n][len - 1];
// };

// other top-down DP
// stackoverflow in last case
// var numSquares = function(n) {
//   let base = 1;
//   let squareNums = [];
//   while (base * base <= n) {
//     squareNums.push(base * base);
//     base++;
//   }
//   const len = squareNums.length;
//   const cache = new Array(n);

//   const helper = i => {
//     if (i === 0) return 0;

//     if (cache[i]) return cache[i];

//     let min = i;
//     for (let j = 1; j < len; j++) {
//       if (squareNums[j] <= i) {
//         min = Math.min(min, helper(i - squareNums[j]) + 1);
//       }
//     }
//     cache[i] = min;
//     return cache[i];
//   };

//   return helper(n);
// };

// best sol from web
// the last case costs 1.6sec
// the problem for bottom-top DP is that it calculate lots of unnecessary intermediate result.
// var memo = [];
// var numSquares = function(n) {
//   var k = Math.floor(Math.sqrt(n));

//   var tempMin = n;
//   for (var i = k; i > 0; --i) {
//     var next = n - i * i;
//     if (typeof memo[next] === 'undefined') {
//       memo[next] = numSquares(next);
//     }
//     tempMin = Math.min(tempMin, 1 + memo[next]);
//   }

//   return tempMin;
// };

// bottom-top DP with other memorization
// the last case costs 0.3sec
var numSquares = function(n) {
  let base = 1;
  let squareNums = [];
  while (base * base <= n) {
    squareNums.push(base * base);
    base++;
  }
  const len = squareNums.length;

  const table = new Array(n + 1);
  table[0] = 0;
  for (let i = 1; i <= n; i++) {
    let min = i;
    for (let j = 1; j < len; j++) {
      if (squareNums[j] <= i) {
        min = Math.min(min, table[i - squareNums[j]] + 1);
      }
    }
    table[i] = min;
  }

  // console.log(table);
  return table[n];
};

console.log(numSquares(1));
// 1

console.log(numSquares(4));
// 1

console.log(numSquares(12));
// 3

console.log(numSquares(13));
// 2

console.log(numSquares(15));
// 4

console.log(numSquares(97));
// 2 (81+16)

console.log(numSquares(19847));
// 4

console.log(numSquares(198735));
3;
