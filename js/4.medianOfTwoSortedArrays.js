/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

// this one is too hard for me.

// vote 1 sol
// 152ms
var findMedianSortedArrays = function(nums1, nums2) {
  let m = nums1.length;
  let n = nums2.length;
  if (m > n) {
    let temp = nums1;
    nums1 = nums2;
    nums2 = temp;
    m = nums1.length;
    n = nums2.length;
  }

  let min = 0;
  let max = m;
  let half = Math.floor((m + n + 1) / 2);

  while (min <= max) {
    let i = Math.floor((min + max) / 2);
    let j = half - i;
    if (i < m && nums2[j - 1] > nums1[i]) {
      min = i + 1;
    } else if (i > 0 && nums1[i - 1] > nums2[j]) {
      max = i - 1;
    } else {
      let maxLeft = 0;
      if (i === 0) maxLeft = nums2[j - 1];
      else if (j === 0) maxLeft = nums1[i - 1];
      else maxLeft = Math.max(nums1[i - 1], nums2[j - 1]);

      if ((m + n) % 2 === 1) return maxLeft;

      let minRight = 0;
      if (i === m) minRight = nums2[j];
      else if (j === n) minRight = nums1[i];
      else minRight = Math.min(nums1[i], nums2[j]);

      return (maxLeft + minRight) / 2;
    }
  }
};

// vote 2 sol
// 108ms
var findMedianSortedArrays = function(nums1, nums2) {
  let n = nums1.length;
  let m = nums2.length;
  if (n < m) {
    return findMedianSortedArrays(nums2, nums1);
  }
  let lo = 0,
    hi = m * 2;
  // console.log(nums1, nums2, n, m);

  while (lo <= hi) {
    let mid2 = Math.floor((lo + hi) / 2);
    let mid1 = n + m - mid2;

    // console.log('===', lo, hi, 'mid', mid2, mid1);

    let l1 = mid1 === 0 ? -Infinity : nums1[Math.floor((mid1 - 1) / 2)];
    let l2 = mid2 === 0 ? -Infinity : nums2[Math.floor((mid2 - 1) / 2)];
    let r1 = mid1 === n * 2 ? Infinity : nums1[Math.floor(mid1 / 2)];
    let r2 = mid2 === m * 2 ? Infinity : nums2[Math.floor(mid2 / 2)];
    // console.log('output', l1, r1, l2, r2);
    if (l1 > r2) lo = mid2 + 1;
    else if (l2 > r1) hi = mid2 - 1;
    else return (Math.max(l1, l2) + Math.min(r1, r2)) / 2;
  }

  return -1;
};

// // best sol from web
// // 100ms
// var findMedianSortedArrays = function(nums1, nums2) {
//   var odd = (nums1.length + nums2.length) & 1 ? true : false;
//   var p = Math.floor((nums1.length + nums2.length) / 2);
//   var current;
//   var index = 0,
//     index1 = 0,
//     index2 = 0;
//   while (true) {
//     index++;
//     if (index1 < nums1.length && index2 < nums2.length) {
//       if (nums1[index1] < nums2[index2]) {
//         current = nums1[index1];
//         index1++;
//       } else {
//         current = nums2[index2];
//         index2++;
//       }
//     } else if (index1 < nums1.length) {
//       current = nums1[index1];
//       index1++;
//     } else {
//       current = nums2[index2];
//       index2++;
//     }

//     if (index == p + 1 && odd) {
//       return current;
//     } else if (index == p && !odd) {
//       if (index1 < nums1.length && index2 < nums2.length) {
//         if (nums1[index1] < nums2[index2]) return (current + nums1[index1]) / 2;
//         else return (current + nums2[index2]) / 2;
//       } else if (index1 < nums1.length) {
//         return (current + nums1[index1]) / 2;
//       } else {
//         return (current + nums2[index2]) / 2;
//       }
//     }
//   }
// };

console.log(findMedianSortedArrays([1, 3], [2]));
// 2

console.log(findMedianSortedArrays([1, 2, 5, 6], [3, 4]));
// 3.5

console.log(findMedianSortedArrays([1, 2], [3, 4]));
// 2.5

console.log(findMedianSortedArrays([1, 2, 3, 4], [1, 2, 3, 4]));
// 2.5

console.log(findMedianSortedArrays([1, 2, 3], [3, 4, 5]));
// 3

console.log(findMedianSortedArrays([1, 2, 3, 4, 5, 6, 7], [5]));
// 4.5

console.log(findMedianSortedArrays([1, 2, 3, 4, 5, 6, 7], []));
// 4
