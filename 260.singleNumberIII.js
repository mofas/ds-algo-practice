/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 76ms
var singleNumber = function(nums) {
  const set = new Set();
  for (const n of nums) {
    if (set.has(n)) set.delete(n);
    else set.add(n);
  }
  return Array.from(set);
};

// best sol from web
// 56ms
var singleNumber = function(nums) {
  let AxorB = 0;
  for (let i = 0; i < nums.length; i++) {
    AxorB ^= nums[i];
  }
  let bit = AxorB & ~(AxorB - 1);
  let single1 = 0;
  let single2 = 0;
  // console.log(AxorB, bit);
  for (let i = 0; i < nums.length; i++) {
    if ((nums[i] & bit) === 0) single1 ^= nums[i];
    else single2 ^= nums[i];
  }
  return [single1, single2];
};

console.log(singleNumber([1, 2, 1, 3, 2, 5]));
// [3, 5]
