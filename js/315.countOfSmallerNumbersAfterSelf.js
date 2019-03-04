/**
 * @param {number[]} nums
 * @return {number[]}
 */
// fail
// var countSmaller = function(nums) {
//   const n = nums.length;
//   let last = Infinity;
//   let count = 0;
//   let helper = [];
//   let ret = [];
//   for (let i = n - 1; i >= 0; i--) {
//     if (nums[i] < last) {
//       count = 0;
//     } else {
//       count++;
//     }
//     // console.log(nums[i], count);
//     helper.unshift(count);
//     last = nums[i];
//   }
//   // [1, 0, 1, 0]
//   console.log(helper);
//   for (let i = 0; i < n; i++) {
//     const current = nums[i];
//     // search the
//   }
//   return ret;
// };

// https://leetcode.com/problems/count-of-smaller-numbers-after-self/discuss/244041/Javascript-sorted-array-%2B-binary-search
// 110ms
var countSmaller = function(nums) {
  const sorted = [...nums].sort((a, b) => a - b);
  const count = new Array(nums.length);

  const popTarget = target => {
    let start = 0;
    let end = sorted.length;
    while (start < end) {
      const middle = Math.floor((start + end) / 2);
      if (sorted[middle] < target) {
        start = middle + 1;
        continue;
      }
      end = middle;
      continue;
    }
    sorted.splice(start, 1);
    return start;
  };

  // console.log('=', sorted);
  for (let i = 0; i < nums.length; i++) {
    count[i] = popTarget(nums[i]);
    // console.log(count[i], sorted);
  }

  return count;
};

// best sol
// 76ms
class TreeNode {
  constructor(val) {
    this.val = val;
    this.count = 1;
    this.left = this.right = null;
  }
}
var countSmaller = function(nums) {
  const N = nums.length;
  if (N === 0) return [];

  let root = new TreeNode(nums[N - 1]);
  let ans = [0];
  for (let i = N - 2; i >= 0; i--) {
    ans.unshift(insert(nums[i]));
  }
  return ans;
  function insert(num) {
    let r = root;
    let count = 0;
    while (true) {
      if (num <= r.val) {
        r.count++;
        if (!r.left) {
          r.left = new TreeNode(num);
          break;
        } else {
          r = r.left;
        }
      } else if (num > r.val) {
        count += r.count;
        if (!r.right) {
          r.right = new TreeNode(num);
          break;
        } else {
          r = r.right;
        }
      } else {
        r.count++;
        break;
      }
    }
    return count;
  }
};

console.log(countSmaller([5, 2, 6, 1]));
// [2, 1, 1, 0]

console.log(countSmaller([1, 2, 3, 2, 1]));
// [ 0, 1, 2, 1, 0 ]

console.log(countSmaller([1, 2, 3, 1, 2, 3]));
// [ 0, 1, 2, 0, 0, 0 ]

console.log(countSmaller([1, 2, 3, 4, 5]));
// [ 0, 0, 0, 0, 0 ]
