/**
 * @param {number[]} nums
 * @return {boolean}
 */
// nearly brute force
// 384ms
var find132pattern = function(nums) {
  const n = nums.length;
  let stack = [];
  for (let i = 0; i < n; i++) {
    const num = nums[i];
    if (stack.length === 0) {
      stack.push(num);
    } else if (stack.length === 1) {
      if (num < stack[0]) {
        stack[0] = num;
      } else {
        stack.push(num);
      }
    } else {
      if (num > stack[stack.length - 1]) {
        stack[stack.length - 1] = num;
      } else {
        // search for cand
        // console.log('trigger', nums[i]);
        let nexti = i;
        for (let j = i; j < n; j++) {
          if (nums[j] > stack[stack.length - 1]) break;
          if (nums[j] > stack[0] && nums[j] < stack[stack.length - 1]) {
            return true;
          }
        }
        stack = [nums[i]];
      }
    }
    // console.log(stack, i);
  }
  return false;
};

// best sol
// 60ms
var find132pattern = function(nums) {
  let len = nums.length;
  let val3 = -Number.MAX_VALUE;
  let stack = [];
  for (let i = len - 1; i >= 0; i--) {
    if (nums[i] < val3) {
      return true;
    }
    while (stack.length > 0 && stack[stack.length - 1] < nums[i]) {
      val3 = stack.pop();
    }
    stack.push(nums[i]);
    console.log(stack, val3);
  }
  return false;
};

console.log(find132pattern([5, 4, 3, 2, 0, 1]));
// false

console.log(find132pattern([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]));
// false

console.log(find132pattern([-2, 1, 1]));
// false

console.log(find132pattern([3, 1, 4, 2]));
// true 1 4 2

console.log(find132pattern([-1, 3, 2, 0]));
// true [-1 3 2]  [-1 3 0] [-1 2 0]

console.log(find132pattern([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 4]));
// true

console.log(find132pattern([3, 5, 0, 3, 4, 5, 6]));
// true

console.log(find132pattern([3, 1, 4, 2]));
// true

console.log(find132pattern([8, 10, 4, 6, 5]));
// true
