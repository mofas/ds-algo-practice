/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */

// brute force, time Complexity n*m^2
// var findLength = function(a, b) {
//   const m = a.length;
//   const n = b.length;

//   let max = 0;
//   let current = 0;
//   for (let i = 0; i < m; i++) {
//     for (let j = 0; j < n; j++) {
//       if (a[i] === b[j]) {
//         current = 1;
//         while (
//           a[i + current] === b[j + current] &&
//           i + current < m &&
//           j + current < n
//         ) {
//           current++;
//         }
//         if (current > max) max = current;
//       }
//     }
//   }
//   return max;
// };

var findLength = function(a, b) {
  const m = a.length;
  const n = b.length;

  const cache = Array(m + 1)
    .fill(0)
    .map(() => Array(n + 1).fill(0));

  let max = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (a[i] === b[j]) {
        const ret = 1 + cache[i][j];
        cache[i + 1][j + 1] = ret;
        max = Math.max(max, ret);
      }
    }
  }
  // console.log(cache);
  return max;
};

console.log(findLength([1, 2, 3], [1, 2])); // 2

console.log(findLength([1, 2, 3, 2, 1], [3, 2, 1, 4, 7])); // 3

console.log(findLength([1, 2, 3, 2, 1], [1, 2, 3, 5, 2, 1])); // 3

console.log(findLength([4, 1, 1, 2, 3, 2], [1, 1, 2, 3, 1])); // 4
