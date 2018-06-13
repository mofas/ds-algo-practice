/**
 * @param {number[]} nums
 * @return {number[]}
 */

// top-bottom DP
// slow
// sort is expensive
// use too many memories
// var largestDivisibleSubset = function(nums) {
//   const n = nums.length;
//   if (n === 0) return [];

//   nums.sort((a, b) => a - b);

//   const cache = {};

//   const helper = i => {
//     if (i < 0) return [];

//     if (cache[i]) return cache[i];

//     let candidates = helper(i - 1);
//     const current = nums[i];
//     let longest = 0;
//     // check if there is any candidate we can extend.
//     let ret = [];
//     let isExtend = false;
//     candidates.forEach(cand => {
//       ret.push(cand);
//       if (current % cand[cand.length - 1] === 0) {
//         const newCand = cand.slice();
//         newCand.push(current);
//         ret.push(newCand);
//         longest = Math.max(longest, newCand.length);
//         isExtend = true;
//       }
//     });
//     if (!isExtend) ret = ret.concat([[current]]);

//     // do some filter here
//     ret = ret.filter(d => d.length + n - i >= longest);
//     console.log(i, ret);

//     cache[i] = ret;
//     return ret;
//   };

//   const cands = helper(n - 1);
//   let ret = cands[0];
//   // choose the max one
//   for (let i = 0; i < cands.length; i++) {
//     if (cands[i].length > ret.length) ret = cands[i];
//   }
//   return ret;
// };

// bottom-top DP
// pretty fast !!
var largestDivisibleSubset = function(nums) {
  const n = nums.length;
  if (n === 0) return [];

  const ret = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < n; i++) {
    let len = 1;
    let arr = [nums[i]];
    for (let j = ret.length - 1; j >= 0; j--) {
      const factor = ret[j].factor;
      if (ret[j].arr.length < arr.length) break;
      if (nums[i] % factor === 0) {
        // console.log('trigg', nums[i], factor);
        if (ret[j].arr.length + 1 > len) {
          arr = ret[j].arr.concat([nums[i]]);
          len = ret[j].arr.length + 1;
        }
      }
    }
    ret.push({ factor: nums[i], arr });
    // console.log(nums[i], ret);
  }

  let longest = ret[ret.length - 1].arr;
  ret.forEach(d => {
    if (d.arr.length > longest.length) longest = d.arr;
  });

  return longest;
};

console.log(largestDivisibleSubset([1, 2, 3]));
// [1, 2] or [1, 3]

console.log(largestDivisibleSubset([1, 2, 4, 8]));
// [1, 2, 4, 8]

console.log(largestDivisibleSubset([4, 8, 10, 240]));
// [4,8, 240]

console.log(largestDivisibleSubset([2, 3, 4, 9, 8]));
// [2, 4, 8]

console.log(largestDivisibleSubset([1, 2, 3, 4, 5, 9, 12, 16]));
// [1,2,4,12] or [1,2,4,16]

console.log(largestDivisibleSubset([1, 2, 3, 5, 7, 11, 25, 121, 125]));
// [1, 5, 25, 125]

// console.log(
//   largestDivisibleSubset([
//     1,
//     2,
//     4,
//     8,
//     16,
//     32,
//     64,
//     128,
//     256,
//     512,
//     1024,
//     2048,
//     4096,
//     8192,
//     16384,
//     32768,
//     65536,
//     131072,
//     262144,
//     524288,
//     1048576,
//     2097152,
//     4194304,
//     8388608,
//     16777216,
//     33554432,
//     67108864,
//     134217728,
//     268435456,
//     536870912,
//     1073741824
//   ])
// );
