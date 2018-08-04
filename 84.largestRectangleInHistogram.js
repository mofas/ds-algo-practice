/**
 * @param {number[]} heights
 * @return {number}
 */

// brute force
// 844 ms
// O(n^2)
var largestRectangleArea = function(heights) {
  const n = heights.length;
  let max = 0;
  for (let i = 0; i < n; i++) {
    let left = i;
    let right = i;
    while (left > 0 && heights[left - 1] >= heights[i]) {
      left--;
    }
    while (right < n && heights[right] >= heights[i]) {
      right++;
    }
    const area = (right - left) * heights[i];
    if (area > max) max = area;
  }

  return max;
};

// best sol from web
// 60ms
var largestRectangleArea = function(heights) {
  let l = heights.length;
  if (l == 0) return 0;
  let res = 0;
  let stack = [];
  for (let i = 0; i <= l; i++) {
    let curH = i == l ? -1 : heights[i];
    while (stack.length > 0 && heights[stack[stack.length - 1]] > curH) {
      // console.log(i, ':', stack);
      let h = heights[stack.pop()];
      let w = stack.length == 0 ? i : i - stack[stack.length - 1] - 1;
      // console.log('calculate', h, w);
      res = Math.max(res, h * w);
    }
    // console.log(stack);
    stack.push(i);
  }
  return res;
};

// console.log(largestRectangleArea([1]));
// // 1

// console.log(largestRectangleArea([1, 1]));
// // 2

// console.log(largestRectangleArea([1, 2, 3, 4]));
// // 6
// //[0,1,2,3] [4,4,4,4]

// console.log(largestRectangleArea([4, 3, 2, 1]));
// // 6
// // [0,0,0,0] [1,2,3,4]

console.log(largestRectangleArea([4, 2, 0, 3, 2, 4, 3, 4]));
// 10

console.log(largestRectangleArea([2, 1, 5, 6, 2, 3]));
// 10
