/**
 * @param {number[]} nums
 * @return {number}
 */

// 192ms
// using tree
var Tree = function(val) {
  this.val = val;
  this.left = this.right = null;
};

const insert = (tree, arr, idx, label) => {
  // console.log(idx);
  if (idx > arr.length) {
    // prefix zero
    if (!tree) tree = new Tree('0');
    tree.left = insert(tree.left, arr, idx - 1, label);
  } else if (idx > 0) {
    const key = arr.length - idx;
    // console.log(arr, key);
    if (!tree) tree = new Tree(arr[key]);
    if (arr[key] === '0') {
      tree.left = insert(tree.left, arr, idx - 1, label);
    } else if (arr[key] === '1') {
      tree.right = insert(tree.right, arr, idx - 1, label);
    }
  } else if (idx === 0) {
    // console.log('insert', label);
    return new Tree(label);
  }
  return tree;
};

const traverse = (tree, str, idx) => {
  // console.log('traverse', idx, tree);
  if (idx > str.length) {
    return traverse(tree.left, str, idx - 1);
  } else if (idx > 0) {
    const key = str.length - idx;
    if (str[key] === '0') {
      if (tree.right) {
        return traverse(tree.right, str, idx - 1);
      } else {
        return traverse(tree.left, str, idx - 1);
      }
    } else if (str[key] === '1') {
      if (tree.left) {
        return traverse(tree.left, str, idx - 1);
      } else {
        return traverse(tree.right, str, idx - 1);
      }
    }
  } else if (idx === 0) {
    // console.log('done', tree.val);
    return tree.val;
  }
};

var findMaximumXOR = function(nums) {
  const DEPTH = 32;
  let tree = new Tree('root');
  let maxLength = 0;
  let maxStr = [];
  let maxNum = [];
  for (const num of nums) {
    const str = num.toString(2);
    tree = insert(tree, str, DEPTH, num);
    if (str.length > maxLength) {
      maxLength = str.length;
      maxStr = [str];
      maxNum = [num];
    } else if (str.length === maxLength) {
      maxStr.push(str);
      maxNum.push(num);
    }
  }

  let ret = 0;
  for (let i = 0; i < maxNum.length; i++) {
    const comp = traverse(tree, maxStr[i], DEPTH);
    // console.log('====', maxNum[i], comp);
    if ((comp ^ maxNum[i]) > ret) ret = comp ^ maxNum[i];
  }

  return ret;
};

// best sol from web
// 112ms
// this is really hard to understand
var findMaximumXOR = function(nums) {
  var maxResult = 0;
  var mask = 0;
  var set, num, greedyTry;
  // 31 bits total
  for (var b = 30; b >= 0; b--) {
    // the mask will grow: 100..00 -> 110..00 -> 111..00
    mask = mask | (1 << b);
    set = new Set();
    for (var i = 0; i < nums.length; i++) {
      set.add(nums[i] & mask);
    }

    greedyTry = maxResult | (1 << b);

    for (var o of set) {
      num = o ^ greedyTry;
      if (set.has(num)) {
        maxResult = greedyTry;
        break;
      }
    }
  }
  return maxResult;
};

// public class Solution {
//   public int findMaximumXOR(int[] nums) {
//       int max = 0, mask = 0;
//       for (int i = 31; i >= 0; i--) {
//           mask |= (1 << i);
//           HashSet<Integer> set = new HashSet<Integer>();
//           for (int num : nums) {
//               set.add(num & mask); // reserve Left bits and ignore Right bits
//           }

//           /* Use 0 to keep the bit, 1 to find XOR
//            * 0 ^ 0 = 0
//            * 0 ^ 1 = 1
//            * 1 ^ 0 = 1
//            * 1 ^ 1 = 0
//            */
//           int tmp = max | (1 << i); // in each iteration, there are pair(s) whoes Left bits can XOR to max
//           for (int prefix : set) {
//               if (set.contains(tmp ^ prefix)) {
//                   max = tmp;
//               }
//           }
//       }
//       return max;
//   }
// }

console.log(findMaximumXOR([1]));
// 0

console.log(findMaximumXOR([2, 4]));
// 6

console.log(findMaximumXOR([0, 8]));
// 8

console.log(findMaximumXOR([8, 10, 2]));
// 10

console.log(findMaximumXOR([3, 10, 5, 25, 2, 8]));
// 28 = 5 ^ 25
