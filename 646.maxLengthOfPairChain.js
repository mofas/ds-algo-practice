/**
 * @param {number[][]} pairs
 * @return {number}
 */

// 188ms
var findLongestChain = function(pairs) {
  const n = pairs.length;
  pairs.sort((a, b) => a[0] - b[0]);
  const cache = new Array(n + 1).fill(null);
  // console.log(pairs);
  const helper = current => {
    if (cache[current] != null) return cache[current];
    // console.log('in', current);
    let max = 0;
    const currentEnd = pairs[current][1];
    for (let i = current + 1; i < n; i++) {
      if (pairs[i][0] > currentEnd) {
        max = Math.max(max, helper(i) + 1);
      }
    }
    // console.log(current, max);
    cache[current] = max;
    return max;
  };
  let max = 0;
  for (let i = 0; i < n - max + 1; i++) {
    max = Math.max(max, helper(i) + 1);
  }
  return max;
};

// best sol from web
// 76 ms
// var findLongestChain = function(pairs) {
//   if (!pairs) return 0;
//   if (pairs.length <= 1) return pairs.length;
//   // sort by increasing second coordinate
//   pairs.sort((a, b) => a[1] - b[1]);

//   let currEnd = pairs[0][1];
//   let count = 1;

//   for (let i = 1; i < pairs.length; i++) {
//     let pair = pairs[i];
//     if (currEnd < pair[0]) {
//       count++;
//       currEnd = pair[1];
//     }
//   }
//   return count;
// };

console.log(findLongestChain([[1, 2], [2, 3], [3, 4]]));
// 2 [1, 2] -> [3, 4]

console.log(findLongestChain([[1, 4], [2, 3], [4, 5]]));
// 2 [2, 3] -> [4, 5]

console.log(
  findLongestChain([[1, 5], [2, 6], [3, 4], [5, 8], [6, 10], [4, 9], [6, 11]])
);
// 2
