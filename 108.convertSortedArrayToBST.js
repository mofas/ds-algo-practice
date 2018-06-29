const treeUtil = require('./tree.util');
const { TreeNode, buildTree, printTree } = treeUtil;

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  const n = nums.length;
  if (n === 0) return null;
  const helper = (from, to) => {
    // console.log('enter', from, to);
    let newNode = null;
    if (to === from) {
      newNode = new TreeNode(nums[from]);
    } else if (to - from === 1) {
      newNode = new TreeNode(nums[to]);
      newNode.left = new TreeNode(nums[from]);
    } else {
      let mid = Math.floor((from + to) / 2);
      // console.log('mid', mid);
      newNode = new TreeNode(nums[mid]);
      newNode.left = helper(from, mid - 1);
      newNode.right = helper(mid + 1, to);
    }
    return newNode;
  };
  return helper(0, n - 1);
};

console.log(printTree(sortedArrayToBST([1, 2, 3])));
// [2,1,3]

console.log(printTree(sortedArrayToBST([1, 2, 3, 4])));
// [1,2,3,4]

console.log(printTree(sortedArrayToBST([-10, -3, 0, 5, 9])));
// [0,-3,9,-10,null,5]
