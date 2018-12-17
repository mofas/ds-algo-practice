/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
  const n = nums.length;
  let ret = [];
  if (n === 0) return [];
  let start = nums[0];
  let prev = nums[0];

  for (let i = 1; i < n; i++) {
    const d = nums[i];
    // console.log(start, prev, d);
    if (prev + 1 !== d) {
      if (start !== prev) {
        ret.push(`${start}->${prev}`);
      } else {
        ret.push(`${start}`);
      }
      start = d;
    }
    prev = d;
  }

  // console.log('end', start, prev);
  if (start !== prev) {
    ret.push(`${start}->${prev}`);
  } else {
    ret.push(`${prev}`);
  }

  return ret;
};

console.log(summaryRanges([0, 1]));
// ["0->1"]

console.log(summaryRanges([0, 1, 2, 4, 5, 7]));
// ["0->2","4->5","7"]

console.log(summaryRanges([0, 2, 3, 4, 6, 8, 9]));
// ["0","2->4","6","8->9"]
