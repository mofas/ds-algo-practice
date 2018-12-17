/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */

// top-down DP
// ~ 100ms
// var minDistance = function(word1, word2) {
//   const n = word1.length;
//   const m = word2.length;

//   const cache = new Array(n).fill(0).map(_ => new Array(m).fill(0));

//   const helper = (i, j) => {
//     if (i === 0 || j === 0) return i + j;
//     else if (cache[i - 1][j - 1]) {
//       return cache[i - 1][j - 1];
//     } else if (word1[i - 1] === word2[j - 1]) {
//       return helper(i - 1, j - 1);
//     } else {
//       let ret =
//         Math.min(helper(i - 1, j), helper(i, j - 1), helper(i - 1, j - 1)) + 1;
//       cache[i - 1][j - 1] = ret;
//       return ret;
//     }
//   };

//   return helper(n, m);
// };

// bottom-up DP
// ~ 88 ms
// var minDistance = function(word1, word2) {
//   const n = word1.length;
//   const m = word2.length;

//   if (n === 0 || m === 0) return n + m;
//   const table = new Array(n + 1).fill(0).map(_ => new Array(m + 1).fill(0));

//   for (let i = 0; i <= n; i++) {
//     table[i][0] = i;
//   }

//   for (let j = 0; j <= m; j++) {
//     table[0][j] = j;
//   }

//   for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= m; j++) {
//       if (word1[i - 1] === word2[j - 1]) {
//         table[i][j] = table[i - 1][j - 1];
//       } else {
//         table[i][j] =
//           Math.min(table[i - 1][j], table[i][j - 1], table[i - 1][j - 1]) + 1;
//       }
//     }
//   }
//   return table[n][m];
// };

// bottom-up DP with table compression
// ~ 84 ms
var minDistance = function(word1, word2) {
  const n = word1.length;
  const m = word2.length;

  if (n === 0 || m === 0) return n + m;
  let prev = new Array(m + 1);
  let table = new Array(m + 1);

  for (let j = 0; j <= m; j++) {
    prev[j] = j;
  }

  for (let i = 1; i <= n; i++) {
    table[0] = i;
    for (let j = 1; j <= m; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        table[j] = prev[j - 1];
      } else {
        table[j] = Math.min(prev[j], table[j - 1], prev[j - 1]) + 1;
      }
    }
    // console.log(table);
    prev = table;
    table = new Array(m + 1);
  }
  return prev[m];
};

console.log(minDistance('horse', 'horse'));
// 0

console.log(minDistance('horse', ''));
// 5

console.log(minDistance('horse', 'ros'));
// 3

console.log(minDistance('intention', 'execution'));
// 5
