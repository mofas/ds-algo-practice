/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// using hashmap
// it may be slow
// 292ms
// var findSubsequences = function(nums) {
//   const n = nums.length;
//   let ret = [];
//   let temp = [];
//   const seen = new Set();
//   const combs = new Set();
//   for (let i = 0; i < n; i++) {
//     temp = [];
//     if (!seen.has(nums[i])) {
//       temp.push([nums[i]]);
//     }
//     for (let j = 0; j < ret.length; j++) {
//       const t = ret[j];
//       const lastEle = t[t.length - 1];
//       if (nums[i] >= lastEle) {
//         const newComb = t.concat([nums[i]]);
//         if (!combs.has(newComb.join(','))) {
//           temp.push(newComb);
//           combs.add(newComb.join(','));
//         }
//       }
//     }
//     temp = ret.concat(temp);
//     ret = temp;
//     seen.add(nums[i]);
//   }

//   return ret.filter(d => d.length > 1);
// };

// the best sol from web
// 224ms
// it uses backtracking
const findSubsequences = nums => {
  const res = [];
  const seq = [];
  dfs(res, seq, nums, 0);
  return res;
};

const dfs = (res, seq, nums, pos) => {
  if (seq.length > 1) {
    res.push(seq.slice());
  }
  let set = new Set();
  for (let i = pos; i < nums.length; i += 1) {
    if (
      (seq.length === 0 || seq[seq.length - 1] <= nums[i]) &&
      !set.has(nums[i])
    ) {
      seq.push(nums[i]);
      dfs(res, seq, nums, i + 1);
      seq.pop();
      set.add(nums[i]);
    }
  }
};

console.log(findSubsequences([1, 2, 3, 4, 5]));

console.log(findSubsequences([4, 6, 7, 7]));
// [[4, 6], [4, 7], [4, 6, 7], [4, 6, 7, 7], [6, 7], [6, 7, 7], [7, 7], [4, 7, 7]];

console.log(findSubsequences([4, 3, 2, 1]));
// []

console.log(findSubsequences([1, 1, 1]));
// [[1,1],[1,1,1]]

console.log(findSubsequences([1, 2, 3, 1, 1]));
// [[1, 2], [1, 2, 3], [1, 3], [1, 1], [1, 1, 1], [2, 3]];

console.log(findSubsequences([1, 2, 3, 4]));
// [
//   [1, 2],
//   [1, 2, 3],
//   [1, 2, 3, 4],
//   [1, 2, 4],
//   [1, 3],
//   [1, 3, 4],
//   [1, 4],
//   [2, 3],
//   [2, 3, 4],
//   [2, 4],
//   [3, 4]
// ];
