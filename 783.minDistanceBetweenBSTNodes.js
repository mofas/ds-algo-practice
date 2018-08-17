const treeUtil = require('./tree.util');
const { TreeNode, buildTree, printTree } = treeUtil;

/**
 * @param {TreeNode} root
 * @return {number}
 */
// the same question as 530
var minDiffInBST = function(root) {
  let res = Infinity;
  let prev = -Infinity;
  const traverse = root => {
    if (root) {
      traverse(root.left);
      res = Math.min(res, root.val - prev);
      prev = root.val;
      traverse(root.right);
    }
  };
  traverse(root);
  return res;
};

console.log(minDiffInBST(buildTree([4, 2, 6, 1, 3, null, null])));
