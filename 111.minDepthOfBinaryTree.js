const treeUtil = require('./tree.util');
const { TreeNode, buildTree, printTree } = treeUtil;

/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
  if (root) {
    let lh = minDepth(root.left);
    let rh = minDepth(root.right);
    // console.log(root, lh, rh);
    if (lh && rh) {
      return Math.min(lh, rh) + 1;
    } else if (lh) {
      return lh + 1;
    } else if (rh) {
      return rh + 1;
    }
    return 1;
  }
  return 0;
};

console.log(minDepth(buildTree([3, 9, 20, null, null, 15, 7])));
// 2

console.log(minDepth(buildTree([1, 2])));
// 2
