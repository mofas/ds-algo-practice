/**
 * @param {number} n
 * @return {number}
 */
// slow
var numTrees = function(n) {
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  let ret = numTrees(n - 1) * 2;
  for (let i = 1; i < n - 1; i++) {
    ret += numTrees(i) * numTrees(n - i - 1);
  }
  return ret;
};

// the best sol from web
// var numTrees = function(n) {
//   var result = [1, 1];
//   for (i = 2; i <= n; i++) {
//     result[i] = 0;
//     for (var j = 0; j < i; j++) {
//       result[i] += result[j] * result[i - 1 - j];
//     }
//   }
//   return result[n];
// };

console.log(numTrees(2));
// 2

console.log(numTrees(3));
// 5

console.log(numTrees(4));
// 14

console.log(numTrees(5));
// 42

console.log(numTrees(6));
// 132
