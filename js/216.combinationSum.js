/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */

const cache = {};

var combinationSum3 = function(k, n) {
  if (k === 1) {
    if (n < 10) {
      return [[n]];
    }
    return [];
  } else if (cache[`${k}_${n}`]) {
    return cache[`${k}_${n}`];
  }
  let ret = [];
  for (let i = Math.min(n - 1, 9); i >= 0; i--) {
    const res = combinationSum3(k - 1, n - i)
      .filter(d => d[k - 2] < i)
      .map(d => d.concat([i]));
    ret = ret.concat(res);
  }
  cache[`${k}_${n}`] = ret;
  return ret;
};

console.log(combinationSum3(1, 3)); // [[3]]

console.log(combinationSum3(1, 6)); // [[6]]

console.log(combinationSum3(1, 10)); // [[]]

console.log(combinationSum3(2, 7)); // [ [ 3, 4 ], [ 2, 5 ], [ 1, 6 ] ]

console.log(combinationSum3(3, 7)); // [[1,2,4]]

console.log(combinationSum3(3, 9)); // [ [ 1, 2, 6 ], [ 1, 3, 5 ], [ 2, 3, 4 ] ]
console.log(combinationSum3(2, 18)); // [[]];
console.log(combinationSum3(2, 14)); // [ [ 5, 9 ], [ 6, 8 ] ]
console.log(combinationSum3(9, 45)); // [ [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ] ]
