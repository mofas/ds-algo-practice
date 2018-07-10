/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  let ret = [];
  let hash = {};
  nums1.forEach(d => {
    hash[d] = hash[d] || 0;
    hash[d]++;
  });

  nums2.forEach(d => {
    if (hash[d]) {
      ret.push(d);
      hash[d]--;
    }
  });

  return ret;
};

console.log(intersect([1, 2, 2, 1], [2, 2, 3]));
