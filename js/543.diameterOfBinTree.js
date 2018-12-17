const treeUtil = require('./tree.util');
const { TreeNode, buildTree, printTree } = treeUtil;

/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
  let max = 0;
  const helper = tree => {
    if (tree) {
      const ld = helper(tree.left);
      const rd = helper(tree.right);
      if (ld + rd > max) max = ld + rd;
      return 1 + Math.max(ld, rd);
    }
    return 0;
  };

  helper(root);

  return max;
};

console.log(diameterOfBinaryTree(buildTree([1, 2, 3, 4, 5])));
// 3
