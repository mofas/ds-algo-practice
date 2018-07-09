/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  const set1 = new Set();
  const set2 = new Set();
  nums1.forEach(d => set1.add(d));
  nums2.forEach(d => set2.add(d));
  return [...set1].filter(x => set2.has(x));
};

// best sol from web
// var intersection = function(nums1, nums2) {
//   let hash = {};

//   for (let i = 0; i < nums1.length; i++) {
//     hash[nums1[i]] = nums1[i];
//   }

//   let dupls = [];
//   for (let i = 0; i < nums2.length; i++) {
//     if (hash[nums2[i]] !== undefined) {
//       dupls.push(nums2[i]);
//       hash[nums2[i]] = undefined;
//     }
//   }

//   return dupls;
// };

console.log(intersection([1, 2, 2, 1], [2, 2, 3]));
// 2
