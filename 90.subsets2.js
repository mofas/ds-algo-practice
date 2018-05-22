// const findAllSubset = set => {
//   if (set.length === 0) {
//     return [[]];
//   } else {
//     const [first, ...rest] = set;
//     const res = findAllSubset(rest);
//     return res.map(d => d.concat(first)).concat(res);
//   }
// };

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// const helper = (nums, hash) => {
//   if (nums.length === 0) {
//     return [[[]], null];
//   } else {
//     const [first, ...rest] = nums;
//     const [res, prev] = helper(rest, hash);
//     if (first === prev) {
//       let newRes = res.map(d => [first].concat(d));
//       newRes = newRes.filter(d => {
//         return !hash[d.join('')];
//       });
//       newRes.forEach(d => {
//         hash[d.join('')] = true;
//       });
//       console.log('newRes', hash, newRes);
//       return [newRes.concat(res), first];
//     } else {
//       const ret = res.map(d => [first].concat(d)).concat(res);
//       ret.forEach(d => {
//         hash[d.join('')] = true;
//       });
//       return [ret, first];
//     }
//   }
// };

// var subsetsWithDup = function(nums) {
//   const hash = {};
//   nums.sort((a, b) => a - b);
//   const ret = helper(nums, hash);
//   return ret[0];
// };

// best solution
var subsetsWithDup = function(nums) {
  nums.sort((a, b) => a - b);
  let result = [];
  helper(result, [], nums, 0);
  return result;
};

function helper(result, temp, nums, start) {
  console.log(start, temp);
  result.push(temp.slice());
  for (let i = start; i < nums.length; i++) {
    if (i > start && nums[i] == nums[i - 1]) continue;
    temp.push(nums[i]);
    helper(result, temp, nums, i + 1);
    temp.pop();
  }
}

// console.log(JSON.stringify(subsetsWithDup([1, 2])));
// [[1,2],[1],[2],[]]

// console.log(JSON.stringify(subsetsWithDup([1, 2, 2])));
// [[1,2,2],[1,2],[2,2],[1],[2],[]]

// console.log(JSON.stringify(subsetsWithDup([1, 1, 2, 2])));
// [[1,1,2,2],[1,1,2],[1,2,2],[1,2],[2,2],[1,1],[1],[2],[]]

// console.log(JSON.stringify(subsetsWithDup([5, 5, 5, 5, 5])));
// [[5,5,5,5,5],[5,5,5,5],[5,5,5],[5,5],[5],[]]

// console.log(JSON.stringify(subsetsWithDup([4, 4, 4, 1, 4])));
// [[1,4,4,4,4],[1,4,4,4],[1,4,4],[1,4],[1],[4,4,4,4],[4,4,4],[4,4],[4],[]]
