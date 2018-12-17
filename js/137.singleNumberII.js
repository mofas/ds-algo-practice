/**
 * @param {number[]} nums
 * @return {number}
 */

// 84ms
var singleNumber = function(nums) {
  const set1 = new Set();
  const set2 = new Set();
  for (const num of nums) {
    if (!set1.has(num)) {
      set1.add(num);
      set2.add(num);
    } else {
      set2.delete(num);
    }
  }
  return [...set2][0];
};

// best sol from web
// 52ms
var singleNumber = function(nums) {
  let one = 0;
  let two = 0;
  for (let i = 0; i < nums.length; i++) {
    one = (one ^ nums[i]) & ~two;
    two = (two ^ nums[i]) & ~one;
  }
  return one;
};

console.log(singleNumber([2, 2, 3, 2]));
// 3

console.log(singleNumber([0, 1, 0, 1, 0, 1, 99]));
// 99
