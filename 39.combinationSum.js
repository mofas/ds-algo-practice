/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

var combinationSum = function(candidates, target) {
  const len = candidates.length;
  if (!len || target < 1) return [];

  let ret = [];
  for (let i = len - 1; i >= 0; i--) {
    if (candidates[i] === target) {
      ret = ret.concat([[candidates[i]]]);
    } else if (candidates[i] < target) {
      const subset = candidates.slice(0, i + 1);
      const res = combinationSum(subset, target - candidates[i]).map(d =>
        d.concat([candidates[i]])
      );
      ret = ret.concat(res);
    }
  }
  return ret;
};

console.log(combinationSum([2], 2)); // [[2]];

console.log(combinationSum([2, 3], 2)); // [[2]];

console.log(combinationSum([2, 3, 6, 7], 7)); // [[7], [2, 2, 3]];

console.log(combinationSum([2, 3, 5], 8)); // [[2, 2, 2, 2], [2, 3, 3], [3, 5]];

console.log(combinationSum([1, 2], 4)); // [[1,1,1,1],[1,1,2],[2,2]]
