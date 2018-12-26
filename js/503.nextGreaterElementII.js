/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 116ms
var nextGreaterElements = function(nums) {
  const hash = {};
  const stack = [];
  const len = nums.length;

  for (let i = 0; i < len; i++) {
    const num = nums[i];
    while (stack.length && nums[stack[stack.length - 1]] < num) {
      const x = stack.pop();
      hash[x] = i;
    }
    stack.push(i);
  }
  // console.log(stack, hash);
  for (let i = 0; i < len; i++) {
    const num = nums[i];
    while (stack.length && nums[stack[stack.length - 1]] < num) {
      const x = stack.pop();
      hash[x] = i;
    }
  }

  // console.log(stack, hash);
  return nums.map((d, i) => {
    if (hash[i] != null) return nums[hash[i]];
    return -1;
  });
};

console.log(nextGreaterElements([1, 2, 1]));
// [2, -1, 2]

console.log(nextGreaterElements([5, 4, 3, 2, 1]));
// [-1, 5, 5, 5, 5]

console.log(nextGreaterElements([100, 1, 11, 1, 120, 111, 123, 1, -1, -100]));
// [120,11,120,120,123,123,-1,100,100,100]
