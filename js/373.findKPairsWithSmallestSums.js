/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */

// https://leetcode.com/problems/find-k-pairs-with-smallest-sums/discuss/84611/Java-10ms-solution-no-priority-queue
// 84ms
var kSmallestPairs = function(nums1, nums2, k) {
  const ret = [];
  const n = nums1.length;
  const m = nums2.length;
  const idx2 = new Array(n).fill(0);
  k = Math.min(n * m, k);
  for (let p = 0; p < k; p++) {
    let min = Number.MAX_SAFE_INTEGER;
    let idx = -1;
    // actually brute force to search next min
    // for all idx1
    for (let idx1 = 0; idx1 < n; idx1++) {
      if (idx2[idx1] > m) continue;
      if (nums1[idx1] + nums2[idx2[idx1]] < min) {
        min = nums1[idx1] + nums2[idx2[idx1]];
        idx = idx1;
      }
    }
    ret.push([nums1[idx], nums2[idx2[idx]]]);
    // console.log([idx, idx2], [nums1[idx], nums2[idx2[idx]]]);
    idx2[idx]++;
  }
  return ret;
};

// best sol
// 68ms
// var kSmallestPairs = function(nums1, nums2, k) {
//   k = Math.min(nums1.length * nums2.length, k);

//   const indexCache = new Array(nums1.length);
//   indexCache.fill(-1);
//   indexCache[0] = 0;
//   let indexStart = 0;
//   let indexEnd = 1;

//   const result = [];

//   let i1 = 0;
//   let i2 = 0;

//   for (let index = 0; index < k; ++index) {
//     result.push([nums1[i1], nums2[i2]]);

//     let min = Number.MAX_SAFE_INTEGER;
//     let minIndex = -1;

//     for (let j = indexStart; j <= indexEnd; ++j) {
//       if (j >= nums1.length) {
//         break;
//       }

//       const tmpNums2Index = indexCache[j] + 1;

//       if (tmpNums2Index === nums2.length) {
//         indexStart = j + 1;
//         continue;
//       }

//       const t = nums1[j] + nums2[tmpNums2Index];
//       if (t < min) {
//         min = t;
//         minIndex = j;
//       }
//     }
//     if (minIndex != -1) {
//       i1 = minIndex;
//       i2 = ++indexCache[minIndex];

//       if (i1 <= nums1.length - 1 && indexEnd === i1) {
//         indexEnd = i1 + 1;
//       }
//     }
//   }
//   return result;
// };

console.log(kSmallestPairs([1, 7, 11], [2, 4, 6], 3));
// [[1, 2], [1, 4], [1, 6]]

console.log(kSmallestPairs([1, 1, 2], [1, 2, 3], 2));
// [[1, 1], [1, 1]]

console.log(kSmallestPairs([1, 2], [3], 3));
// [[1, 3], [2, 3]]

console.log(kSmallestPairs([1, 1, 2], [1, 2, 3], 10));
// [[1, 1], [1, 1], [2, 1], [1, 2], [1, 2], [2, 2], [1, 3], [1, 3], [2, 3]]
