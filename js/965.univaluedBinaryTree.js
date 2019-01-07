const treeUtil = require('./tree.util');
const { TreeNode, buildTree, printTree } = treeUtil;

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isUnivalTree = function(root) {
  if (!root) return true;
  const firstVal = root.val;
  const helper = node => {
    if (!node) return true;
    return node.val === firstVal && helper(node.left) && helper(node.right);
  };
  return helper(root);
};

console.log(isUnivalTree(buildTree([1, 1, 1, 1, 1, null, 1])));
// true

console.log(isUnivalTree(buildTree([2, 2, 2, 5, 2])));
// false
