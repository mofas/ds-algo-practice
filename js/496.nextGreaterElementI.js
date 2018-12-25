/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
  const hash = {};
  const stack = [];
  for (const n of nums2) {
    while (stack.length && stack[stack.length - 1] < n) {
      const x = stack.pop();
      hash[x] = n;
      // console.log(hash);
    }
    stack.push(n);
  }

  const ret = [];

  return nums1.map(d => {
    if (hash[d]) return hash[d];
    return -1;
  });
};

console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2]));
// [-1, 3, -1]

console.log(nextGreaterElement([2, 4], [1, 2, 3, 4]));
// [3, -1]
